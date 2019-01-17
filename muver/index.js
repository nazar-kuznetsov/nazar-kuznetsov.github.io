const parent = document.querySelector('.handle'); // родитель блок
const circle = document.querySelector('#js-circle'); // кружок
const jsLine = document.querySelector('#js-line-active'); // линия активная
const line = document.querySelector('.line'); // линия не активная
const jsTitle1 = document.querySelector('#js-title1'); // заголовок 1
const jsTitle2 = document.querySelector('#js-title2');
const lineWidth = line.clientWidth; // ширина линии
const parentWidth = parent.clientWidth; // ширина родителя
const sectionSVG = document.querySelector('.section-svg'); // секция другая
const firstSection = document.querySelector('.first-section'); // первая секция
const jsBack = document.querySelector('#js-back'); // кнопка назад

/* Копирует текст 
==========================================================================*/
let newStr1 = jsTitle1.textContent;
let newStr2 = jsTitle1.textContent;

/* Клик на на кнопку вернуться назад
==========================================================================*/
jsBack.addEventListener('click', function () {
  firstSection.classList.add('show');
  sectionSVG.classList.remove('show');
  circle.style.left = 0;
  jsLine.style.width = 0;
  jsTitle1.innerHTML = newStr1;
})

/* Делим ширину родительсокго блока на длину текста
==========================================================================*/
const titles = {
  length1: Math.round(parentWidth / jsTitle1.textContent.length),
  length2: Math.round(parentWidth / jsTitle2.textContent.length)
}

/* Выделяет жирным слово от 0 до номера букву которая прийдет в position
==========================================================================*/
const styling = (position) => {
  let regExp = new RegExp(newStr1.substr(0, position), 'i');
  jsTitle1.innerHTML = jsTitle1.textContent.replace(regExp, (text) => `<span class="bold">${text}</span>`);
}

let timerID;


/* Переход на жругую страницу
==========================================================================*/
const end = () => {
  circle.style.left = `${parentWidth - 18}px`;
  jsLine.style.width = `${parentWidth - 18}px`;
  clearInterval(timerID);

  timerID = setTimeout(() => {
    firstSection.classList.add('hide');
    sectionSVG.classList.add('show');
    firstSection.classList.remove('show');
    parent.classList.remove('active');
  }, 500);

}

/* Клик на правый кружок
==========================================================================*/
document.querySelector('.circle__end').addEventListener('click', function () {
  end();
  styling(9);
  parent.classList.add('active');
})

/* Клик линию
==========================================================================*/
line.addEventListener('click', move);

let counter = 0;



/* Функция движения
==========================================================================*/
function move(event) {
  const offset = {
    'left': event.pageX - parent.offsetLeft
  }

  const left = offset.left;

  counter = left;


  if (counter < 18) {
    jsTitle1.innerHTML = newStr1;
    parent.classList.remove('active');
  }
  // ширина линии разделить на количество букву (здесь первая буква)
  if (counter > titles.length1) {
    styling(1);
    parent.classList.add('active');
  }
  if (counter > titles.length1 * 2) styling(2); // попали на вторую букву
  if (counter > titles.length1 * 3) styling(3); // попали на букву 3
  if (counter > titles.length1 * 4) styling(4); // попали на букву 4
  if (counter > titles.length1 * 5) styling(5); // попали на букву 5
  if (counter > titles.length1 * 6) styling(6); // попали на букву 6
  if (counter > titles.length1 * 7) styling(7); // попали на букву 7
  if (counter > titles.length1 * 8) styling(8); // попали на букву 8
  if (counter >= titles.length1 * 9 - 50) { // попали на букву 9
    styling(9);
    window.removeEventListener('mousemove', move);
  }

  // кружок почти в конце зафиксировать его в конечной положение
  if (left > parentWidth - 50) {
    end();
    return false;
  }
  // двигаем кружок и добавляем синию линию
  if (left < 0) return false;
  circle.style.left = `${left}px`;
  jsLine.style.width = `${left}px`;

}

// удалить собития когда кнопка мишки отжата
circle.addEventListener('mousedown', function () {
  window.addEventListener('mousemove', move);
})


// добавить собития когда кнопка мишки нажата
window.addEventListener('mouseup', function () {
  window.removeEventListener('mousemove', move);
})