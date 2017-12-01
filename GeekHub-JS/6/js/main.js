var cart = {};

$('document').ready(function () {

  var table = $('#out');
  var body = $(document.body);
  var backet = $('#backet');
  var item = $('#goods__list [data-goods]');

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
      out += `<td><span data-button-artical=${key} class="delete-goods">&#10006;</span></td>`;
      total += cart[key].price * cart[key].pcs;
      out += '</tr>';
    }
    table.html(out);

    if (orderNumber === 0) {
      $('#total').html('Ваша корзина пуста');
    } else {
      $('#total').html(total + 'грн');
    }

    $('#out span[data-button-artical]').on('click', function () {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBjYXJ0ID0ge307XHJcblxyXG4kKCdkb2N1bWVudCcpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgdmFyIHRhYmxlID0gJCgnI291dCcpO1xyXG4gIHZhciBib2R5ID0gJChkb2N1bWVudC5ib2R5KTtcclxuICB2YXIgYmFja2V0ID0gJCgnI2JhY2tldCcpO1xyXG4gIHZhciBpdGVtID0gJCgnI2dvb2RzX19saXN0IFtkYXRhLWdvb2RzXScpO1xyXG5cclxuICBpdGVtLm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB2YXIgYmFzZVByb2R1Y3QgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgdmFyIHByb2R1Y3QgPSBiYXNlUHJvZHVjdC5jbG9uZSgpO1xyXG4gICAgdmFyIGlkO1xyXG5cclxuICAgIHZhciBvZmZzZXQgPSB7XHJcbiAgICAgIGxlZnQ6IGV2ZW50LnBhZ2VYIC0gYmFzZVByb2R1Y3Qub2Zmc2V0KCkubGVmdCxcclxuICAgICAgdG9wOiBldmVudC5wYWdlWSAtIGJhc2VQcm9kdWN0Lm9mZnNldCgpLnRvcFxyXG4gICAgfTtcclxuXHJcbiAgICBwcm9kdWN0LmNzcyh7XHJcbiAgICAgICd3aWR0aCc6IGJhc2VQcm9kdWN0LndpZHRoKCksXHJcbiAgICAgICdsZWZ0JzogZXZlbnQucGFnZVggLSBvZmZzZXQubGVmdCxcclxuICAgICAgJ3RvcCc6IGV2ZW50LnBhZ2VZIC0gb2Zmc2V0LnRvcFxyXG4gICAgfSk7XHJcblxyXG4gICAgYmFzZVByb2R1Y3QuYWRkQ2xhc3MoJ2hpZGRlbnMnKTtcclxuICAgIHByb2R1Y3QuYXBwZW5kVG8oYm9keSk7XHJcblxyXG4gICAgdmFyIHJlc2V0QmFja2V0O1xyXG4gICAgdmFyIHRhcmdldFByb2R1Y3Q7XHJcbiAgICBib2R5Lm9uKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgcHJvZHVjdC5jc3Moe1xyXG4gICAgICAgICdsZWZ0JzogZXZlbnQucGFnZVggLSBvZmZzZXQubGVmdCxcclxuICAgICAgICAndG9wJzogZXZlbnQucGFnZVkgLSBvZmZzZXQudG9wXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8g0J/QvtC70YPRh9Cw0LXQvCDQutC+0YDQtNC40L3QsNGC0Ysg0LrQvtGA0LfQuNC90YtcclxuICAgICB2YXIgYmFja2V0UmVjdCA9IHJlY3QoYmFja2V0KTtcclxuICAgICB2YXIgZ29vZHNSZWN0ID0gcmVjdChwcm9kdWN0KTtcclxuICAgICAgdGFyZ2V0UHJvZHVjdCA9IG92ZXJsYXAoYmFja2V0UmVjdFswXS5yZWN0LCBnb29kc1JlY3RbMF0ucmVjdCk7XHJcblxyXG4gICAgICBpZiAodGFyZ2V0UHJvZHVjdCkge1xyXG4gICAgICAgIGJhY2tldFJlY3RbMF0ubm9kLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICByZXNldEJhY2tldCA9IHRhcmdldFByb2R1Y3Q7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChyZXNldEJhY2tldCAmJiAhdGFyZ2V0UHJvZHVjdCkge1xyXG4gICAgICAgIGJhY2tldFJlY3RbMF0ubm9kLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGJvZHkub24oJ21vdXNldXAnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJlc2V0R29vZHMocHJvZHVjdCwgYmFzZVByb2R1Y3QpO1xyXG4gICAgICBcclxuICAgICAgaWYgKHRhcmdldFByb2R1Y3QpIHtcclxuICAgICAgICByZXNldEdvb2RzKHByb2R1Y3QsIGJhc2VQcm9kdWN0KTtcclxuICAgICAgICBpZCA9IHByb2R1Y3QuYXR0cignZGF0YS1hcnRpY2FsJyk7XHJcbiAgICAgICAgaWYgKGNhcnRbaWRdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIGNhcnRbaWRdID0ge1xyXG4gICAgICAgICAgICBwY3M6IDEsXHJcbiAgICAgICAgICAgIG5hbWU6ICQocHJvZHVjdCkuY2hpbGRyZW4oJy5nb29kc19fdGl0bGUnKS5odG1sKCksXHJcbiAgICAgICAgICAgIHByaWNlOiAkKHByb2R1Y3QpLmNoaWxkcmVuKCdbZGF0YS1wcmljZV0nKS5hdHRyKCdkYXRhLXByaWNlJyksXHJcbiAgICAgICAgICAgIGltZzogJChwcm9kdWN0KS5jaGlsZHJlbignLmdvb2RzX19waG90bycpLmF0dHIoJ3NyYycpXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjYXJ0W2lkXS5wY3MgKz0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2hvd1RhYmxlKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIHNob3dUYWJsZSgpIHtcclxuICAgIC8vIGJvZHlcclxuICAgIHZhciBvdXQgPSAnJztcclxuICAgIHZhciBvcmRlck51bWJlciA9IDA7XHJcbiAgICB2YXIgdG90YWwgPSAwO1xyXG4gICAgZm9yICh2YXIga2V5IGluIGNhcnQpIHtcclxuICAgICAgb3V0ICs9IGA8dHIgZGF0YS1saW5lPSR7a2V5fVwiPmA7XHJcbiAgICAgIG91dCArPSBgPHRkPiR7b3JkZXJOdW1iZXIgKz0gMX08L3RkPmA7XHJcbiAgICAgIG91dCArPSBgPHRkPiR7Y2FydFtrZXldLm5hbWV9IDxicj4gPGltZyBzcmM9XCIke2NhcnRba2V5XS5pbWd9XCI+PC90ZD5gO1xyXG4gICAgICBvdXQgKz0gYDx0ZD4ke2NhcnRba2V5XS5wcmljZX08L3RkPmA7XHJcbiAgICAgIG91dCArPSBgPHRkPjxpbnB1dCBjbGFzcz1cImlucHV0LXRhYmxlXCIgdHlwZT1cInRleHRcIiBkYXRhLWlucHV0PVwiJHtrZXl9XCIgdmFsdWU9XCIke2NhcnRba2V5XS5wY3N9XCI+PC90ZD5gO1xyXG4gICAgICBvdXQgKz0gYDx0ZD48c3BhbiBkYXRhLWJ1dHRvbi1hcnRpY2FsPSR7a2V5fSBjbGFzcz1cImRlbGV0ZS1nb29kc1wiPiYjMTAwMDY7PC9zcGFuPjwvdGQ+YDtcclxuICAgICAgdG90YWwgKz0gY2FydFtrZXldLnByaWNlICogY2FydFtrZXldLnBjcztcclxuICAgICAgb3V0ICs9ICc8L3RyPic7XHJcbiAgICB9XHJcbiAgICB0YWJsZS5odG1sKG91dCk7XHJcblxyXG4gICAgaWYgKG9yZGVyTnVtYmVyID09PSAwKSB7XHJcbiAgICAgICQoJyN0b3RhbCcpLmh0bWwoJ9CS0LDRiNCwINC60L7RgNC30LjQvdCwINC/0YPRgdGC0LAnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyN0b3RhbCcpLmh0bWwodG90YWwgKyAn0LPRgNC9Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnI291dCBzcGFuW2RhdGEtYnV0dG9uLWFydGljYWxdJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtYnV0dG9uLWFydGljYWwnKTtcclxuICAgICAgZGVsZXRlIGNhcnRbaWRdO1xyXG4gICAgICBzaG93VGFibGUoKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjb3V0IFtkYXRhLWlucHV0XScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlucHV0Jyk7XHJcbiAgICAgIGNhcnRbaWRdLnBjcyA9ICtldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgIHNob3dUYWJsZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHJlc2V0R29vZHMocHJvZHVjdCwgYmFzZVByb2R1Y3QpIHtcclxuICBwcm9kdWN0LnJlbW92ZSgpO1xyXG4gIGJhc2VQcm9kdWN0LnJlbW92ZUNsYXNzKCdoaWRkZW5zJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlY3Qobm9kZSkge1xyXG4gIC8vINCS0L7Qt9GA0LDRidCw0LXRgiDQutC+0YDQtNC40L3QsNGC0Ysg0Y3Qu9C10LzQtdC90YLQsCDQuCDRgdCw0Lwg0Y3Qu9C10LzQtdC90YJcclxuICB2YXIgY29yZCA9IG5vZGUudG9BcnJheSgpLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbm9kOiAkKGl0ZW0pLFxyXG4gICAgICByZWN0OiBpdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICB9O1xyXG4gIH0pO1xyXG4gIHJldHVybiBjb3JkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvdmVybGFwKHJlY3QxLCByZWN0Mikge1xyXG4gIHJldHVybiAhKHJlY3QxLnJpZ2h0IDwgcmVjdDIubGVmdCB8fFxyXG4gICAgcmVjdDEubGVmdCA+IHJlY3QyLnJpZ2h0IHx8XHJcbiAgICByZWN0MS5ib3R0b20gPCByZWN0Mi50b3AgfHxcclxuICAgIHJlY3QxLnRvcCA+IHJlY3QyLmJvdHRvbSk7XHJcbn0iXSwiZmlsZSI6Im1haW4uanMifQ==
