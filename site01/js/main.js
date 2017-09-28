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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmJvZHkub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHByZWxvYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmVsb2FkZXInKTtcclxuICAgIGlmICghcHJlbG9hZGVyLmNsYXNzTGlzdC5jb250YWlucygnZG9uZScpKSB7XHJcbiAgICAgIHByZWxvYWRlci5jbGFzc0xpc3QuYWRkKCdkb25lJyk7XHJcbiAgICB9XHJcbiAgfSwgNTAwKTtcclxufTtcclxuZnVuY3Rpb24gTW9kYWwoc2V0dGluZ3MpIHtcclxuICB0aGlzLm9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNldHRpbmdzLm9wZW4pO1xyXG4gIHRoaXMuYWRkQ2xhc3MgPSBzZXR0aW5ncy5hZGRDbGFzcztcclxuICB0aGlzLm5hbWVDbG9zZSA9IHNldHRpbmdzLmNsb3NlO1xyXG5cclxuICB0aGlzLm92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0aGlzLm92ZXJsYXkuY2xhc3NMaXN0LmFkZChzZXR0aW5ncy5vdmVybGF5Q2xhc3MpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5vdmVybGF5KTtcclxuXHJcbiAgdGhpcy5pbm5lckJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRoaXMuaW5uZXJCb3guY2xhc3NMaXN0LmFkZChzZXR0aW5ncy5wb3B1cENsYXNzKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuaW5uZXJCb3gpO1xyXG5cclxuICB0aGlzLmV2ZW50T3BlbiA9IHNldHRpbmdzLmV2ZW50T3BlbiB8fCAnY2xpY2snO1xyXG4gIHRoaXMuZXZlbnRDbG9zZSA9IHNldHRpbmdzLmV2ZW50Q2xvc2UgfHwgJ2NsaWNrJztcclxuXHJcbiAgdGhpcy5nZXRCdG4uY2FsbCh0aGlzKTtcclxufVxyXG5cclxuTW9kYWwucHJvdG90eXBlLmdldEJ0biA9IGZ1bmN0aW9uIGdldEJ0bigpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3Blbi5sZW5ndGg7IGkrKykge1xyXG4gICAgdGhpcy5vcGVuW2ldLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ldmVudE9wZW4sIHRoaXMuaW5uZXIuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuTW9kYWwucHJvdG90eXBlLmlubmVyID0gZnVuY3Rpb24gc2hvdyhlKSB7XHJcbiAgbGV0IGlubmVyQ2xhc3MgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kYWwnKTtcclxuICBsZXQgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihpbm5lckNsYXNzKTtcclxuICB0aGlzLnNob3cuY2FsbCh0aGlzLCBib3guaW5uZXJIVE1MKTtcclxufTtcclxuXHJcbk1vZGFsLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gc2hvdyhib3hJbm5lckh0bWwpIHtcclxuICB0aGlzLm92ZXJsYXkuY2xhc3NMaXN0LmFkZCh0aGlzLmFkZENsYXNzKTtcclxuICB0aGlzLmlubmVyQm94LmNsYXNzTGlzdC5hZGQodGhpcy5hZGRDbGFzcyk7XHJcbiAgdGhpcy5pbm5lckJveC5pbm5lckhUTUwgPSBib3hJbm5lckh0bWw7XHJcbiAgdGhpcy5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ldmVudENsb3NlLCB0aGlzLmhpZGUuYmluZCh0aGlzKSk7XHJcbiAgdGhpcy5jbG9zZUljb24uY2FsbCh0aGlzKTtcclxufTtcclxuXHJcbk1vZGFsLnByb3RvdHlwZS5jbG9zZUljb24gPSBmdW5jdGlvbiBjbG9zZUljb24oKSB7XHJcbiAgbGV0IGVsZW1lbnRzQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMubmFtZUNsb3NlKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50c0Nsb3NlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBlbGVtZW50c0Nsb3NlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oaWRlLmJpbmQodGhpcykpO1xyXG4gIH1cclxufTtcclxuXHJcbk1vZGFsLnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24gaGlkZSgpIHtcclxuICB0aGlzLm92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmFkZENsYXNzKTtcclxuICB0aGlzLmlubmVyQm94LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5hZGRDbGFzcyk7XHJcbn07XHJcblxyXG4vLyDQnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0LIg0YHQtdC60YbQuNC4IFNlcnZpY2VzXHJcbm5ldyBNb2RhbCh7XHJcbiAgb3BlbjogJy5hZHZhbnRhZ2VzX19pbmZvLWxlYXItbW9yZVtkYXRhLW1vZGFsXScsXHJcbiAgY2xvc2U6ICcuY2xvc2UtbW9kYWwnLFxyXG4gIG92ZXJsYXlDbGFzczogJ292ZXJsYXknLFxyXG4gIHBvcHVwQ2xhc3M6ICdtb2RhbCcsXHJcbiAgYWRkQ2xhc3M6ICdzaG93JyxcclxuICBldmVudE9wZW46ICdjbGljaycsXHJcbiAgZXZlbnRDbG9zZTogJ2NsaWNrJyxcclxufSk7XHJcblxyXG4vLyDQnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0LIg0YHQtdC60YbQuNC4IFByb2dyZXNzXHJcbm5ldyBNb2RhbCh7XHJcbiAgb3BlbjogJy5wcm9ncmVzc19faW1nW2RhdGEtbW9kYWxdJyxcclxuICBjbG9zZTogJy5zaG93IC5wcm9ncmVzc19faW1nJyxcclxuICBvdmVybGF5Q2xhc3M6ICdvdmVybGF5JyxcclxuICBwb3B1cENsYXNzOiAnYmlnLWltZycsXHJcbiAgYWRkQ2xhc3M6ICdzaG93JyxcclxuICBldmVudE9wZW46ICdjbGljaycsXHJcbiAgZXZlbnRDbG9zZTogJ2NsaWNrJyxcclxufSk7XHJcbmZ1bmN0aW9uIFNsaWRlcihzZXR0aW5ncykge1xyXG4gIHRoaXMucHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2V0dGluZ3MucHJldik7XHJcbiAgdGhpcy5uZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZXR0aW5ncy5uZXh0KTtcclxuICB0aGlzLnNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2V0dGluZ3Muc2xpZGVyKTtcclxuXHJcbiAgdGhpcy5kb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZXR0aW5ncy5kb3RzKTtcclxuICB0aGlzLmxlbiA9IHRoaXMuc2xpZGVyLmNoaWxkcmVuLmxlbmd0aDtcclxuICB0aGlzLmNvdW50ID0gMDtcclxuXHJcbiAgdGhpcy5uZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zbGlkZU5leHQuYmluZCh0aGlzKSk7XHJcbiAgdGhpcy5wcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zbGlkZVByZXYuYmluZCh0aGlzKSk7XHJcblxyXG4gIHRoaXMuZG90c1NsaWRlLmNhbGwodGhpcyk7XHJcblxyXG4gIGlmIChzZXR0aW5ncy5hdXRvKSB7XHJcbiAgICB0aGlzLnRpbWUgPSBzZXR0aW5ncy50aW1lIHx8IDcwMDA7XHJcbiAgICB0aGlzLmF1dG9TY3JvbGwoKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5TbGlkZXIucHJvdG90eXBlLnNsaWRlTmV4dCA9IGZ1bmN0aW9uIHNsaWRlTmV4dCgpIHtcclxuICB0aGlzLmRlbGV0ZURvdHMoKTtcclxuICB0aGlzLmNvdW50Kys7XHJcbiAgdGhpcy5tYWluU2xpZGVyLmNhbGwodGhpcyk7XHJcbn07XHJcblxyXG5cclxuU2xpZGVyLnByb3RvdHlwZS5zbGlkZVByZXYgPSBmdW5jdGlvbiBzbGlkZVByZXYoKSB7XHJcbiAgdGhpcy5kZWxldGVEb3RzKCk7XHJcbiAgdGhpcy5jb3VudC0tO1xyXG4gIHRoaXMubWFpblNsaWRlci5jYWxsKHRoaXMpO1xyXG59O1xyXG5cclxuXHJcblNsaWRlci5wcm90b3R5cGUubWFpblNsaWRlciA9IGZ1bmN0aW9uIG1haW5TbGlkZXIoY291bnQpIHtcclxuICBpZiAoY291bnQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgdGhpcy5jb3VudCA9ICtjb3VudDtcclxuICB9XHJcblxyXG4gIHRoaXMuY291bnRSZXNldCgpO1xyXG4gIHRoaXMuZG90c1t0aGlzLmNvdW50XS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICB0aGlzLnNsaWRlci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHt0aGlzLmNvdW50fTAwJSlgO1xyXG59O1xyXG5cclxuXHJcblNsaWRlci5wcm90b3R5cGUuY291bnRSZXNldCA9IGZ1bmN0aW9uIGNvdW50UmVzZXQoKSB7XHJcbiAgaWYgKHRoaXMuY291bnQgPj0gdGhpcy5sZW4pIHtcclxuICAgIHRoaXMuY291bnQgPSAwO1xyXG4gIH0gZWxzZSBpZiAodGhpcy5jb3VudCA8IDApIHtcclxuICAgIHRoaXMuY291bnQgPSB0aGlzLmxlbiAtIDE7XHJcbiAgfVxyXG59O1xyXG5cclxuXHJcblNsaWRlci5wcm90b3R5cGUuZG90c1NsaWRlID0gZnVuY3Rpb24gZG90c1NsaWRlKCkge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kb3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB0aGlzLmRvdHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmdldE51bWJlckNpcmNsZS5iaW5kKHRoaXMpKTtcclxuICB9XHJcbn07XHJcblxyXG5cclxuU2xpZGVyLnByb3RvdHlwZS5nZXROdW1iZXJDaXJjbGUgPSBmdW5jdGlvbiBnZXROdW1iZXJDaXJjbGUoZSkge1xyXG4gIHRoaXMuZG90c0NvdW50ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWNhcm91c2VsLWNpcmNsZScpO1xyXG4gIHRoaXMubWFpblNsaWRlci5jYWxsKHRoaXMsIHRoaXMuZG90c0NvdW50KTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRvdHMubGVuZ3RoOyBpKyspIHtcclxuICAgIHRoaXMuZG90c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICB9XHJcblxyXG4gIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG59O1xyXG5cclxuXHJcblNsaWRlci5wcm90b3R5cGUuZGVsZXRlRG90cyA9IGZ1bmN0aW9uIGRlbGV0ZURvdHMoKSB7XHJcbiAgdGhpcy5kb3RzW3RoaXMuY291bnRdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG59O1xyXG5cclxuXHJcblNsaWRlci5wcm90b3R5cGUuYXV0b1Njcm9sbCA9IGZ1bmN0aW9uIGF1dG9TY3JvbGwoKSB7XHJcbiAgdGhpcy50aW1lcklkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgdGhpcy5zbGlkZU5leHQoKTtcclxuICB9LCB0aGlzLnRpbWUpO1xyXG59O1xyXG5cclxuXHJcbm5ldyBTbGlkZXIoe1xyXG4gIHByZXY6ICcjc2xpZGUtcHJldicsXHJcbiAgbmV4dDogJyNzbGlkZS1uZXh0JyxcclxuICBzbGlkZXI6ICcuc3VzdG9tZXJzLXdvcmRzX19saXN0JyxcclxuICBkb3RzOiAnLnN1c3RvbWVyc19fc2xpZGVyLWRvdHMgLnNsaWRlci1kb3QnLFxyXG4gIGF1dG86IGZhbHNlLFxyXG4gIHRpbWU6IDcwMDAsXHJcbn0pO1xyXG5cclxubmV3IFNsaWRlcih7XHJcbiAgcHJldjogJy5oZWFkZXJfX3NsaWRlci1wcmV2JyxcclxuICBuZXh0OiAnLmhlYWRlcl9fc2xpZGVyLW5leHQnLFxyXG4gIHNsaWRlcjogJy5oZWFkZXJfX3NsaWRlci1saXN0JyxcclxuICBkb3RzOiAnLmhlYWRlcl9fc2xpZGVyLWRvdHMgc3BhbicsXHJcbiAgYXV0bzogdHJ1ZSxcclxuICB0aW1lOiA1MDAwLFxyXG59KTsiXSwiZmlsZSI6Im1haW4uanMifQ==
