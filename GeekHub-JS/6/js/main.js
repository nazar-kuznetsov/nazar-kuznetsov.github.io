;
(function () {

  var cart = {};

  $('document').ready(function () {
    var priceTotal = 0;
    var body = $(document.body);
    var deleteAllGoods = $('#delete-all-goods');
    var basket = $('#basket');
    var goods = $('#goods__list [data-goods]');

    checkLocalStorage();

    goods.on('mousedown', function (event) {
      event.preventDefault();
      var baseProduct = $(event.currentTarget);
      var product = baseProduct.clone();
      var id;

      var offset = {
        left: event.pageX - baseProduct.offset().left,
        top: event.pageY - baseProduct.offset().top
      };

      product.css({
        'width': baseProduct.width(),
        'left': event.pageX - offset.left,
        'top': event.pageY - offset.top
      });

      baseProduct.addClass('hidden');
      product.appendTo(body);

      var resetBasket;
      var targetProduct;

      body.on('mousemove', function (event) {
        product.css({
          'left': event.pageX - offset.left,
          'top': event.pageY - offset.top
        });

        // Получаем кординаты корзины
        var basketRect = rect(basket);
        var goodsRect = rect(product);

        targetProduct = overlap(basketRect[0].rect, goodsRect[0].rect);

        if (targetProduct) {
          basketRect[0].nod.addClass('active');
          resetBasket = targetProduct;
        }

        if (resetBasket && !targetProduct) {
          basketRect[0].nod.removeClass('active');
        }

      });

      body.on('mouseup', function () {
        resetGoods(product, baseProduct);

        if (targetProduct) {
          // добавляем товар в корзину
          resetGoods(product, baseProduct);
          id = product.attr('data-artical');
          if (cart[id] === undefined) {
            cart[id] = {
              pcs: 1,
              name: $(product).children('.goods__title').html(),
              price: $(product).children('[data-price]').attr('data-price'),
              img: $(product).children('.goods__photo').attr('src')
            };
          } else {
            cart[id].pcs += 1;
          }
          saveLocalStorage();
          showTable();
        }

      });

    });

    function showTable() {
      // Выводим товар в который в корзине на страницу
      var out = '';
      var orderNumber = 0;
      var totalPrice = 0;

      for (var key in cart) {
        out += `<tr data-line=${key}">`;
        out += `<td>${orderNumber +=  1}</td>`;
        out += `<td>${cart[key].name} <br> <img src="${cart[key].img}"></td>`;
        out += `<td>${cart[key].price}</td>`;
        out += `<td><button data-id=${key} data-pcs="min" class="btn-pcs">-</button><input class="input-table" type="text" data-input="${key}" value="${cart[key].pcs}"><button data-id=${key} data-pcs="max" class="btn-pcs">+</button></td>`;
        out += `<td><span data-button-artical=${key} class="delete-goods">&#10006;</span></td>`;
        totalPrice += cart[key].price * cart[key].pcs;
        out += '</tr>';
      }

      $('#product-out').html(out);
      showCartStatus(totalPrice);
      $('#product-out [data-button-artical]').on('click', deleteProduct);
      $('#product-out [data-input]').on('change', setPcsGoods);
      $('.btn-pcs').on('click', btnPrice);
      priceTotal = totalPrice;
    }

    function btnPrice() {
      // Увеличить или Уменшить колисество на 1шт
      var btnPcs = $(this).attr('data-pcs');
      var id = $(this).attr('data-id');

      if (btnPcs === 'max') {
        cart[id].pcs += 1;
      } else if (btnPcs === 'min') {
        if (cart[id].pcs <= 0) {
          return false;
        }
        cart[id].pcs -= 1;
      }
      saveLocalStorage();
      showTable();
    }

    function showCartStatus(totalPrice) {
      var orderBox = $('#send-order');
      var outBasketState = $('#total');

      if (!isEmpty(cart)) {
        outBasketState.html('Ваша корзина пуста');
        deleteAllGoods.hide();
        orderBox.hide();
      } else {
        orderBox.show();
        deleteAllGoods.css('display', 'inline-block');
        outBasketState.html(totalPrice + ' грн');
      }
    }


    $('#send-order__button').on('click', sendOrder);

    deleteAllGoods.on('click', function () {
      // Очистить корзину
      cart = {};
      saveLocalStorage();
      showTable();
    });

    function checkLocalStorage() {
      // добавить товар в корзину из LocalStorage
      if (localStorage.getItem('cart') !== null) {
        cart = JSON.parse(localStorage.getItem('cart'));
        showTable();
      } else {
        showCartStatus();
      }
    }

    function setPcsGoods(event) {
      // установить новое количество шт, какое ввели в input
      var id = $(this).attr('data-input');
      cart[id].pcs = +event.target.value;
      saveLocalStorage();
      showTable();
    }

    function deleteProduct() {
      // удалить позицию товара в корзине
      var id = $(this).attr('data-button-artical');
      delete cart[id];
      saveLocalStorage();
      showTable();
    }

    function sendOrder() {
      // Показывать форму отправки заказа
      $('.form-order-overlay').toggleClass('active');
      $('.form-order-close').on('click', sendOrder);
      $('#form-order-total').html('Сумма заказа ' + priceTotal + ' грн');
    }

  });


  $('#send-order-form').on('submit', function (event) {
    event.preventDefault();
    var ename = $('#user-name').val();
    var ephone = $('#user-phone').val();
    var email = $('#user-email').val();

    if (isEmpty(cart)) {
      $.post(
        "core/mail.php", {
          "ename": ename,
          "ephone": ephone,
          "email": email,
          "cart": cart
        },
        function (data) {
          console.log(data);
        }
      )
    } else {
      alert('Корзина пуста');
    }

    // if (formValidate(name.val())) {
    //   console.log('Вы должны ввести имя!!');
    // } else if (formValidate(phone.val())) {
    //   console.log('Вы должны ввести телефон');
    // }

  });

  function resetGoods(product, baseProduct) {
    product.remove();
    baseProduct.removeClass('hidden');
  }

  function rect(node) {
    // Возращает кординаты элемента и сам элемент
    var cord = node.toArray().map(function (item) {
      return {
        nod: $(item),
        rect: item.getBoundingClientRect()
      };
    });
    return cord;
  }

  function overlap(rect1, rect2) {
    return !(rect1.right < rect2.left ||
      rect1.left > rect2.right ||
      rect1.bottom < rect2.top ||
      rect1.top > rect2.bottom);
  }

  function isEmpty(object) {
    // Проверяем обект на пустоту
    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        return true;
      }
    }
    return false;
  }

  function saveLocalStorage() {
    // Сохраняем корзину в локальном хранилище
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  function deleteGoods(id) {
    // body

      delete cart[id];
      saveLocalStorage();
      return false;
  }



})();

// Проверить количество на отрицательное значение
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIjtcclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgdmFyIGNhcnQgPSB7fTtcclxuXHJcbiAgJCgnZG9jdW1lbnQnKS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcHJpY2VUb3RhbCA9IDA7XHJcbiAgICB2YXIgYm9keSA9ICQoZG9jdW1lbnQuYm9keSk7XHJcbiAgICB2YXIgZGVsZXRlQWxsR29vZHMgPSAkKCcjZGVsZXRlLWFsbC1nb29kcycpO1xyXG4gICAgdmFyIGJhc2tldCA9ICQoJyNiYXNrZXQnKTtcclxuICAgIHZhciBnb29kcyA9ICQoJyNnb29kc19fbGlzdCBbZGF0YS1nb29kc10nKTtcclxuXHJcbiAgICBjaGVja0xvY2FsU3RvcmFnZSgpO1xyXG5cclxuICAgIGdvb2RzLm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdmFyIGJhc2VQcm9kdWN0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgdmFyIHByb2R1Y3QgPSBiYXNlUHJvZHVjdC5jbG9uZSgpO1xyXG4gICAgICB2YXIgaWQ7XHJcblxyXG4gICAgICB2YXIgb2Zmc2V0ID0ge1xyXG4gICAgICAgIGxlZnQ6IGV2ZW50LnBhZ2VYIC0gYmFzZVByb2R1Y3Qub2Zmc2V0KCkubGVmdCxcclxuICAgICAgICB0b3A6IGV2ZW50LnBhZ2VZIC0gYmFzZVByb2R1Y3Qub2Zmc2V0KCkudG9wXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBwcm9kdWN0LmNzcyh7XHJcbiAgICAgICAgJ3dpZHRoJzogYmFzZVByb2R1Y3Qud2lkdGgoKSxcclxuICAgICAgICAnbGVmdCc6IGV2ZW50LnBhZ2VYIC0gb2Zmc2V0LmxlZnQsXHJcbiAgICAgICAgJ3RvcCc6IGV2ZW50LnBhZ2VZIC0gb2Zmc2V0LnRvcFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGJhc2VQcm9kdWN0LmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgcHJvZHVjdC5hcHBlbmRUbyhib2R5KTtcclxuXHJcbiAgICAgIHZhciByZXNldEJhc2tldDtcclxuICAgICAgdmFyIHRhcmdldFByb2R1Y3Q7XHJcblxyXG4gICAgICBib2R5Lm9uKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBwcm9kdWN0LmNzcyh7XHJcbiAgICAgICAgICAnbGVmdCc6IGV2ZW50LnBhZ2VYIC0gb2Zmc2V0LmxlZnQsXHJcbiAgICAgICAgICAndG9wJzogZXZlbnQucGFnZVkgLSBvZmZzZXQudG9wXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vINCf0L7Qu9GD0YfQsNC10Lwg0LrQvtGA0LTQuNC90LDRgtGLINC60L7RgNC30LjQvdGLXHJcbiAgICAgICAgdmFyIGJhc2tldFJlY3QgPSByZWN0KGJhc2tldCk7XHJcbiAgICAgICAgdmFyIGdvb2RzUmVjdCA9IHJlY3QocHJvZHVjdCk7XHJcblxyXG4gICAgICAgIHRhcmdldFByb2R1Y3QgPSBvdmVybGFwKGJhc2tldFJlY3RbMF0ucmVjdCwgZ29vZHNSZWN0WzBdLnJlY3QpO1xyXG5cclxuICAgICAgICBpZiAodGFyZ2V0UHJvZHVjdCkge1xyXG4gICAgICAgICAgYmFza2V0UmVjdFswXS5ub2QuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgcmVzZXRCYXNrZXQgPSB0YXJnZXRQcm9kdWN0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJlc2V0QmFza2V0ICYmICF0YXJnZXRQcm9kdWN0KSB7XHJcbiAgICAgICAgICBiYXNrZXRSZWN0WzBdLm5vZC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBib2R5Lm9uKCdtb3VzZXVwJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJlc2V0R29vZHMocHJvZHVjdCwgYmFzZVByb2R1Y3QpO1xyXG5cclxuICAgICAgICBpZiAodGFyZ2V0UHJvZHVjdCkge1xyXG4gICAgICAgICAgLy8g0LTQvtCx0LDQstC70Y/QtdC8INGC0L7QstCw0YAg0LIg0LrQvtGA0LfQuNC90YNcclxuICAgICAgICAgIHJlc2V0R29vZHMocHJvZHVjdCwgYmFzZVByb2R1Y3QpO1xyXG4gICAgICAgICAgaWQgPSBwcm9kdWN0LmF0dHIoJ2RhdGEtYXJ0aWNhbCcpO1xyXG4gICAgICAgICAgaWYgKGNhcnRbaWRdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY2FydFtpZF0gPSB7XHJcbiAgICAgICAgICAgICAgcGNzOiAxLFxyXG4gICAgICAgICAgICAgIG5hbWU6ICQocHJvZHVjdCkuY2hpbGRyZW4oJy5nb29kc19fdGl0bGUnKS5odG1sKCksXHJcbiAgICAgICAgICAgICAgcHJpY2U6ICQocHJvZHVjdCkuY2hpbGRyZW4oJ1tkYXRhLXByaWNlXScpLmF0dHIoJ2RhdGEtcHJpY2UnKSxcclxuICAgICAgICAgICAgICBpbWc6ICQocHJvZHVjdCkuY2hpbGRyZW4oJy5nb29kc19fcGhvdG8nKS5hdHRyKCdzcmMnKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2FydFtpZF0ucGNzICs9IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzYXZlTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgICAgICBzaG93VGFibGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBzaG93VGFibGUoKSB7XHJcbiAgICAgIC8vINCS0YvQstC+0LTQuNC8INGC0L7QstCw0YAg0LIg0LrQvtGC0L7RgNGL0Lkg0LIg0LrQvtGA0LfQuNC90LUg0L3QsCDRgdGC0YDQsNC90LjRhtGDXHJcbiAgICAgIHZhciBvdXQgPSAnJztcclxuICAgICAgdmFyIG9yZGVyTnVtYmVyID0gMDtcclxuICAgICAgdmFyIHRvdGFsUHJpY2UgPSAwO1xyXG5cclxuICAgICAgZm9yICh2YXIga2V5IGluIGNhcnQpIHtcclxuICAgICAgICBvdXQgKz0gYDx0ciBkYXRhLWxpbmU9JHtrZXl9XCI+YDtcclxuICAgICAgICBvdXQgKz0gYDx0ZD4ke29yZGVyTnVtYmVyICs9ICAxfTwvdGQ+YDtcclxuICAgICAgICBvdXQgKz0gYDx0ZD4ke2NhcnRba2V5XS5uYW1lfSA8YnI+IDxpbWcgc3JjPVwiJHtjYXJ0W2tleV0uaW1nfVwiPjwvdGQ+YDtcclxuICAgICAgICBvdXQgKz0gYDx0ZD4ke2NhcnRba2V5XS5wcmljZX08L3RkPmA7XHJcbiAgICAgICAgb3V0ICs9IGA8dGQ+PGJ1dHRvbiBkYXRhLWlkPSR7a2V5fSBkYXRhLXBjcz1cIm1pblwiIGNsYXNzPVwiYnRuLXBjc1wiPi08L2J1dHRvbj48aW5wdXQgY2xhc3M9XCJpbnB1dC10YWJsZVwiIHR5cGU9XCJ0ZXh0XCIgZGF0YS1pbnB1dD1cIiR7a2V5fVwiIHZhbHVlPVwiJHtjYXJ0W2tleV0ucGNzfVwiPjxidXR0b24gZGF0YS1pZD0ke2tleX0gZGF0YS1wY3M9XCJtYXhcIiBjbGFzcz1cImJ0bi1wY3NcIj4rPC9idXR0b24+PC90ZD5gO1xyXG4gICAgICAgIG91dCArPSBgPHRkPjxzcGFuIGRhdGEtYnV0dG9uLWFydGljYWw9JHtrZXl9IGNsYXNzPVwiZGVsZXRlLWdvb2RzXCI+JiMxMDAwNjs8L3NwYW4+PC90ZD5gO1xyXG4gICAgICAgIHRvdGFsUHJpY2UgKz0gY2FydFtrZXldLnByaWNlICogY2FydFtrZXldLnBjcztcclxuICAgICAgICBvdXQgKz0gJzwvdHI+JztcclxuICAgICAgfVxyXG5cclxuICAgICAgJCgnI3Byb2R1Y3Qtb3V0JykuaHRtbChvdXQpO1xyXG4gICAgICBzaG93Q2FydFN0YXR1cyh0b3RhbFByaWNlKTtcclxuICAgICAgJCgnI3Byb2R1Y3Qtb3V0IFtkYXRhLWJ1dHRvbi1hcnRpY2FsXScpLm9uKCdjbGljaycsIGRlbGV0ZVByb2R1Y3QpO1xyXG4gICAgICAkKCcjcHJvZHVjdC1vdXQgW2RhdGEtaW5wdXRdJykub24oJ2NoYW5nZScsIHNldFBjc0dvb2RzKTtcclxuICAgICAgJCgnLmJ0bi1wY3MnKS5vbignY2xpY2snLCBidG5QcmljZSk7XHJcbiAgICAgIHByaWNlVG90YWwgPSB0b3RhbFByaWNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGJ0blByaWNlKCkge1xyXG4gICAgICAvLyDQo9Cy0LXQu9C40YfQuNGC0Ywg0LjQu9C4INCj0LzQtdC90YjQuNGC0Ywg0LrQvtC70LjRgdC10YHRgtCy0L4g0L3QsCAx0YjRglxyXG4gICAgICB2YXIgYnRuUGNzID0gJCh0aGlzKS5hdHRyKCdkYXRhLXBjcycpO1xyXG4gICAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKTtcclxuXHJcbiAgICAgIGlmIChidG5QY3MgPT09ICdtYXgnKSB7XHJcbiAgICAgICAgY2FydFtpZF0ucGNzICs9IDE7XHJcbiAgICAgIH0gZWxzZSBpZiAoYnRuUGNzID09PSAnbWluJykge1xyXG4gICAgICAgIGlmIChjYXJ0W2lkXS5wY3MgPD0gMCkge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXJ0W2lkXS5wY3MgLT0gMTtcclxuICAgICAgfVxyXG4gICAgICBzYXZlTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgIHNob3dUYWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dDYXJ0U3RhdHVzKHRvdGFsUHJpY2UpIHtcclxuICAgICAgdmFyIG9yZGVyQm94ID0gJCgnI3NlbmQtb3JkZXInKTtcclxuICAgICAgdmFyIG91dEJhc2tldFN0YXRlID0gJCgnI3RvdGFsJyk7XHJcblxyXG4gICAgICBpZiAoIWlzRW1wdHkoY2FydCkpIHtcclxuICAgICAgICBvdXRCYXNrZXRTdGF0ZS5odG1sKCfQktCw0YjQsCDQutC+0YDQt9C40L3QsCDQv9GD0YHRgtCwJyk7XHJcbiAgICAgICAgZGVsZXRlQWxsR29vZHMuaGlkZSgpO1xyXG4gICAgICAgIG9yZGVyQm94LmhpZGUoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBvcmRlckJveC5zaG93KCk7XHJcbiAgICAgICAgZGVsZXRlQWxsR29vZHMuY3NzKCdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpO1xyXG4gICAgICAgIG91dEJhc2tldFN0YXRlLmh0bWwodG90YWxQcmljZSArICcg0LPRgNC9Jyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgJCgnI3NlbmQtb3JkZXJfX2J1dHRvbicpLm9uKCdjbGljaycsIHNlbmRPcmRlcik7XHJcblxyXG4gICAgZGVsZXRlQWxsR29vZHMub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAvLyDQntGH0LjRgdGC0LjRgtGMINC60L7RgNC30LjQvdGDXHJcbiAgICAgIGNhcnQgPSB7fTtcclxuICAgICAgc2F2ZUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgICBzaG93VGFibGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrTG9jYWxTdG9yYWdlKCkge1xyXG4gICAgICAvLyDQtNC+0LHQsNCy0LjRgtGMINGC0L7QstCw0YAg0LIg0LrQvtGA0LfQuNC90YMg0LjQtyBMb2NhbFN0b3JhZ2VcclxuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0JykgIT09IG51bGwpIHtcclxuICAgICAgICBjYXJ0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydCcpKTtcclxuICAgICAgICBzaG93VGFibGUoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzaG93Q2FydFN0YXR1cygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0UGNzR29vZHMoZXZlbnQpIHtcclxuICAgICAgLy8g0YPRgdGC0LDQvdC+0LLQuNGC0Ywg0L3QvtCy0L7QtSDQutC+0LvQuNGH0LXRgdGC0LLQviDRiNGCLCDQutCw0LrQvtC1INCy0LLQtdC70Lgg0LIgaW5wdXRcclxuICAgICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlucHV0Jyk7XHJcbiAgICAgIGNhcnRbaWRdLnBjcyA9ICtldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgIHNhdmVMb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgc2hvd1RhYmxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlUHJvZHVjdCgpIHtcclxuICAgICAgLy8g0YPQtNCw0LvQuNGC0Ywg0L/QvtC30LjRhtC40Y4g0YLQvtCy0LDRgNCwINCyINC60L7RgNC30LjQvdC1XHJcbiAgICAgIHZhciBpZCA9ICQodGhpcykuYXR0cignZGF0YS1idXR0b24tYXJ0aWNhbCcpO1xyXG4gICAgICBkZWxldGUgY2FydFtpZF07XHJcbiAgICAgIHNhdmVMb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgc2hvd1RhYmxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2VuZE9yZGVyKCkge1xyXG4gICAgICAvLyDQn9C+0LrQsNC30YvQstCw0YLRjCDRhNC+0YDQvNGDINC+0YLQv9GA0LDQstC60Lgg0LfQsNC60LDQt9CwXHJcbiAgICAgICQoJy5mb3JtLW9yZGVyLW92ZXJsYXknKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICQoJy5mb3JtLW9yZGVyLWNsb3NlJykub24oJ2NsaWNrJywgc2VuZE9yZGVyKTtcclxuICAgICAgJCgnI2Zvcm0tb3JkZXItdG90YWwnKS5odG1sKCfQodGD0LzQvNCwINC30LDQutCw0LfQsCAnICsgcHJpY2VUb3RhbCArICcg0LPRgNC9Jyk7XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxuXHJcbiAgJCgnI3NlbmQtb3JkZXItZm9ybScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB2YXIgZW5hbWUgPSAkKCcjdXNlci1uYW1lJykudmFsKCk7XHJcbiAgICB2YXIgZXBob25lID0gJCgnI3VzZXItcGhvbmUnKS52YWwoKTtcclxuICAgIHZhciBlbWFpbCA9ICQoJyN1c2VyLWVtYWlsJykudmFsKCk7XHJcblxyXG4gICAgaWYgKGlzRW1wdHkoY2FydCkpIHtcclxuICAgICAgJC5wb3N0KFxyXG4gICAgICAgIFwiY29yZS9tYWlsLnBocFwiLCB7XHJcbiAgICAgICAgICBcImVuYW1lXCI6IGVuYW1lLFxyXG4gICAgICAgICAgXCJlcGhvbmVcIjogZXBob25lLFxyXG4gICAgICAgICAgXCJlbWFpbFwiOiBlbWFpbCxcclxuICAgICAgICAgIFwiY2FydFwiOiBjYXJ0XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydCgn0JrQvtGA0LfQuNC90LAg0L/Rg9GB0YLQsCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGlmIChmb3JtVmFsaWRhdGUobmFtZS52YWwoKSkpIHtcclxuICAgIC8vICAgY29uc29sZS5sb2coJ9CS0Ysg0LTQvtC70LbQvdGLINCy0LLQtdGB0YLQuCDQuNC80Y8hIScpO1xyXG4gICAgLy8gfSBlbHNlIGlmIChmb3JtVmFsaWRhdGUocGhvbmUudmFsKCkpKSB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKCfQktGLINC00L7Qu9C20L3RiyDQstCy0LXRgdGC0Lgg0YLQtdC70LXRhNC+0L0nKTtcclxuICAgIC8vIH1cclxuXHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIHJlc2V0R29vZHMocHJvZHVjdCwgYmFzZVByb2R1Y3QpIHtcclxuICAgIHByb2R1Y3QucmVtb3ZlKCk7XHJcbiAgICBiYXNlUHJvZHVjdC5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZWN0KG5vZGUpIHtcclxuICAgIC8vINCS0L7Qt9GA0LDRidCw0LXRgiDQutC+0YDQtNC40L3QsNGC0Ysg0Y3Qu9C10LzQtdC90YLQsCDQuCDRgdCw0Lwg0Y3Qu9C10LzQtdC90YJcclxuICAgIHZhciBjb3JkID0gbm9kZS50b0FycmF5KCkubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbm9kOiAkKGl0ZW0pLFxyXG4gICAgICAgIHJlY3Q6IGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGNvcmQ7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvdmVybGFwKHJlY3QxLCByZWN0Mikge1xyXG4gICAgcmV0dXJuICEocmVjdDEucmlnaHQgPCByZWN0Mi5sZWZ0IHx8XHJcbiAgICAgIHJlY3QxLmxlZnQgPiByZWN0Mi5yaWdodCB8fFxyXG4gICAgICByZWN0MS5ib3R0b20gPCByZWN0Mi50b3AgfHxcclxuICAgICAgcmVjdDEudG9wID4gcmVjdDIuYm90dG9tKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGlzRW1wdHkob2JqZWN0KSB7XHJcbiAgICAvLyDQn9GA0L7QstC10YDRj9C10Lwg0L7QsdC10LrRgiDQvdCwINC/0YPRgdGC0L7RgtGDXHJcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XHJcbiAgICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzYXZlTG9jYWxTdG9yYWdlKCkge1xyXG4gICAgLy8g0KHQvtGF0YDQsNC90Y/QtdC8INC60L7RgNC30LjQvdGDINCyINC70L7QutCw0LvRjNC90L7QvCDRhdGA0LDQvdC40LvQuNGJ0LVcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkoY2FydCkpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGVsZXRlR29vZHMoaWQpIHtcclxuICAgIC8vIGJvZHlcclxuXHJcbiAgICAgIGRlbGV0ZSBjYXJ0W2lkXTtcclxuICAgICAgc2F2ZUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuXHJcblxyXG59KSgpO1xyXG5cclxuLy8g0J/RgNC+0LLQtdGA0LjRgtGMINC60L7Qu9C40YfQtdGB0YLQstC+INC90LAg0L7RgtGA0LjRhtCw0YLQtdC70YzQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSJdLCJmaWxlIjoibWFpbi5qcyJ9
