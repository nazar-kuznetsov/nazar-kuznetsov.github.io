document.body.onload = function () {
  setTimeout(function () {
    let preloader = document.getElementById('preloader');
    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done');
    }
  }, 500);
};
function Modal(settings) {
  this.open = document.querySelectorAll(settings.open);
  this.addClass = settings.addClass;
  this.nameClose = settings.close;

  this.overlay = document.createElement('div');
  this.overlay.classList.add(settings.overlayClass);
  document.body.appendChild(this.overlay);

  this.innerBox = document.createElement('div');
  this.innerBox.classList.add(settings.popupClass);
  document.body.appendChild(this.innerBox);

  this.eventOpen = settings.eventOpen || 'click';
  this.eventClose = settings.eventClose || 'click';

  this.getBtn.call(this);
}

Modal.prototype.getBtn = function getBtn() {
  for (let i = 0; i < this.open.length; i++) {
    this.open[i].addEventListener(this.eventOpen, this.inner.bind(this));
  }
};

Modal.prototype.inner = function show(e) {
  let innerClass = e.target.getAttribute('data-modal');
  let box = document.querySelector(innerClass);
  this.show.call(this, box.innerHTML);
};

Modal.prototype.show = function show(boxInnerHtml) {
  this.overlay.classList.add(this.addClass);
  this.innerBox.classList.add(this.addClass);
  this.innerBox.innerHTML = boxInnerHtml;
  this.overlay.addEventListener(this.eventClose, this.hide.bind(this));
  this.closeIcon.call(this);
};

Modal.prototype.closeIcon = function closeIcon() {
  let elementsClose = document.querySelectorAll(this.nameClose);

  for (let i = 0; i < elementsClose.length; i++) {
    elementsClose[i].addEventListener('click', this.hide.bind(this));
  }
};

Modal.prototype.hide = function hide() {
  this.overlay.classList.remove(this.addClass);
  this.innerBox.classList.remove(this.addClass);
};

// Модальное окно в секции Services
new Modal({
  open: '.advantages__info-lear-more[data-modal]',
  close: '.close-modal',
  overlayClass: 'overlay',
  popupClass: 'modal',
  addClass: 'show',
  eventOpen: 'click',
  eventClose: 'click',
});

// Модальное окно в секции Progress
new Modal({
  open: '.progress__img[data-modal]',
  close: '.show .progress__img',
  overlayClass: 'overlay',
  popupClass: 'big-img',
  addClass: 'show',
  eventOpen: 'click',
  eventClose: 'click',
});

new Modal({
  open: '.header__menu-dropdown',
  close: '.show .progress__img',
  overlayClass: 'overlay',
  popupClass: 'nav__responsive',
  addClass: 'show',
  eventOpen: 'click',
  eventClose: 'click',
});
function Slider(settings) {
  this.prev = document.querySelector(settings.prev);
  this.next = document.querySelector(settings.next);
  this.slider = document.querySelector(settings.slider);

  this.dots = document.querySelectorAll(settings.dots);
  this.len = this.slider.children.length;
  this.count = 0;

  this.next.addEventListener('click', this.slideNext.bind(this));
  this.prev.addEventListener('click', this.slidePrev.bind(this));

  this.dotsSlide.call(this);

  if (settings.auto) {
    this.time = settings.time || 7000;
    this.autoScroll();
  }
}


Slider.prototype.slideNext = function slideNext() {
  this.deleteDots();
  this.count++;
  this.mainSlider.call(this);
};


Slider.prototype.slidePrev = function slidePrev() {
  this.deleteDots();
  this.count--;
  this.mainSlider.call(this);
};


Slider.prototype.mainSlider = function mainSlider(count) {
  if (count !== undefined) {
    this.count = +count;
  }

  this.countReset();
  this.dots[this.count].classList.add('active');
  this.slider.style.transform = `translateX(-${this.count}00%)`;
};


Slider.prototype.countReset = function countReset() {
  if (this.count >= this.len) {
    this.count = 0;
  } else if (this.count < 0) {
    this.count = this.len - 1;
  }
};


Slider.prototype.dotsSlide = function dotsSlide() {
  for (let i = 0; i < this.dots.length; i++) {
    this.dots[i].addEventListener('click', this.getNumberCircle.bind(this));
  }
};


Slider.prototype.getNumberCircle = function getNumberCircle(e) {
  this.dotsCount = e.target.getAttribute('data-carousel-circle');
  this.mainSlider.call(this, this.dotsCount);

  for (let i = 0; i < this.dots.length; i++) {
    this.dots[i].classList.remove('active');
  }

  e.target.classList.add('active');
};


Slider.prototype.deleteDots = function deleteDots() {
  this.dots[this.count].classList.remove('active');
};


Slider.prototype.autoScroll = function autoScroll() {
  this.timerId = setInterval(() => {
    this.slideNext();
  }, this.time);
};


new Slider({
  prev: '#slide-prev',
  next: '#slide-next',
  slider: '.sustomers-words__list',
  dots: '.sustomers__slider-dots .slider-dot',
  auto: false,
  time: 7000,
});

new Slider({
  prev: '.header__slider-prev',
  next: '.header__slider-next',
  slider: '.header__slider-list',
  dots: '.header__slider-dots span',
  auto: true,
  time: 5000,
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmJvZHkub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHByZWxvYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmVsb2FkZXInKTtcclxuICAgIGlmICghcHJlbG9hZGVyLmNsYXNzTGlzdC5jb250YWlucygnZG9uZScpKSB7XHJcbiAgICAgIHByZWxvYWRlci5jbGFzc0xpc3QuYWRkKCdkb25lJyk7XHJcbiAgICB9XHJcbiAgfSwgNTAwKTtcclxufTtcclxuZnVuY3Rpb24gTW9kYWwoc2V0dGluZ3MpIHtcclxuICB0aGlzLm9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNldHRpbmdzLm9wZW4pO1xyXG4gIHRoaXMuYWRkQ2xhc3MgPSBzZXR0aW5ncy5hZGRDbGFzcztcclxuICB0aGlzLm5hbWVDbG9zZSA9IHNldHRpbmdzLmNsb3NlO1xyXG5cclxuICB0aGlzLm92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0aGlzLm92ZXJsYXkuY2xhc3NMaXN0LmFkZChzZXR0aW5ncy5vdmVybGF5Q2xhc3MpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5vdmVybGF5KTtcclxuXHJcbiAgdGhpcy5pbm5lckJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRoaXMuaW5uZXJCb3guY2xhc3NMaXN0LmFkZChzZXR0aW5ncy5wb3B1cENsYXNzKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuaW5uZXJCb3gpO1xyXG5cclxuICB0aGlzLmV2ZW50T3BlbiA9IHNldHRpbmdzLmV2ZW50T3BlbiB8fCAnY2xpY2snO1xyXG4gIHRoaXMuZXZlbnRDbG9zZSA9IHNldHRpbmdzLmV2ZW50Q2xvc2UgfHwgJ2NsaWNrJztcclxuXHJcbiAgdGhpcy5nZXRCdG4uY2FsbCh0aGlzKTtcclxufVxyXG5cclxuTW9kYWwucHJvdG90eXBlLmdldEJ0biA9IGZ1bmN0aW9uIGdldEJ0bigpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3Blbi5sZW5ndGg7IGkrKykge1xyXG4gICAgdGhpcy5vcGVuW2ldLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ldmVudE9wZW4sIHRoaXMuaW5uZXIuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuTW9kYWwucHJvdG90eXBlLmlubmVyID0gZnVuY3Rpb24gc2hvdyhlKSB7XHJcbiAgbGV0IGlubmVyQ2xhc3MgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kYWwnKTtcclxuICBsZXQgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihpbm5lckNsYXNzKTtcclxuICB0aGlzLnNob3cuY2FsbCh0aGlzLCBib3guaW5uZXJIVE1MKTtcclxufTtcclxuXHJcbk1vZGFsLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gc2hvdyhib3hJbm5lckh0bWwpIHtcclxuICB0aGlzLm92ZXJsYXkuY2xhc3NMaXN0LmFkZCh0aGlzLmFkZENsYXNzKTtcclxuICB0aGlzLmlubmVyQm94LmNsYXNzTGlzdC5hZGQodGhpcy5hZGRDbGFzcyk7XHJcbiAgdGhpcy5pbm5lckJveC5pbm5lckhUTUwgPSBib3hJbm5lckh0bWw7XHJcbiAgdGhpcy5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ldmVudENsb3NlLCB0aGlzLmhpZGUuYmluZCh0aGlzKSk7XHJcbiAgdGhpcy5jbG9zZUljb24uY2FsbCh0aGlzKTtcclxufTtcclxuXHJcbk1vZGFsLnByb3RvdHlwZS5jbG9zZUljb24gPSBmdW5jdGlvbiBjbG9zZUljb24oKSB7XHJcbiAgbGV0IGVsZW1lbnRzQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMubmFtZUNsb3NlKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50c0Nsb3NlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBlbGVtZW50c0Nsb3NlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oaWRlLmJpbmQodGhpcykpO1xyXG4gIH1cclxufTtcclxuXHJcbk1vZGFsLnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24gaGlkZSgpIHtcclxuICB0aGlzLm92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmFkZENsYXNzKTtcclxuICB0aGlzLmlubmVyQm94LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5hZGRDbGFzcyk7XHJcbn07XHJcblxyXG4vLyDQnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0LIg0YHQtdC60YbQuNC4IFNlcnZpY2VzXHJcbm5ldyBNb2RhbCh7XHJcbiAgb3BlbjogJy5hZHZhbnRhZ2VzX19pbmZvLWxlYXItbW9yZVtkYXRhLW1vZGFsXScsXHJcbiAgY2xvc2U6ICcuY2xvc2UtbW9kYWwnLFxyXG4gIG92ZXJsYXlDbGFzczogJ292ZXJsYXknLFxyXG4gIHBvcHVwQ2xhc3M6ICdtb2RhbCcsXHJcbiAgYWRkQ2xhc3M6ICdzaG93JyxcclxuICBldmVudE9wZW46ICdjbGljaycsXHJcbiAgZXZlbnRDbG9zZTogJ2NsaWNrJyxcclxufSk7XHJcblxyXG4vLyDQnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0LIg0YHQtdC60YbQuNC4IFByb2dyZXNzXHJcbm5ldyBNb2RhbCh7XHJcbiAgb3BlbjogJy5wcm9ncmVzc19faW1nW2RhdGEtbW9kYWxdJyxcclxuICBjbG9zZTogJy5zaG93IC5wcm9ncmVzc19faW1nJyxcclxuICBvdmVybGF5Q2xhc3M6ICdvdmVybGF5JyxcclxuICBwb3B1cENsYXNzOiAnYmlnLWltZycsXHJcbiAgYWRkQ2xhc3M6ICdzaG93JyxcclxuICBldmVudE9wZW46ICdjbGljaycsXHJcbiAgZXZlbnRDbG9zZTogJ2NsaWNrJyxcclxufSk7XHJcblxyXG5uZXcgTW9kYWwoe1xyXG4gIG9wZW46ICcuaGVhZGVyX19tZW51LWRyb3Bkb3duJyxcclxuICBjbG9zZTogJy5zaG93IC5wcm9ncmVzc19faW1nJyxcclxuICBvdmVybGF5Q2xhc3M6ICdvdmVybGF5JyxcclxuICBwb3B1cENsYXNzOiAnbmF2X19yZXNwb25zaXZlJyxcclxuICBhZGRDbGFzczogJ3Nob3cnLFxyXG4gIGV2ZW50T3BlbjogJ2NsaWNrJyxcclxuICBldmVudENsb3NlOiAnY2xpY2snLFxyXG59KTtcclxuZnVuY3Rpb24gU2xpZGVyKHNldHRpbmdzKSB7XHJcbiAgdGhpcy5wcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZXR0aW5ncy5wcmV2KTtcclxuICB0aGlzLm5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNldHRpbmdzLm5leHQpO1xyXG4gIHRoaXMuc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZXR0aW5ncy5zbGlkZXIpO1xyXG5cclxuICB0aGlzLmRvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNldHRpbmdzLmRvdHMpO1xyXG4gIHRoaXMubGVuID0gdGhpcy5zbGlkZXIuY2hpbGRyZW4ubGVuZ3RoO1xyXG4gIHRoaXMuY291bnQgPSAwO1xyXG5cclxuICB0aGlzLm5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNsaWRlTmV4dC5iaW5kKHRoaXMpKTtcclxuICB0aGlzLnByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNsaWRlUHJldi5iaW5kKHRoaXMpKTtcclxuXHJcbiAgdGhpcy5kb3RzU2xpZGUuY2FsbCh0aGlzKTtcclxuXHJcbiAgaWYgKHNldHRpbmdzLmF1dG8pIHtcclxuICAgIHRoaXMudGltZSA9IHNldHRpbmdzLnRpbWUgfHwgNzAwMDtcclxuICAgIHRoaXMuYXV0b1Njcm9sbCgpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblNsaWRlci5wcm90b3R5cGUuc2xpZGVOZXh0ID0gZnVuY3Rpb24gc2xpZGVOZXh0KCkge1xyXG4gIHRoaXMuZGVsZXRlRG90cygpO1xyXG4gIHRoaXMuY291bnQrKztcclxuICB0aGlzLm1haW5TbGlkZXIuY2FsbCh0aGlzKTtcclxufTtcclxuXHJcblxyXG5TbGlkZXIucHJvdG90eXBlLnNsaWRlUHJldiA9IGZ1bmN0aW9uIHNsaWRlUHJldigpIHtcclxuICB0aGlzLmRlbGV0ZURvdHMoKTtcclxuICB0aGlzLmNvdW50LS07XHJcbiAgdGhpcy5tYWluU2xpZGVyLmNhbGwodGhpcyk7XHJcbn07XHJcblxyXG5cclxuU2xpZGVyLnByb3RvdHlwZS5tYWluU2xpZGVyID0gZnVuY3Rpb24gbWFpblNsaWRlcihjb3VudCkge1xyXG4gIGlmIChjb3VudCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICB0aGlzLmNvdW50ID0gK2NvdW50O1xyXG4gIH1cclxuXHJcbiAgdGhpcy5jb3VudFJlc2V0KCk7XHJcbiAgdGhpcy5kb3RzW3RoaXMuY291bnRdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gIHRoaXMuc2xpZGVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke3RoaXMuY291bnR9MDAlKWA7XHJcbn07XHJcblxyXG5cclxuU2xpZGVyLnByb3RvdHlwZS5jb3VudFJlc2V0ID0gZnVuY3Rpb24gY291bnRSZXNldCgpIHtcclxuICBpZiAodGhpcy5jb3VudCA+PSB0aGlzLmxlbikge1xyXG4gICAgdGhpcy5jb3VudCA9IDA7XHJcbiAgfSBlbHNlIGlmICh0aGlzLmNvdW50IDwgMCkge1xyXG4gICAgdGhpcy5jb3VudCA9IHRoaXMubGVuIC0gMTtcclxuICB9XHJcbn07XHJcblxyXG5cclxuU2xpZGVyLnByb3RvdHlwZS5kb3RzU2xpZGUgPSBmdW5jdGlvbiBkb3RzU2xpZGUoKSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRvdHMubGVuZ3RoOyBpKyspIHtcclxuICAgIHRoaXMuZG90c1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZ2V0TnVtYmVyQ2lyY2xlLmJpbmQodGhpcykpO1xyXG4gIH1cclxufTtcclxuXHJcblxyXG5TbGlkZXIucHJvdG90eXBlLmdldE51bWJlckNpcmNsZSA9IGZ1bmN0aW9uIGdldE51bWJlckNpcmNsZShlKSB7XHJcbiAgdGhpcy5kb3RzQ291bnQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2Fyb3VzZWwtY2lyY2xlJyk7XHJcbiAgdGhpcy5tYWluU2xpZGVyLmNhbGwodGhpcywgdGhpcy5kb3RzQ291bnQpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZG90cy5sZW5ndGg7IGkrKykge1xyXG4gICAgdGhpcy5kb3RzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gIH1cclxuXHJcbiAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbn07XHJcblxyXG5cclxuU2xpZGVyLnByb3RvdHlwZS5kZWxldGVEb3RzID0gZnVuY3Rpb24gZGVsZXRlRG90cygpIHtcclxuICB0aGlzLmRvdHNbdGhpcy5jb3VudF0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbn07XHJcblxyXG5cclxuU2xpZGVyLnByb3RvdHlwZS5hdXRvU2Nyb2xsID0gZnVuY3Rpb24gYXV0b1Njcm9sbCgpIHtcclxuICB0aGlzLnRpbWVySWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICB0aGlzLnNsaWRlTmV4dCgpO1xyXG4gIH0sIHRoaXMudGltZSk7XHJcbn07XHJcblxyXG5cclxubmV3IFNsaWRlcih7XHJcbiAgcHJldjogJyNzbGlkZS1wcmV2JyxcclxuICBuZXh0OiAnI3NsaWRlLW5leHQnLFxyXG4gIHNsaWRlcjogJy5zdXN0b21lcnMtd29yZHNfX2xpc3QnLFxyXG4gIGRvdHM6ICcuc3VzdG9tZXJzX19zbGlkZXItZG90cyAuc2xpZGVyLWRvdCcsXHJcbiAgYXV0bzogZmFsc2UsXHJcbiAgdGltZTogNzAwMCxcclxufSk7XHJcblxyXG5uZXcgU2xpZGVyKHtcclxuICBwcmV2OiAnLmhlYWRlcl9fc2xpZGVyLXByZXYnLFxyXG4gIG5leHQ6ICcuaGVhZGVyX19zbGlkZXItbmV4dCcsXHJcbiAgc2xpZGVyOiAnLmhlYWRlcl9fc2xpZGVyLWxpc3QnLFxyXG4gIGRvdHM6ICcuaGVhZGVyX19zbGlkZXItZG90cyBzcGFuJyxcclxuICBhdXRvOiB0cnVlLFxyXG4gIHRpbWU6IDUwMDAsXHJcbn0pOyJdLCJmaWxlIjoibWFpbi5qcyJ9
