/*
 1. Напишите функцию которая возвращает количество переданных аргументов
*/

function amountArguments() {
  return arguments.length;
}

/*
 2. Напишите функцию которая возвращает количество аргументов, которые являются строками. 
 Для решения вам понадобиться изучить оператор typeof
*/

function stringArguments() {
  let totalString = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'string') {
      totalString++;
    }
  }
  return totalString;
}

// 3. Напишите функцию которая возвращает сумму значений всех переданных аргументов

function totalSum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += parseFloat(arguments[i]);
  }
  return total;
}

/**
 4. Сделайте так чтобы как только в инпут впишут слово "JavaScript", 
 то сразу чекбокс справа перешёл в зачеканное состояние
 */

let inputText = document.querySelector('#input-text');
let inputCheckbox = document.querySelector('#input-checkbox');
let hiddenText = document.querySelector('.hidden-text');

inputText.addEventListener('input', activeCheckbox);

function activeCheckbox() {
  if (inputText.value.toLowerCase() === 'javascript') {
    inputCheckbox.checked = true;
    hiddenText.classList.add('active');
  } else {
    inputCheckbox.checked = false;
    hiddenText.classList.remove('active');
  }
}


/*
  Сделать перед сабмитом формы проверку всех инпутов и если хоть один не прошёл её, 
  то выводить сообщение с помощью функции alert() и откланять сабмит формы через метод 
  события preventDefault(). В первом поле должны быть только числа, во втором только 
  буквы a, b, c и d, 
  чекбокс должен быть зачекан, один из инпутов в четвёртой 
  группе должен быть зачекан.
*/

let form = document.querySelector('#form-test');
let onlyNumbers = document.querySelector('#only-numbers');
let onlyLetters = document.querySelector('#only-letters');
let massageErorNumber = document.querySelector('.massage-number');
let massageErorLetters = document.querySelector('.massage-letters');
let prohibitedLetters = /[e-zE-Z0-9]/;
let agreement = document.querySelector('#agreement');
let massageAgreement = document.querySelector('span.massage.hidden-text');

let radioFirst = document.querySelector('#form-test input[value=first]');
let radioSecond = document.querySelector('#form-test input[value=second]');
let radioLast = document.querySelector('#form-test input[value=last]');
let radioBolean = false;
let p = document.querySelector('p.massage.hidden-text');
form.addEventListener('submit', validationForm);

function validationForm(e) {
  if (isNaN(onlyNumbers.value)) {
    e.preventDefault();
    massageErorNumber.innerText = 'Вы ввели не число';
  } else if (onlyNumbers.value.length < 1) {
    e.preventDefault();
    massageErorNumber.innerText = 'поле не может быть пустым';
  } else {
    massageErorNumber.innerText = '';
  }

  if (prohibitedLetters.test(onlyLetters.value)) {
    e.preventDefault();
    massageErorLetters.innerText = 'введите буквы A, B, C, D';
  } else if (onlyLetters.value.length < 1) {
    e.preventDefault();
    massageErorLetters.innerText = 'поле не может быть пустым';
  } else {
    massageErorLetters.innerText = '';
  }

  if (!agreement.checked) {
    e.preventDefault();
    massageAgreement.classList.add('active');
  } else {
    massageAgreement.classList.remove('active');
  }

  if (radioFirst.checked && radioBolean === false) {
    radioBolean = true;
  }

  if (radioSecond.checked && radioBolean === false) {
    radioBolean = true;
  }
  if (radioLast.checked && radioBolean === false) {
    radioBolean = true;
  }

  if (!radioBolean) {
    e.preventDefault();
    p.classList.add('active');
  } else {
    p.classList.remove('active');
  }
}


/*
 6. Разбейте эту строку кода на три отдельные функции и сделайте 
 вызов первой функции так чтобы в консоли появился такой же результат
  как и после выполнения этой строки кода.
  (function (a) { console.log(a(function (b) { return b + b; })); })(function (c) { return c(2) * c(3); });
*/

// (function (a) {
//   console.log(a(function (b) {
//     return b + b;
//   }));
// })(function (c) {
//   return c(2) * c(3);
// });


function name1() {
  return console.log(name3(name2));
}

function name2(b) {
  return b + b;
}

function name3(c) {
  return c(2) * c(3);
}

name1();

function myFunc() {
  console.log(x(function (b) {
    return y(b);
  }));
}

function y(b) {
  return b + b;
}

function x(c) {
  return c(2) * c(3);
}

myFunc();

// (function (b) это === c(5) || c(3)
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAxLiDQndCw0L/QuNGI0LjRgtC1INGE0YPQvdC60YbQuNGOINC60L7RgtC+0YDQsNGPINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINC60L7Qu9C40YfQtdGB0YLQstC+INC/0LXRgNC10LTQsNC90L3Ri9GFINCw0YDQs9GD0LzQtdC90YLQvtCyXHJcbiovXHJcblxyXG5mdW5jdGlvbiBhbW91bnRBcmd1bWVudHMoKSB7XHJcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg7XHJcbn1cclxuXHJcbi8qXHJcbiAyLiDQndCw0L/QuNGI0LjRgtC1INGE0YPQvdC60YbQuNGOINC60L7RgtC+0YDQsNGPINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINC60L7Qu9C40YfQtdGB0YLQstC+INCw0YDQs9GD0LzQtdC90YLQvtCyLCDQutC+0YLQvtGA0YvQtSDRj9Cy0LvRj9GO0YLRgdGPINGB0YLRgNC+0LrQsNC80LguIFxyXG4g0JTQu9GPINGA0LXRiNC10L3QuNGPINCy0LDQvCDQv9C+0L3QsNC00L7QsdC40YLRjNGB0Y8g0LjQt9GD0YfQuNGC0Ywg0L7Qv9C10YDQsNGC0L7RgCB0eXBlb2ZcclxuKi9cclxuXHJcbmZ1bmN0aW9uIHN0cmluZ0FyZ3VtZW50cygpIHtcclxuICBsZXQgdG90YWxTdHJpbmcgPSAwO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1tpXSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgdG90YWxTdHJpbmcrKztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRvdGFsU3RyaW5nO1xyXG59XHJcblxyXG4vLyAzLiDQndCw0L/QuNGI0LjRgtC1INGE0YPQvdC60YbQuNGOINC60L7RgtC+0YDQsNGPINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINGB0YPQvNC80YMg0LfQvdCw0YfQtdC90LjQuSDQstGB0LXRhSDQv9C10YDQtdC00LDQvdC90YvRhSDQsNGA0LPRg9C80LXQvdGC0L7QslxyXG5cclxuZnVuY3Rpb24gdG90YWxTdW0oKSB7XHJcbiAgbGV0IHRvdGFsID0gMDtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgdG90YWwgKz0gcGFyc2VGbG9hdChhcmd1bWVudHNbaV0pO1xyXG4gIH1cclxuICByZXR1cm4gdG90YWw7XHJcbn1cclxuXHJcbi8qKlxyXG4gNC4g0KHQtNC10LvQsNC50YLQtSDRgtCw0Log0YfRgtC+0LHRiyDQutCw0Log0YLQvtC70YzQutC+INCyINC40L3Qv9GD0YIg0LLQv9C40YjRg9GCINGB0LvQvtCy0L4gXCJKYXZhU2NyaXB0XCIsIFxyXG4g0YLQviDRgdGA0LDQt9GDINGH0LXQutCx0L7QutGBINGB0L/RgNCw0LLQsCDQv9C10YDQtdGI0ZHQuyDQsiDQt9Cw0YfQtdC60LDQvdC90L7QtSDRgdC+0YHRgtC+0Y/QvdC40LVcclxuICovXHJcblxyXG5sZXQgaW5wdXRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LXRleHQnKTtcclxubGV0IGlucHV0Q2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXQtY2hlY2tib3gnKTtcclxubGV0IGhpZGRlblRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlkZGVuLXRleHQnKTtcclxuXHJcbmlucHV0VGV4dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGFjdGl2ZUNoZWNrYm94KTtcclxuXHJcbmZ1bmN0aW9uIGFjdGl2ZUNoZWNrYm94KCkge1xyXG4gIGlmIChpbnB1dFRleHQudmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gJ2phdmFzY3JpcHQnKSB7XHJcbiAgICBpbnB1dENoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgaGlkZGVuVGV4dC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgaW5wdXRDaGVja2JveC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICBoaWRkZW5UZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qXHJcbiAg0KHQtNC10LvQsNGC0Ywg0L/QtdGA0LXQtCDRgdCw0LHQvNC40YLQvtC8INGE0L7RgNC80Ysg0L/RgNC+0LLQtdGA0LrRgyDQstGB0LXRhSDQuNC90L/Rg9GC0L7QsiDQuCDQtdGB0LvQuCDRhdC+0YLRjCDQvtC00LjQvSDQvdC1INC/0YDQvtGI0ZHQuyDQtdGRLCBcclxuICDRgtC+INCy0YvQstC+0LTQuNGC0Ywg0YHQvtC+0LHRidC10L3QuNC1INGBINC/0L7QvNC+0YnRjNGOINGE0YPQvdC60YbQuNC4IGFsZXJ0KCkg0Lgg0L7RgtC60LvQsNC90Y/RgtGMINGB0LDQsdC80LjRgiDRhNC+0YDQvNGLINGH0LXRgNC10Lcg0LzQtdGC0L7QtCBcclxuICDRgdC+0LHRi9GC0LjRjyBwcmV2ZW50RGVmYXVsdCgpLiDQkiDQv9C10YDQstC+0Lwg0L/QvtC70LUg0LTQvtC70LbQvdGLINCx0YvRgtGMINGC0L7Qu9GM0LrQviDRh9C40YHQu9CwLCDQstC+INCy0YLQvtGA0L7QvCDRgtC+0LvRjNC60L4gXHJcbiAg0LHRg9C60LLRiyBhLCBiLCBjINC4IGQsIFxyXG4gINGH0LXQutCx0L7QutGBINC00L7Qu9C20LXQvSDQsdGL0YLRjCDQt9Cw0YfQtdC60LDQvSwg0L7QtNC40L0g0LjQtyDQuNC90L/Rg9GC0L7QsiDQsiDRh9C10YLQstGR0YDRgtC+0LkgXHJcbiAg0LPRgNGD0L/Qv9C1INC00L7Qu9C20LXQvSDQsdGL0YLRjCDQt9Cw0YfQtdC60LDQvS5cclxuKi9cclxuXHJcbmxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tdGVzdCcpO1xyXG5sZXQgb25seU51bWJlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb25seS1udW1iZXJzJyk7XHJcbmxldCBvbmx5TGV0dGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvbmx5LWxldHRlcnMnKTtcclxubGV0IG1hc3NhZ2VFcm9yTnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hc3NhZ2UtbnVtYmVyJyk7XHJcbmxldCBtYXNzYWdlRXJvckxldHRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFzc2FnZS1sZXR0ZXJzJyk7XHJcbmxldCBwcm9oaWJpdGVkTGV0dGVycyA9IC9bZS16RS1aMC05XS87XHJcbmxldCBhZ3JlZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWdyZWVtZW50Jyk7XHJcbmxldCBtYXNzYWdlQWdyZWVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3Bhbi5tYXNzYWdlLmhpZGRlbi10ZXh0Jyk7XHJcblxyXG5sZXQgcmFkaW9GaXJzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtLXRlc3QgaW5wdXRbdmFsdWU9Zmlyc3RdJyk7XHJcbmxldCByYWRpb1NlY29uZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtLXRlc3QgaW5wdXRbdmFsdWU9c2Vjb25kXScpO1xyXG5sZXQgcmFkaW9MYXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tdGVzdCBpbnB1dFt2YWx1ZT1sYXN0XScpO1xyXG5sZXQgcmFkaW9Cb2xlYW4gPSBmYWxzZTtcclxubGV0IHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwLm1hc3NhZ2UuaGlkZGVuLXRleHQnKTtcclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB2YWxpZGF0aW9uRm9ybSk7XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0aW9uRm9ybShlKSB7XHJcbiAgaWYgKGlzTmFOKG9ubHlOdW1iZXJzLnZhbHVlKSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbWFzc2FnZUVyb3JOdW1iZXIuaW5uZXJUZXh0ID0gJ9CS0Ysg0LLQstC10LvQuCDQvdC1INGH0LjRgdC70L4nO1xyXG4gIH0gZWxzZSBpZiAob25seU51bWJlcnMudmFsdWUubGVuZ3RoIDwgMSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbWFzc2FnZUVyb3JOdW1iZXIuaW5uZXJUZXh0ID0gJ9C/0L7Qu9C1INC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQv9GD0YHRgtGL0LwnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBtYXNzYWdlRXJvck51bWJlci5pbm5lclRleHQgPSAnJztcclxuICB9XHJcblxyXG4gIGlmIChwcm9oaWJpdGVkTGV0dGVycy50ZXN0KG9ubHlMZXR0ZXJzLnZhbHVlKSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbWFzc2FnZUVyb3JMZXR0ZXJzLmlubmVyVGV4dCA9ICfQstCy0LXQtNC40YLQtSDQsdGD0LrQstGLIEEsIEIsIEMsIEQnO1xyXG4gIH0gZWxzZSBpZiAob25seUxldHRlcnMudmFsdWUubGVuZ3RoIDwgMSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbWFzc2FnZUVyb3JMZXR0ZXJzLmlubmVyVGV4dCA9ICfQv9C+0LvQtSDQvdC1INC80L7QttC10YIg0LHRi9GC0Ywg0L/Rg9GB0YLRi9C8JztcclxuICB9IGVsc2Uge1xyXG4gICAgbWFzc2FnZUVyb3JMZXR0ZXJzLmlubmVyVGV4dCA9ICcnO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFhZ3JlZW1lbnQuY2hlY2tlZCkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbWFzc2FnZUFncmVlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbWFzc2FnZUFncmVlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICB9XHJcblxyXG4gIGlmIChyYWRpb0ZpcnN0LmNoZWNrZWQgJiYgcmFkaW9Cb2xlYW4gPT09IGZhbHNlKSB7XHJcbiAgICByYWRpb0JvbGVhbiA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBpZiAocmFkaW9TZWNvbmQuY2hlY2tlZCAmJiByYWRpb0JvbGVhbiA9PT0gZmFsc2UpIHtcclxuICAgIHJhZGlvQm9sZWFuID0gdHJ1ZTtcclxuICB9XHJcbiAgaWYgKHJhZGlvTGFzdC5jaGVja2VkICYmIHJhZGlvQm9sZWFuID09PSBmYWxzZSkge1xyXG4gICAgcmFkaW9Cb2xlYW4gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFyYWRpb0JvbGVhbikge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgcC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKlxyXG4gNi4g0KDQsNC30LHQtdC50YLQtSDRjdGC0YMg0YHRgtGA0L7QutGDINC60L7QtNCwINC90LAg0YLRgNC4INC+0YLQtNC10LvRjNC90YvQtSDRhNGD0L3QutGG0LjQuCDQuCDRgdC00LXQu9Cw0LnRgtC1IFxyXG4g0LLRi9C30L7QsiDQv9C10YDQstC+0Lkg0YTRg9C90LrRhtC40Lgg0YLQsNC6INGH0YLQvtCx0Ysg0LIg0LrQvtC90YHQvtC70Lgg0L/QvtGP0LLQuNC70YHRjyDRgtCw0LrQvtC5INC20LUg0YDQtdC30YPQu9GM0YLQsNGCXHJcbiAg0LrQsNC6INC4INC/0L7RgdC70LUg0LLRi9C/0L7Qu9C90LXQvdC40Y8g0Y3RgtC+0Lkg0YHRgtGA0L7QutC4INC60L7QtNCwLlxyXG4gIChmdW5jdGlvbiAoYSkgeyBjb25zb2xlLmxvZyhhKGZ1bmN0aW9uIChiKSB7IHJldHVybiBiICsgYjsgfSkpOyB9KShmdW5jdGlvbiAoYykgeyByZXR1cm4gYygyKSAqIGMoMyk7IH0pO1xyXG4qL1xyXG5cclxuLy8gKGZ1bmN0aW9uIChhKSB7XHJcbi8vICAgY29uc29sZS5sb2coYShmdW5jdGlvbiAoYikge1xyXG4vLyAgICAgcmV0dXJuIGIgKyBiO1xyXG4vLyAgIH0pKTtcclxuLy8gfSkoZnVuY3Rpb24gKGMpIHtcclxuLy8gICByZXR1cm4gYygyKSAqIGMoMyk7XHJcbi8vIH0pO1xyXG5cclxuXHJcbmZ1bmN0aW9uIG5hbWUxKCkge1xyXG4gIHJldHVybiBjb25zb2xlLmxvZyhuYW1lMyhuYW1lMikpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuYW1lMihiKSB7XHJcbiAgcmV0dXJuIGIgKyBiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuYW1lMyhjKSB7XHJcbiAgcmV0dXJuIGMoMikgKiBjKDMpO1xyXG59XHJcblxyXG5uYW1lMSgpO1xyXG5cclxuZnVuY3Rpb24gbXlGdW5jKCkge1xyXG4gIGNvbnNvbGUubG9nKHgoZnVuY3Rpb24gKGIpIHtcclxuICAgIHJldHVybiB5KGIpO1xyXG4gIH0pKTtcclxufVxyXG5cclxuZnVuY3Rpb24geShiKSB7XHJcbiAgcmV0dXJuIGIgKyBiO1xyXG59XHJcblxyXG5mdW5jdGlvbiB4KGMpIHtcclxuICByZXR1cm4gYygyKSAqIGMoMyk7XHJcbn1cclxuXHJcbm15RnVuYygpO1xyXG5cclxuLy8gKGZ1bmN0aW9uIChiKSDRjdGC0L4gPT09IGMoNSkgfHwgYygzKSJdLCJmaWxlIjoibWFpbi5qcyJ9
