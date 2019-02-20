const parent = document.querySelector('.handle'); // родитель блок
const circle = document.querySelector('#js-circle'); // кружок
const jsLine = document.querySelector('#js-line-active'); // линия активная
const line = document.querySelector('.line'); // линия не активная
const jsTitle1 = document.querySelector('#js-title1'); // заголовок 1
var delay = 700;
const lineWidth = line.clientWidth; // ширина линии
let parentWidth = parent.clientWidth; // ширина родителя
const sectionSVG = document.querySelector('.section-svg'); // секция другая
const firstSection = document.querySelector('.first-section'); // первая секция
// const jsBack = document.querySelector('#js-back'); // кнопка назад
const circleWidth = circle.clientWidth;
const mobileWidth = 1024; // с ширина экрана когда будет рабоать тач
const handleText = document.querySelector('.handle__text');
var jsTitle2 = document.querySelector('#js-title2');
var slogan = document.querySelector('.slogan-text');
let scrollTop;
var deltaY;

/* Копирует текст
==========================================================================*/
let newStr1 = jsTitle1.textContent;
let newStr2 = jsTitle1.textContent;

/* Делим ширину родительсокго блока на длину текста
==========================================================================*/
const titles = {
    length1: Math.round(parentWidth / jsTitle1.textContent.length)
}

/* Выделяет жирным слово от 0 до номера букву которая прийдет в position
==========================================================================*/
const styling = (position) => {
    let regExp = new RegExp(newStr1.substr(4, position), 'i');
    jsTitle1.innerHTML = jsTitle1.textContent.replace(regExp, (text) => `<span class="bold">${text}</span>`);
}

let timerID;

function myFuncti(e) {
    deltaY = e.deltaY;
}


function testing(e) {
    calcStepScroll();
}

window.addEventListener('mousewheel', myFuncti);
/* Переход на жругую страницу
==========================================================================*/
const end = () => {
    circle.style.left = `${parentWidth - (circle.clientWidth / 2)}px`;
    jsLine.style.width = `${parentWidth - 18}px`;
    clearInterval(timerID);


    parent.classList.add('end');
    timerID = setTimeout(() => {

        window.addEventListener('mousewheel', debounce(testing));

        firstSection.classList.add('hide');
        sectionSVG.classList.add('show');
        firstSection.classList.remove('show');
        parent.classList.remove('active');

    }, delay); // задержка после того как кружок попал в конец

}


/* Клик на правый кружок
==========================================================================*/
document.querySelector('.circle__end').addEventListener('click', function () {
    end();
    styling(titles.length1);
    parent.classList.add('active');
    handleText.classList.add('hide');
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

    let positonLeft = Math.round(distance / 2.4);

    if (positonLeft >= 38) {
        handleText.classList.add('hide');
        slogan.classList.add('is-visibly');

    } else {
        slogan.classList.remove('is-visibly');
        handleText.classList.remove('hide');
    }

    if (positonLeft > 0 && positonLeft < 45) {
        jsTitle2.style.right = positonLeft + '%';
        jsTitle1.style.left = positonLeft + '%';
    }

    if (left <= 30) {
        jsTitle1.innerHTML = newStr1;

        parent.classList.remove('active');
    }

    // ширина линии разделить на количество букву (здесь первая буква)
    if ((distance + 5) >= letter) {
        parent.classList.add('active');
    }

    styling((distance / 2 + 15) / letter);

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

window.addEventListener('resize', function () {
    parentWidth = parent.clientWidth
    mobileTouch();
});


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



/*  Секция с черепом
======================================================================== */
var lineSvgActive = document.querySelector('.line-svg-active');
var agree = false;
var brain_li = document.querySelectorAll('.brain-list li'); // элементы меню, должно совпадать с количеством svg
var brainSVG = document.querySelectorAll('.brain-svg ul li'); // элементы svg
let counderBrain = 0; // количество прокруток в секции с черепом
var circleHead = document.querySelectorAll('.head-circle');

function activeElement(index) {
    brain_li[index].classList.add('active');
    brainSVG[index].classList.add('active');
}

activeElement(counderBrain);

// клик элемент списка
brain_li.forEach(function (element, index) {
    element.addEventListener('click', function () {
        document.body.classList.add('wheel-scroll');
        window.addEventListener('mousewheel', debounce(testing));
        activeElementScroll(index);
        agree = false;
    });
});

// калькулятор прокрученых шагов
function calcStepScroll(event) {
    if (!document.body.classList.contains('wheel-scroll')) return;
    if (counderBrain < 0) counderBrain = 0;

    if (counderBrain === brain_li.length) {
        agree = true;
        window.removeEventListener('mousewheel', calcStepScroll);
        return;
    }

    //counderBrain += 1;
    counderBrain = deltaY >= 0 ? counderBrain += 1 : counderBrain -= 1;
    activeElementScroll(counderBrain);
}


/* Подсветить активный элемент списка и голову в секции с головой
======================================================================== */
function activeElementScroll(indexCurentElement) {
    counderBrain = indexCurentElement;
    if (counderBrain >= brain_li.length || counderBrain < 0) return;

    for (let i = 0; i < brain_li.length; i++) {
        brain_li[i].classList.remove('active');
        brainSVG[i].classList.remove('active');
    }
    lineSvgActive.style.height = ((counderBrain) / brain_li.length * 100) + '%';

    circleHead.forEach(function (element) { element.classList.remove('active') });

    for (let i = 0; i < counderBrain; i++) {
        circleHead[i].classList.add('active');
    }

    activeElement(counderBrain);
}


function scrollAnimation() {
    scrollTop = window.pageYOffset;
    const sectionTop = sectionSVG.offsetTop;
    if (scrollTop > sectionTop && scrollTop + 290 < (sectionTop + sectionSVG.clientHeight) && !agree) {
        document.body.classList.add('wheel-scroll');

    } else {
        document.body.classList.remove('wheel-scroll');
    }
}



function debounce(func, wait = 250, immediate = true) {

    var timeout;
    return function (e) {
        var context = this, args = e;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

window.addEventListener('scroll', scrollAnimation);