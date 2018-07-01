//==========================libs===========================
///= ../libs/jquery/jquery.min.js
///= 'libs/validate.js'
///= '../libs/liMarquee/jquery.liMarquee.js'

///= ../libs/jquery-validate/jquery.validate.min.js
///= ../libs/slick/slick.min.js
///= ../libs/wow-js/wow.min.js

//==========================custom==========================
$(function () {

  /*preloader
  ===============*/
  setTimeout(function () {
    $('#preloader').fadeOut();
  }, 500);

  /* Переключение иконки габмургера
    =========================*/
  $('.btn-toggle').on('click', function () {
    $(this).toggleClass('active');
  });



  // Выдвигающийся поиск 
  
  var searchBlock = $('#search-box');
  $('#js-btn-search').on('click', function () {
    searchBlock.slideToggle('fast');
  })
  
  
  var $window = $(window);
  $window.scroll(headerFixed);

  function headerFixed() {
    if ($window.scrollTop() > 1) {
      $('#header').addClass("fixed");
    }
    else {
      $('#header').removeClass("fixed");
    }
  }

  headerFixed();

  var menuBurger = $('#js-drop-menu');
  $('#btn-menu').on('click', function () {
    menuBurger.slideToggle();
    menuBurger.toggleClass('open');
  });



  // вложеное меню на адаптиве
  $('body').on('click', '.on-click .drop-menu__list li a', function (event) {
    event.preventDefault();
    var li = $(this);

    var ul = li.parent().children().get(1);
    event.stopPropagation();
    if (ul === undefined || ul.nodeName !== 'UL') return;
    $(ul).slideToggle();
    li.parent().toggleClass('open');
  });


  $('.js-marquee').liMarquee();

  $('#menu-mobile').on('click', function () {
    $('#nav').slideToggle();
  });

  //=======================================================================================

  // на десктопе  drop down menu в header появляеться при наведений сделано на CSS
  // на мобильном drobdown menu работает по клику сделано на JS
  // это функция нужна для того что бы не было конфикта 
  var nav = $('#nav');
  var menuHidden = $('.drop-menu');
  $window.resize(windowWidth);

  function windowWidth() {
    var $this = $window;
    var width = $this.outerWidth();

    if (width <= 1170) {
      nav.addClass('on-click');
    } else if (width > 1170) {
      nav.removeClass('on-click');
      menuHidden.removeAttr('style');
    }
  }

  windowWidth();

  $('body').on('click', '.on-click .menu__item .js-drop-down', function (e) {

    e.preventDefault();
    // if (!nav.hasClass('on-click')) return;
    var $this = $(this);
    var dropMenu = $this.parent().find('.drop-menu');
    $this.parent().toggleClass('open');
    dropMenu.slideToggle();

  });

  //=========================================================================================
  // обрезает строку и добавляет '...' в новостях
  var articleStr = document.querySelectorAll('.js-str');
  var maxLength = 156; // сколько символов будет строка
  articleStr.forEach(function (p) {
    p.textContent = p.outerText.substring(0, maxLength) + '...';
  });




});


function Accardion(settings) {
  this.element = $(settings.element);
  this.drop = settings.drop;

  $(this.drop).hide();

  this.element.on('click', this.toggleShow.bind(this));
}

Accardion.prototype.toggleShow = function(e) {
  e.preventDefault();
  var target = $(e.target);

  var ul = target.parent().find(this.drop).get(0);

  event.stopPropagation();

  if (!ul) return;
  ul = $(ul);
  ul.slideToggle(300);
  ul.parent().toggleClass('open');
  
};

new Accardion({
  element: '.accardion__title',
  drop: '.accardion-drop'
});


$('.js-slider').slick({
  dots: true,
 // autoplay: true,
 // autoplaySpeed: 5000,
});