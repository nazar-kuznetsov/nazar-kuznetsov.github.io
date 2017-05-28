'use strict';

 document.body.onload = function() {
    setTimeout(function () {
      var preloader = document.getElementById('preloader');
      if (!preloader.classList.contains('done')) {
        preloader.classList.add('done');
      }
    }, 1000);
};


// document.addEventListener("DOMContentLoaded", namFunction); вызов функцию после загрузки DOM



document.getElementById('header-menu__gamburger').addEventListener('click', myFunction)

// Открыть закрыть навигацию в header
function myFunction() {
    this.classList.toggle("change");
    var headerMenu = document.getElementById('header-menu');

    if (headerMenu.style.maxHeight) {
        headerMenu.style.maxHeight = null;
    } else {
        headerMenu.style.maxHeight = headerMenu.scrollHeight + 'px';
    }
}









//  Slider
document.getElementById('slider__prev').addEventListener('click', minusSlider, false);
document.getElementById('slider__next').addEventListener('click', plusSlides, false);

function minusSlider () {
    var sliderCountMinus = -1;
    slider(sliderCountMinus)
}

function plusSlides () {
    var sliderCountPlus = 1;
    slider(sliderCountPlus)
}



var sliderCount = 0;

function slider (n) {
    sliderCount += n;


    var gallerySlider = [
        'url(../Brushed/images/slider-images/image01.jpg)',
        'url(../Brushed/images/slider-images/image02.jpg)',
        'url(../Brushed/images/slider-images/image03.jpg)',
        'url(../Brushed/images/slider-images/image04.jpg)'
    ];

    if (sliderCount >= gallerySlider.length) {
        sliderCount = 0;
    } else if (sliderCount < 0) {
        sliderCount = gallerySlider.length - 1;
    }


    var slider = document.getElementById('slider');
    slider.style.backgroundImage = gallerySlider[sliderCount];
}




// Показать скрытый popup из section Work
document.addEventListener("DOMContentLoaded", workHiddenPopup);

function workHiddenPopup() {
    var link = document.getElementsByClassName('examples-item_hidden-link');
    for (var i = 0; i < link.length; i++) {
        link[i].addEventListener('click', workToggle, false);
    }
}

function workToggle() {
    var idModal = this.getAttribute('data-target');

    var close = document.getElementsByClassName('work-hidden__arrow-close');
    document.getElementById(idModal).classList.add('block');
    for (var j = 0; j < close.length; j++) {
        close[j].addEventListener('click', function() {
            document.getElementById(idModal).classList.remove('block');
        });
    }
}
