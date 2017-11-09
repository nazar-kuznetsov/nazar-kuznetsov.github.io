/*
  Написать функцию, которая преобразовывает строку из слов в массив строк в котором будут только слова в которых есть буквы верхнего регистра, например слово readonly исключается, а слово readOnly попадает в массив. Пример строки: accept acceptCharset accessKey action allowFullScreen allowTransparency alt async autoComplete autoFocus, вернуть функция должна массив ["acceptCharset", "accessKey", "allowFullScreen", "allowTransparency", "autoComplete", "autoFocus"]
*/
function stringsToArray (str) {
  let smallLetters = /^[a-z]+$/;
  let arr = str.split(' ');

  let newArr = arr.filter(function (item) {
    return item.match(smallLetters);
  });

  return newArr;
}

let letterString = 'accept acceptCharset accessKey action allowFullScreen allowTransparency alt async autoComplete autoFocus';

console.log(stringsToArray(letterString));



/*
  Написать поиск пользователей по имени. У вас есть инпут и список имён, которые выводятся сразу под инпутом, как только вы вводите что-то в инпут, то сразу же пропадают те имена, в которых нету совпадений с текстом внутри инпута. Если инпут пустой то видно все имена. Поиск должен быть регистронезависимым.
<input type="text"/>
<ul>
  <li>Max</li>
  <li>Bob.Casady</li>
  <li>Derek\Worker</li>
  <li>BillyBob</li>
  <li>MacGregor</li>
  <li>Dvain-Johns</li>
</ul>

Усложнённое задание - выделять найденные буквы в имени с помощью <span class="highlight"> например в инпут ввели bob и список имён должен приобрести такой вид
<ul>
  <li class="hidden">Max</li>
  <li><span class="highlight">Bob</span>.Casady</li>
  <li class="hidden">Derek\Worker</li>
  <li>Billy<span class="highlight">Bob</span></li>
  <li class="hidden">MacGregor</li>
  <li class="hidden">Dvain-Johns</li>
*/

let items = document.querySelectorAll('.user__item');
document.querySelector('#search-user').addEventListener('input', serachUser);

function serachUser() {
  let val = this.value.toLowerCase();
  let myReg = new RegExp('^' + escapeRegExp(val), 'i');

  for (let i = 0; i < items.length; i++) {
    if (myReg.test(items[i].textContent)) {
      items[i].classList.remove('hidden');
      items[i].innerHTML = items[i].textContent.toLowerCase().replace(val, `<span class='highlight'>${val}</span>`);
    } else {
      items[i].classList.add('hidden');
    }
  }
}

function escapeRegExp(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAg0J3QsNC/0LjRgdCw0YLRjCDRhNGD0L3QutGG0LjRjiwg0LrQvtGC0L7RgNCw0Y8g0L/RgNC10L7QsdGA0LDQt9C+0LLRi9Cy0LDQtdGCINGB0YLRgNC+0LrRgyDQuNC3INGB0LvQvtCyINCyINC80LDRgdGB0LjQsiDRgdGC0YDQvtC6INCyINC60L7RgtC+0YDQvtC8INCx0YPQtNGD0YIg0YLQvtC70YzQutC+INGB0LvQvtCy0LAg0LIg0LrQvtGC0L7RgNGL0YUg0LXRgdGC0Ywg0LHRg9C60LLRiyDQstC10YDRhdC90LXQs9C+INGA0LXQs9C40YHRgtGA0LAsINC90LDQv9GA0LjQvNC10YAg0YHQu9C+0LLQviByZWFkb25seSDQuNGB0LrQu9GO0YfQsNC10YLRgdGPLCDQsCDRgdC70L7QstC+IHJlYWRPbmx5INC/0L7Qv9Cw0LTQsNC10YIg0LIg0LzQsNGB0YHQuNCyLiDQn9GA0LjQvNC10YAg0YHRgtGA0L7QutC4OiBhY2NlcHQgYWNjZXB0Q2hhcnNldCBhY2Nlc3NLZXkgYWN0aW9uIGFsbG93RnVsbFNjcmVlbiBhbGxvd1RyYW5zcGFyZW5jeSBhbHQgYXN5bmMgYXV0b0NvbXBsZXRlIGF1dG9Gb2N1cywg0LLQtdGA0L3Rg9GC0Ywg0YTRg9C90LrRhtC40Y8g0LTQvtC70LbQvdCwINC80LDRgdGB0LjQsiBbXCJhY2NlcHRDaGFyc2V0XCIsIFwiYWNjZXNzS2V5XCIsIFwiYWxsb3dGdWxsU2NyZWVuXCIsIFwiYWxsb3dUcmFuc3BhcmVuY3lcIiwgXCJhdXRvQ29tcGxldGVcIiwgXCJhdXRvRm9jdXNcIl1cclxuKi9cclxuZnVuY3Rpb24gc3RyaW5nc1RvQXJyYXkgKHN0cikge1xyXG4gIGxldCBzbWFsbExldHRlcnMgPSAvXlthLXpdKyQvO1xyXG4gIGxldCBhcnIgPSBzdHIuc3BsaXQoJyAnKTtcclxuXHJcbiAgbGV0IG5ld0FyciA9IGFyci5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgIHJldHVybiBpdGVtLm1hdGNoKHNtYWxsTGV0dGVycyk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBuZXdBcnI7XHJcbn1cclxuXHJcbmxldCBsZXR0ZXJTdHJpbmcgPSAnYWNjZXB0IGFjY2VwdENoYXJzZXQgYWNjZXNzS2V5IGFjdGlvbiBhbGxvd0Z1bGxTY3JlZW4gYWxsb3dUcmFuc3BhcmVuY3kgYWx0IGFzeW5jIGF1dG9Db21wbGV0ZSBhdXRvRm9jdXMnO1xyXG5cclxuY29uc29sZS5sb2coc3RyaW5nc1RvQXJyYXkobGV0dGVyU3RyaW5nKSk7XHJcblxyXG5cclxuXHJcbi8qXHJcbiAg0J3QsNC/0LjRgdCw0YLRjCDQv9C+0LjRgdC6INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5INC/0L4g0LjQvNC10L3QuC4g0KMg0LLQsNGBINC10YHRgtGMINC40L3Qv9GD0YIg0Lgg0YHQv9C40YHQvtC6INC40LzRkdC9LCDQutC+0YLQvtGA0YvQtSDQstGL0LLQvtC00Y/RgtGB0Y8g0YHRgNCw0LfRgyDQv9C+0LQg0LjQvdC/0YPRgtC+0LwsINC60LDQuiDRgtC+0LvRjNC60L4g0LLRiyDQstCy0L7QtNC40YLQtSDRh9GC0L4t0YLQviDQsiDQuNC90L/Rg9GCLCDRgtC+INGB0YDQsNC30YMg0LbQtSDQv9GA0L7Qv9Cw0LTQsNGO0YIg0YLQtSDQuNC80LXQvdCwLCDQsiDQutC+0YLQvtGA0YvRhSDQvdC10YLRgyDRgdC+0LLQv9Cw0LTQtdC90LjQuSDRgSDRgtC10LrRgdGC0L7QvCDQstC90YPRgtGA0Lgg0LjQvdC/0YPRgtCwLiDQldGB0LvQuCDQuNC90L/Rg9GCINC/0YPRgdGC0L7QuSDRgtC+INCy0LjQtNC90L4g0LLRgdC1INC40LzQtdC90LAuINCf0L7QuNGB0Log0LTQvtC70LbQtdC9INCx0YvRgtGMINGA0LXQs9C40YHRgtGA0L7QvdC10LfQsNCy0LjRgdC40LzRi9C8LlxyXG48aW5wdXQgdHlwZT1cInRleHRcIi8+XHJcbjx1bD5cclxuICA8bGk+TWF4PC9saT5cclxuICA8bGk+Qm9iLkNhc2FkeTwvbGk+XHJcbiAgPGxpPkRlcmVrXFxXb3JrZXI8L2xpPlxyXG4gIDxsaT5CaWxseUJvYjwvbGk+XHJcbiAgPGxpPk1hY0dyZWdvcjwvbGk+XHJcbiAgPGxpPkR2YWluLUpvaG5zPC9saT5cclxuPC91bD5cclxuXHJcbtCj0YHQu9C+0LbQvdGR0L3QvdC+0LUg0LfQsNC00LDQvdC40LUgLSDQstGL0LTQtdC70Y/RgtGMINC90LDQudC00LXQvdC90YvQtSDQsdGD0LrQstGLINCyINC40LzQtdC90Lgg0YEg0L/QvtC80L7RidGM0Y4gPHNwYW4gY2xhc3M9XCJoaWdobGlnaHRcIj4g0L3QsNC/0YDQuNC80LXRgCDQsiDQuNC90L/Rg9GCINCy0LLQtdC70LggYm9iINC4INGB0L/QuNGB0L7QuiDQuNC80ZHQvSDQtNC+0LvQttC10L0g0L/RgNC40L7QsdGA0LXRgdGC0Lgg0YLQsNC60L7QuSDQstC40LRcclxuPHVsPlxyXG4gIDxsaSBjbGFzcz1cImhpZGRlblwiPk1heDwvbGk+XHJcbiAgPGxpPjxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0XCI+Qm9iPC9zcGFuPi5DYXNhZHk8L2xpPlxyXG4gIDxsaSBjbGFzcz1cImhpZGRlblwiPkRlcmVrXFxXb3JrZXI8L2xpPlxyXG4gIDxsaT5CaWxseTxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0XCI+Qm9iPC9zcGFuPjwvbGk+XHJcbiAgPGxpIGNsYXNzPVwiaGlkZGVuXCI+TWFjR3JlZ29yPC9saT5cclxuICA8bGkgY2xhc3M9XCJoaWRkZW5cIj5EdmFpbi1Kb2huczwvbGk+XHJcbiovXHJcblxyXG5sZXQgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudXNlcl9faXRlbScpO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLXVzZXInKS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHNlcmFjaFVzZXIpO1xyXG5cclxuZnVuY3Rpb24gc2VyYWNoVXNlcigpIHtcclxuICBsZXQgdmFsID0gdGhpcy52YWx1ZTtcclxuICBsZXQgbXlSZWcgPSBuZXcgUmVnRXhwKCdeJyArIGVzY2FwZVJlZ0V4cCh2YWwpLCAnaScpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAobXlSZWcudGVzdChpdGVtc1tpXS50ZXh0Q29udGVudCkpIHtcclxuICAgICAgaXRlbXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHZhbCk7XHJcbiAgICAgIGl0ZW1zW2ldLmlubmVySFRNTCA9IGl0ZW1zW2ldLnRleHRDb250ZW50LnJlcGxhY2UodmFsLCBgPHNwYW4gY2xhc3M9J2hpZ2hsaWdodCc+JHt2YWx9PC9zcGFuPmApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaXRlbXNbaV0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlc2NhcGVSZWdFeHAodGV4dCkge1xyXG4gIHJldHVybiB0ZXh0LnJlcGxhY2UoL1stW1xcXXt9KCkqKz8uLFxcXFxeJHwjXFxzXS9nLCAnXFxcXCQmJyk7XHJcbn0iXSwiZmlsZSI6Im1haW4uanMifQ==
