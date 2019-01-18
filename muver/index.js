
/*
*********************************************************************************************


ИСПРАВЛЕНО
1. ТЕПЕРЬ МОЖЕТ БЫТЬ ЛЮБОЕ КОИЛЧЕСТВО БУКВ В JS МЕНЯТЬ ИЛИ УСТАНАВЛИТЬ КОЛИЧЕСТВО БУКВ НЕ НУЖНО
2. Работает также через touch на мобильных


**********************************************************************************************
*/
const parent = document.querySelector('.handle'); // родитель блок
const circle = document.querySelector('#js-circle'); // кружок
const jsLine = document.querySelector('#js-line-active'); // линия активная
const line = document.querySelector('.line'); // линия не активная
const jsTitle1 = document.querySelector('#js-title1'); // заголовок 1

const lineWidth = line.clientWidth; // ширина линии
const parentWidth = parent.clientWidth; // ширина родителя
const sectionSVG = document.querySelector('.section-svg'); // секция другая
const firstSection = document.querySelector('.first-section'); // первая секция
const jsBack = document.querySelector('#js-back'); // кнопка назад
const circleWidth = circle.clientWidth;
const mobileWidth = 1024; // с ширина экрана когда будет рабоать тач

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
  length1: Math.round(parentWidth / jsTitle1.textContent.length)
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
  }, 200); // задержка после того как кружок попал в конец 

}

/* Клик на правый кружок
==========================================================================*/
document.querySelector('.circle__end').addEventListener('click', function () {
  end();
  styling(titles.length1);
  parent.classList.add('active');
});


let letter = Math.round(titles.length1 / parentWidth * 100); // сколько одна буква это процентов от ширины родителя

/* Функция движения
==========================================================================*/
function move(event) {
  const regExp = /touch/;
  const device = regExp.test(event.type) ? event.targetTouches[0].pageX : event.pageX;

  const offset = { 'left': device - parent.offsetLeft };

  const left = offset.left;
  let distance = Math.round(left / parentWidth * 100);

  if (left <= 30) {
    jsTitle1.innerHTML = newStr1;

    parent.classList.remove('active');
  }
  // ширина линии разделить на количество букву (здесь первая буква)
  if ((distance + 5) >= letter) {
    parent.classList.add('active');
  }

  styling((distance + 5) / letter);

  if (distance >= 100) { // удалить собития движения мишки
    window.removeEventListener('mousemove', move);
    window.removeEventListener('touchmove', move);
  }

  // кружок почти в конце зафиксировать его в конечной положение
  if (left > parentWidth - circleWidth) {
    end();
    return false;
  }
  // двигаем кружок и добавляем синию линию
  if (left < 0) return false;
  circle.style.left = `${left}px`;
  jsLine.style.width = `${left}px`;

}

/* Клик линию
==========================================================================*/
line.addEventListener('click', move);

window.addEventListener('resize', mobileTouch);



function mobileTouch() {
  if (window.innerWidth <= mobileWidth) {
    line.addEventListener('touchstart', move)
    circle.addEventListener('touchstart', function () {
      window.addEventListener('touchmove', move);
    });
    circle.addEventListener('touchend', function () {
      window.removeEventListener('touchmove', move);
    });
  }
}

mobileTouch();

// удалить собития когда кнопка мишки отжата
circle.addEventListener('mousedown', function () {
  window.addEventListener('mousemove', move);
})


// добавить собития когда кнопка мишки нажата
window.addEventListener('mouseup', function () {
  window.removeEventListener('mousemove', move);
});

