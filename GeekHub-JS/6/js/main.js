var cart = {};

$('document').ready(function () {

  var resetAll = $('.all-reset');
  var table = $('#out');
  var body = $(document.body);
  var backet = $('#backet');
  var item = $('#goods__list [data-goods]');

  checkCart();
  item.on('mousedown', function (event) {
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

    baseProduct.addClass('hiddens');
    product.appendTo(body);

    var resetBacket;
    var targetProduct;
    body.on('mousemove', function (event) {
      product.css({
        'left': event.pageX - offset.left,
        'top': event.pageY - offset.top
      });

      // Получаем кординаты корзины
     var backetRect = rect(backet);
     var goodsRect = rect(product);
      targetProduct = overlap(backetRect[0].rect, goodsRect[0].rect);

      if (targetProduct) {
        backetRect[0].nod.addClass('active');
        resetBacket = targetProduct;
      }

      if (resetBacket && !targetProduct) {
        backetRect[0].nod.removeClass('active');
      }

    });

    body.on('mouseup', function () {
      resetGoods(product, baseProduct);

      
      if (targetProduct) {
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
        showTable();
      }

    });

  });

  function showTable() {
    // body
    var out = '';
    var orderNumber = 0;
    var total = 0;
    for (var key in cart) {
      out += `<tr data-line=${key}">`;
      out += `<td>${orderNumber += 1}</td>`;
      out += `<td>${cart[key].name} <br> <img src="${cart[key].img}"></td>`;
      out += `<td>${cart[key].price}</td>`;
      out += `<td><input class="input-table" type="text" data-input="${key}" value="${cart[key].pcs}"></td>`;
      out += `<td><img src="img/basket-remove.png" data-button-artical=${key} class="delete-goods"></td>`;
      total += cart[key].price * cart[key].pcs;
      out += '</tr>';
    }
    table.html(out);
    checkCart(total);

    $('#out [data-button-artical]').on('click', function () {
      var id = $(this).attr('data-button-artical');
      delete cart[id];
      showTable();

    });

    $('#out [data-input]').on('change', function (event) {
      var id = $(this).attr('data-input');
      cart[id].pcs = +event.target.value;
      showTable();
    });
  }

  function checkCart(total) {

    if (!isEmpty(cart)) {
      $('#total').html('Ваша корзина пуста');
      resetAll.hide();
    } else {
      resetAll.css('display', 'inline-block');
      $('#total').html(total + 'грн');
    }
  }

  resetAll.on('click', function () {
    cart = {};
    showTable();
  });
});

function resetGoods(product, baseProduct) {
  product.remove();
  baseProduct.removeClass('hiddens');
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBjYXJ0ID0ge307XHJcblxyXG4kKCdkb2N1bWVudCcpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgdmFyIHJlc2V0QWxsID0gJCgnLmFsbC1yZXNldCcpO1xyXG4gIHZhciB0YWJsZSA9ICQoJyNvdXQnKTtcclxuICB2YXIgYm9keSA9ICQoZG9jdW1lbnQuYm9keSk7XHJcbiAgdmFyIGJhY2tldCA9ICQoJyNiYWNrZXQnKTtcclxuICB2YXIgaXRlbSA9ICQoJyNnb29kc19fbGlzdCBbZGF0YS1nb29kc10nKTtcclxuXHJcbiAgY2hlY2tDYXJ0KCk7XHJcbiAgaXRlbS5vbignbW91c2Vkb3duJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIGJhc2VQcm9kdWN0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgIHZhciBwcm9kdWN0ID0gYmFzZVByb2R1Y3QuY2xvbmUoKTtcclxuICAgIHZhciBpZDtcclxuXHJcbiAgICB2YXIgb2Zmc2V0ID0ge1xyXG4gICAgICBsZWZ0OiBldmVudC5wYWdlWCAtIGJhc2VQcm9kdWN0Lm9mZnNldCgpLmxlZnQsXHJcbiAgICAgIHRvcDogZXZlbnQucGFnZVkgLSBiYXNlUHJvZHVjdC5vZmZzZXQoKS50b3BcclxuICAgIH07XHJcblxyXG4gICAgcHJvZHVjdC5jc3Moe1xyXG4gICAgICAnd2lkdGgnOiBiYXNlUHJvZHVjdC53aWR0aCgpLFxyXG4gICAgICAnbGVmdCc6IGV2ZW50LnBhZ2VYIC0gb2Zmc2V0LmxlZnQsXHJcbiAgICAgICd0b3AnOiBldmVudC5wYWdlWSAtIG9mZnNldC50b3BcclxuICAgIH0pO1xyXG5cclxuICAgIGJhc2VQcm9kdWN0LmFkZENsYXNzKCdoaWRkZW5zJyk7XHJcbiAgICBwcm9kdWN0LmFwcGVuZFRvKGJvZHkpO1xyXG5cclxuICAgIHZhciByZXNldEJhY2tldDtcclxuICAgIHZhciB0YXJnZXRQcm9kdWN0O1xyXG4gICAgYm9keS5vbignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgIHByb2R1Y3QuY3NzKHtcclxuICAgICAgICAnbGVmdCc6IGV2ZW50LnBhZ2VYIC0gb2Zmc2V0LmxlZnQsXHJcbiAgICAgICAgJ3RvcCc6IGV2ZW50LnBhZ2VZIC0gb2Zmc2V0LnRvcFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vINCf0L7Qu9GD0YfQsNC10Lwg0LrQvtGA0LTQuNC90LDRgtGLINC60L7RgNC30LjQvdGLXHJcbiAgICAgdmFyIGJhY2tldFJlY3QgPSByZWN0KGJhY2tldCk7XHJcbiAgICAgdmFyIGdvb2RzUmVjdCA9IHJlY3QocHJvZHVjdCk7XHJcbiAgICAgIHRhcmdldFByb2R1Y3QgPSBvdmVybGFwKGJhY2tldFJlY3RbMF0ucmVjdCwgZ29vZHNSZWN0WzBdLnJlY3QpO1xyXG5cclxuICAgICAgaWYgKHRhcmdldFByb2R1Y3QpIHtcclxuICAgICAgICBiYWNrZXRSZWN0WzBdLm5vZC5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgcmVzZXRCYWNrZXQgPSB0YXJnZXRQcm9kdWN0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocmVzZXRCYWNrZXQgJiYgIXRhcmdldFByb2R1Y3QpIHtcclxuICAgICAgICBiYWNrZXRSZWN0WzBdLm5vZC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBib2R5Lm9uKCdtb3VzZXVwJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXNldEdvb2RzKHByb2R1Y3QsIGJhc2VQcm9kdWN0KTtcclxuXHJcbiAgICAgIFxyXG4gICAgICBpZiAodGFyZ2V0UHJvZHVjdCkge1xyXG4gICAgICAgIHJlc2V0R29vZHMocHJvZHVjdCwgYmFzZVByb2R1Y3QpO1xyXG4gICAgICAgIGlkID0gcHJvZHVjdC5hdHRyKCdkYXRhLWFydGljYWwnKTtcclxuICAgICAgICBpZiAoY2FydFtpZF0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgY2FydFtpZF0gPSB7XHJcbiAgICAgICAgICAgIHBjczogMSxcclxuICAgICAgICAgICAgbmFtZTogJChwcm9kdWN0KS5jaGlsZHJlbignLmdvb2RzX190aXRsZScpLmh0bWwoKSxcclxuICAgICAgICAgICAgcHJpY2U6ICQocHJvZHVjdCkuY2hpbGRyZW4oJ1tkYXRhLXByaWNlXScpLmF0dHIoJ2RhdGEtcHJpY2UnKSxcclxuICAgICAgICAgICAgaW1nOiAkKHByb2R1Y3QpLmNoaWxkcmVuKCcuZ29vZHNfX3Bob3RvJykuYXR0cignc3JjJylcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNhcnRbaWRdLnBjcyArPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzaG93VGFibGUoKTtcclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gc2hvd1RhYmxlKCkge1xyXG4gICAgLy8gYm9keVxyXG4gICAgdmFyIG91dCA9ICcnO1xyXG4gICAgdmFyIG9yZGVyTnVtYmVyID0gMDtcclxuICAgIHZhciB0b3RhbCA9IDA7XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gY2FydCkge1xyXG4gICAgICBvdXQgKz0gYDx0ciBkYXRhLWxpbmU9JHtrZXl9XCI+YDtcclxuICAgICAgb3V0ICs9IGA8dGQ+JHtvcmRlck51bWJlciArPSAxfTwvdGQ+YDtcclxuICAgICAgb3V0ICs9IGA8dGQ+JHtjYXJ0W2tleV0ubmFtZX0gPGJyPiA8aW1nIHNyYz1cIiR7Y2FydFtrZXldLmltZ31cIj48L3RkPmA7XHJcbiAgICAgIG91dCArPSBgPHRkPiR7Y2FydFtrZXldLnByaWNlfTwvdGQ+YDtcclxuICAgICAgb3V0ICs9IGA8dGQ+PGlucHV0IGNsYXNzPVwiaW5wdXQtdGFibGVcIiB0eXBlPVwidGV4dFwiIGRhdGEtaW5wdXQ9XCIke2tleX1cIiB2YWx1ZT1cIiR7Y2FydFtrZXldLnBjc31cIj48L3RkPmA7XHJcbiAgICAgIG91dCArPSBgPHRkPjxpbWcgc3JjPVwiaW1nL2Jhc2tldC1yZW1vdmUucG5nXCIgZGF0YS1idXR0b24tYXJ0aWNhbD0ke2tleX0gY2xhc3M9XCJkZWxldGUtZ29vZHNcIj48L3RkPmA7XHJcbiAgICAgIHRvdGFsICs9IGNhcnRba2V5XS5wcmljZSAqIGNhcnRba2V5XS5wY3M7XHJcbiAgICAgIG91dCArPSAnPC90cj4nO1xyXG4gICAgfVxyXG4gICAgdGFibGUuaHRtbChvdXQpO1xyXG4gICAgY2hlY2tDYXJ0KHRvdGFsKTtcclxuXHJcbiAgICAkKCcjb3V0IFtkYXRhLWJ1dHRvbi1hcnRpY2FsXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWJ1dHRvbi1hcnRpY2FsJyk7XHJcbiAgICAgIGRlbGV0ZSBjYXJ0W2lkXTtcclxuICAgICAgc2hvd1RhYmxlKCk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI291dCBbZGF0YS1pbnB1dF0nKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgIHZhciBpZCA9ICQodGhpcykuYXR0cignZGF0YS1pbnB1dCcpO1xyXG4gICAgICBjYXJ0W2lkXS5wY3MgPSArZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICBzaG93VGFibGUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hlY2tDYXJ0KHRvdGFsKSB7XHJcblxyXG4gICAgaWYgKCFpc0VtcHR5KGNhcnQpKSB7XHJcbiAgICAgICQoJyN0b3RhbCcpLmh0bWwoJ9CS0LDRiNCwINC60L7RgNC30LjQvdCwINC/0YPRgdGC0LAnKTtcclxuICAgICAgcmVzZXRBbGwuaGlkZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzZXRBbGwuY3NzKCdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpO1xyXG4gICAgICAkKCcjdG90YWwnKS5odG1sKHRvdGFsICsgJ9Cz0YDQvScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXRBbGwub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgY2FydCA9IHt9O1xyXG4gICAgc2hvd1RhYmxlKCk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gcmVzZXRHb29kcyhwcm9kdWN0LCBiYXNlUHJvZHVjdCkge1xyXG4gIHByb2R1Y3QucmVtb3ZlKCk7XHJcbiAgYmFzZVByb2R1Y3QucmVtb3ZlQ2xhc3MoJ2hpZGRlbnMnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVjdChub2RlKSB7XHJcbiAgLy8g0JLQvtC30YDQsNGJ0LDQtdGCINC60L7RgNC00LjQvdCw0YLRiyDRjdC70LXQvNC10L3RgtCwINC4INGB0LDQvCDRjdC70LXQvNC10L3RglxyXG4gIHZhciBjb3JkID0gbm9kZS50b0FycmF5KCkubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBub2Q6ICQoaXRlbSksXHJcbiAgICAgIHJlY3Q6IGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgIH07XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGNvcmQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG92ZXJsYXAocmVjdDEsIHJlY3QyKSB7XHJcbiAgcmV0dXJuICEocmVjdDEucmlnaHQgPCByZWN0Mi5sZWZ0IHx8XHJcbiAgICByZWN0MS5sZWZ0ID4gcmVjdDIucmlnaHQgfHxcclxuICAgIHJlY3QxLmJvdHRvbSA8IHJlY3QyLnRvcCB8fFxyXG4gICAgcmVjdDEudG9wID4gcmVjdDIuYm90dG9tKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gaXNFbXB0eShvYmplY3QpIHtcclxuICAvLyDQn9GA0L7QstC10YDRj9C10Lwg0L7QsdC10LrRgiDQvdCwINC/0YPRgdGC0L7RgtGDXHJcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xyXG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn0iXSwiZmlsZSI6Im1haW4uanMifQ==
