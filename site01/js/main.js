document.body.onload = function () {
  setTimeout(function () {
    let preloader = document.getElementById('preloader');
    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done');
    }
  }, 500);
};
let overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

function Modal(settings) {
  this.open = document.querySelectorAll(settings.open);
  this.addClass = settings.addClass;
  this.nameClose = settings.close;

  // this.overlay = document.createElement('div');
  // this.overlay.classList.add(settings.overlayClass);
  // document.body.appendChild(this.overlay);


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
  overlay.classList.add(this.addClass);
  this.innerBox.classList.add(this.addClass);
  this.innerBox.innerHTML = boxInnerHtml;
  overlay.addEventListener(this.eventClose, this.hide.bind(this));
  this.closeIcon.call(this);
  new accariod({
    link: '.nav__responsive .header__menu-link-drop',
  })
  
};

Modal.prototype.closeIcon = function closeIcon() {
  let elementsClose = document.querySelectorAll(this.nameClose);

  for (let i = 0; i < elementsClose.length; i++) {
    elementsClose[i].addEventListener('click', this.hide.bind(this));
  }
};

Modal.prototype.hide = function hide() {
  overlay.classList.remove(this.addClass);
  this.innerBox.classList.remove(this.addClass);
};

// Модальное окно в секции Services
new Modal({
  open: '.advantages__info-lear-more[data-modal]',
  close: '.close-modal',
  //overlayClass: 'overlay',
  popupClass: 'modal',
  addClass: 'show',
  eventOpen: 'click',
  eventClose: 'click',
});

// Модальное окно в секции Progress
new Modal({
  open: '.progress__img[data-modal]',
  close: '.show .progress__img',
  //overlayClass: 'overlay',
  popupClass: 'big-img',
  addClass: 'show',
  eventOpen: 'click',
  eventClose: 'click',
});

//menu
new Modal({
  open: '.header__menu-dropdown',
  close: '.show .progress__img',
  //overlayClass: 'overlay',
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



function accariod (setting) {
  this.title = document.querySelectorAll(setting.link);

  for (var i = 0; i < this.title.length; i++) {
    this.title[i].addEventListener('click', function(){
      var accariod_section = this.nextElementSibling;
      //var accariod_section_class = accariod_section.getAttribute('class');
      // var accariodBox = document.getElementsByClassName(accariod_section_class);

      // for (var j = 0; j < accariodBox.length; j++) {
      //  accariodBox[j].style.maxHeight = null;
      // }  
      
      if (accariod_section.style.maxHeight) {
        accariod_section.style.maxHeight = null;
      } else {
        accariod_section.style.maxHeight = accariod_section.scrollHeight + 'px';
      }

    });
  }
}

new accariod({
  link: '.header__menu-link-drop',
})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmJvZHkub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHByZWxvYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmVsb2FkZXInKTtcclxuICAgIGlmICghcHJlbG9hZGVyLmNsYXNzTGlzdC5jb250YWlucygnZG9uZScpKSB7XHJcbiAgICAgIHByZWxvYWRlci5jbGFzc0xpc3QuYWRkKCdkb25lJyk7XHJcbiAgICB9XHJcbiAgfSwgNTAwKTtcclxufTtcclxubGV0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxub3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5Jyk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XHJcblxyXG5mdW5jdGlvbiBNb2RhbChzZXR0aW5ncykge1xyXG4gIHRoaXMub3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2V0dGluZ3Mub3Blbik7XHJcbiAgdGhpcy5hZGRDbGFzcyA9IHNldHRpbmdzLmFkZENsYXNzO1xyXG4gIHRoaXMubmFtZUNsb3NlID0gc2V0dGluZ3MuY2xvc2U7XHJcblxyXG4gIC8vIHRoaXMub3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIC8vIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QuYWRkKHNldHRpbmdzLm92ZXJsYXlDbGFzcyk7XHJcbiAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm92ZXJsYXkpO1xyXG5cclxuXHJcbiAgdGhpcy5pbm5lckJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRoaXMuaW5uZXJCb3guY2xhc3NMaXN0LmFkZChzZXR0aW5ncy5wb3B1cENsYXNzKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuaW5uZXJCb3gpO1xyXG5cclxuICB0aGlzLmV2ZW50T3BlbiA9IHNldHRpbmdzLmV2ZW50T3BlbiB8fCAnY2xpY2snO1xyXG4gIHRoaXMuZXZlbnRDbG9zZSA9IHNldHRpbmdzLmV2ZW50Q2xvc2UgfHwgJ2NsaWNrJztcclxuXHJcbiAgdGhpcy5nZXRCdG4uY2FsbCh0aGlzKTtcclxufVxyXG5cclxuTW9kYWwucHJvdG90eXBlLmdldEJ0biA9IGZ1bmN0aW9uIGdldEJ0bigpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3Blbi5sZW5ndGg7IGkrKykge1xyXG4gICAgdGhpcy5vcGVuW2ldLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ldmVudE9wZW4sIHRoaXMuaW5uZXIuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuTW9kYWwucHJvdG90eXBlLmlubmVyID0gZnVuY3Rpb24gc2hvdyhlKSB7XHJcbiAgbGV0IGlubmVyQ2xhc3MgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kYWwnKTtcclxuICBsZXQgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihpbm5lckNsYXNzKTtcclxuICB0aGlzLnNob3cuY2FsbCh0aGlzLCBib3guaW5uZXJIVE1MKTtcclxufTtcclxuXHJcbk1vZGFsLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gc2hvdyhib3hJbm5lckh0bWwpIHtcclxuICBvdmVybGF5LmNsYXNzTGlzdC5hZGQodGhpcy5hZGRDbGFzcyk7XHJcbiAgdGhpcy5pbm5lckJveC5jbGFzc0xpc3QuYWRkKHRoaXMuYWRkQ2xhc3MpO1xyXG4gIHRoaXMuaW5uZXJCb3guaW5uZXJIVE1MID0gYm94SW5uZXJIdG1sO1xyXG4gIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50Q2xvc2UsIHRoaXMuaGlkZS5iaW5kKHRoaXMpKTtcclxuICB0aGlzLmNsb3NlSWNvbi5jYWxsKHRoaXMpO1xyXG4gIG5ldyBhY2NhcmlvZCh7XHJcbiAgICBsaW5rOiAnLm5hdl9fcmVzcG9uc2l2ZSAuaGVhZGVyX19tZW51LWxpbmstZHJvcCcsXHJcbiAgfSlcclxuICBcclxufTtcclxuXHJcbk1vZGFsLnByb3RvdHlwZS5jbG9zZUljb24gPSBmdW5jdGlvbiBjbG9zZUljb24oKSB7XHJcbiAgbGV0IGVsZW1lbnRzQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMubmFtZUNsb3NlKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50c0Nsb3NlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBlbGVtZW50c0Nsb3NlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oaWRlLmJpbmQodGhpcykpO1xyXG4gIH1cclxufTtcclxuXHJcbk1vZGFsLnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24gaGlkZSgpIHtcclxuICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5hZGRDbGFzcyk7XHJcbiAgdGhpcy5pbm5lckJveC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuYWRkQ2xhc3MpO1xyXG59O1xyXG5cclxuLy8g0JzQvtC00LDQu9GM0L3QvtC1INC+0LrQvdC+INCyINGB0LXQutGG0LjQuCBTZXJ2aWNlc1xyXG5uZXcgTW9kYWwoe1xyXG4gIG9wZW46ICcuYWR2YW50YWdlc19faW5mby1sZWFyLW1vcmVbZGF0YS1tb2RhbF0nLFxyXG4gIGNsb3NlOiAnLmNsb3NlLW1vZGFsJyxcclxuICAvL292ZXJsYXlDbGFzczogJ292ZXJsYXknLFxyXG4gIHBvcHVwQ2xhc3M6ICdtb2RhbCcsXHJcbiAgYWRkQ2xhc3M6ICdzaG93JyxcclxuICBldmVudE9wZW46ICdjbGljaycsXHJcbiAgZXZlbnRDbG9zZTogJ2NsaWNrJyxcclxufSk7XHJcblxyXG4vLyDQnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0LIg0YHQtdC60YbQuNC4IFByb2dyZXNzXHJcbm5ldyBNb2RhbCh7XHJcbiAgb3BlbjogJy5wcm9ncmVzc19faW1nW2RhdGEtbW9kYWxdJyxcclxuICBjbG9zZTogJy5zaG93IC5wcm9ncmVzc19faW1nJyxcclxuICAvL292ZXJsYXlDbGFzczogJ292ZXJsYXknLFxyXG4gIHBvcHVwQ2xhc3M6ICdiaWctaW1nJyxcclxuICBhZGRDbGFzczogJ3Nob3cnLFxyXG4gIGV2ZW50T3BlbjogJ2NsaWNrJyxcclxuICBldmVudENsb3NlOiAnY2xpY2snLFxyXG59KTtcclxuXHJcbi8vbWVudVxyXG5uZXcgTW9kYWwoe1xyXG4gIG9wZW46ICcuaGVhZGVyX19tZW51LWRyb3Bkb3duJyxcclxuICBjbG9zZTogJy5zaG93IC5wcm9ncmVzc19faW1nJyxcclxuICAvL292ZXJsYXlDbGFzczogJ292ZXJsYXknLFxyXG4gIHBvcHVwQ2xhc3M6ICduYXZfX3Jlc3BvbnNpdmUnLFxyXG4gIGFkZENsYXNzOiAnc2hvdycsXHJcbiAgZXZlbnRPcGVuOiAnY2xpY2snLFxyXG4gIGV2ZW50Q2xvc2U6ICdjbGljaycsXHJcbn0pO1xyXG5mdW5jdGlvbiBTbGlkZXIoc2V0dGluZ3MpIHtcclxuICB0aGlzLnByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNldHRpbmdzLnByZXYpO1xyXG4gIHRoaXMubmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2V0dGluZ3MubmV4dCk7XHJcbiAgdGhpcy5zbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNldHRpbmdzLnNsaWRlcik7XHJcblxyXG4gIHRoaXMuZG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2V0dGluZ3MuZG90cyk7XHJcbiAgdGhpcy5sZW4gPSB0aGlzLnNsaWRlci5jaGlsZHJlbi5sZW5ndGg7XHJcbiAgdGhpcy5jb3VudCA9IDA7XHJcblxyXG4gIHRoaXMubmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2xpZGVOZXh0LmJpbmQodGhpcykpO1xyXG4gIHRoaXMucHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2xpZGVQcmV2LmJpbmQodGhpcykpO1xyXG5cclxuICB0aGlzLmRvdHNTbGlkZS5jYWxsKHRoaXMpO1xyXG5cclxuICBpZiAoc2V0dGluZ3MuYXV0bykge1xyXG4gICAgdGhpcy50aW1lID0gc2V0dGluZ3MudGltZSB8fCA3MDAwO1xyXG4gICAgdGhpcy5hdXRvU2Nyb2xsKCk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuU2xpZGVyLnByb3RvdHlwZS5zbGlkZU5leHQgPSBmdW5jdGlvbiBzbGlkZU5leHQoKSB7XHJcbiAgdGhpcy5kZWxldGVEb3RzKCk7XHJcbiAgdGhpcy5jb3VudCsrO1xyXG4gIHRoaXMubWFpblNsaWRlci5jYWxsKHRoaXMpO1xyXG59O1xyXG5cclxuXHJcblNsaWRlci5wcm90b3R5cGUuc2xpZGVQcmV2ID0gZnVuY3Rpb24gc2xpZGVQcmV2KCkge1xyXG4gIHRoaXMuZGVsZXRlRG90cygpO1xyXG4gIHRoaXMuY291bnQtLTtcclxuICB0aGlzLm1haW5TbGlkZXIuY2FsbCh0aGlzKTtcclxufTtcclxuXHJcblxyXG5TbGlkZXIucHJvdG90eXBlLm1haW5TbGlkZXIgPSBmdW5jdGlvbiBtYWluU2xpZGVyKGNvdW50KSB7XHJcbiAgaWYgKGNvdW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgIHRoaXMuY291bnQgPSArY291bnQ7XHJcbiAgfVxyXG5cclxuICB0aGlzLmNvdW50UmVzZXQoKTtcclxuICB0aGlzLmRvdHNbdGhpcy5jb3VudF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgdGhpcy5zbGlkZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7dGhpcy5jb3VudH0wMCUpYDtcclxufTtcclxuXHJcblxyXG5TbGlkZXIucHJvdG90eXBlLmNvdW50UmVzZXQgPSBmdW5jdGlvbiBjb3VudFJlc2V0KCkge1xyXG4gIGlmICh0aGlzLmNvdW50ID49IHRoaXMubGVuKSB7XHJcbiAgICB0aGlzLmNvdW50ID0gMDtcclxuICB9IGVsc2UgaWYgKHRoaXMuY291bnQgPCAwKSB7XHJcbiAgICB0aGlzLmNvdW50ID0gdGhpcy5sZW4gLSAxO1xyXG4gIH1cclxufTtcclxuXHJcblxyXG5TbGlkZXIucHJvdG90eXBlLmRvdHNTbGlkZSA9IGZ1bmN0aW9uIGRvdHNTbGlkZSgpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZG90cy5sZW5ndGg7IGkrKykge1xyXG4gICAgdGhpcy5kb3RzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5nZXROdW1iZXJDaXJjbGUuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuXHJcblNsaWRlci5wcm90b3R5cGUuZ2V0TnVtYmVyQ2lyY2xlID0gZnVuY3Rpb24gZ2V0TnVtYmVyQ2lyY2xlKGUpIHtcclxuICB0aGlzLmRvdHNDb3VudCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1jYXJvdXNlbC1jaXJjbGUnKTtcclxuICB0aGlzLm1haW5TbGlkZXIuY2FsbCh0aGlzLCB0aGlzLmRvdHNDb3VudCk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kb3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB0aGlzLmRvdHNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgfVxyXG5cclxuICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxufTtcclxuXHJcblxyXG5TbGlkZXIucHJvdG90eXBlLmRlbGV0ZURvdHMgPSBmdW5jdGlvbiBkZWxldGVEb3RzKCkge1xyXG4gIHRoaXMuZG90c1t0aGlzLmNvdW50XS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxufTtcclxuXHJcblxyXG5TbGlkZXIucHJvdG90eXBlLmF1dG9TY3JvbGwgPSBmdW5jdGlvbiBhdXRvU2Nyb2xsKCkge1xyXG4gIHRoaXMudGltZXJJZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgIHRoaXMuc2xpZGVOZXh0KCk7XHJcbiAgfSwgdGhpcy50aW1lKTtcclxufTtcclxuXHJcblxyXG5uZXcgU2xpZGVyKHtcclxuICBwcmV2OiAnI3NsaWRlLXByZXYnLFxyXG4gIG5leHQ6ICcjc2xpZGUtbmV4dCcsXHJcbiAgc2xpZGVyOiAnLnN1c3RvbWVycy13b3Jkc19fbGlzdCcsXHJcbiAgZG90czogJy5zdXN0b21lcnNfX3NsaWRlci1kb3RzIC5zbGlkZXItZG90JyxcclxuICBhdXRvOiBmYWxzZSxcclxuICB0aW1lOiA3MDAwLFxyXG59KTtcclxuXHJcbm5ldyBTbGlkZXIoe1xyXG4gIHByZXY6ICcuaGVhZGVyX19zbGlkZXItcHJldicsXHJcbiAgbmV4dDogJy5oZWFkZXJfX3NsaWRlci1uZXh0JyxcclxuICBzbGlkZXI6ICcuaGVhZGVyX19zbGlkZXItbGlzdCcsXHJcbiAgZG90czogJy5oZWFkZXJfX3NsaWRlci1kb3RzIHNwYW4nLFxyXG4gIGF1dG86IHRydWUsXHJcbiAgdGltZTogNTAwMCxcclxufSk7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGFjY2FyaW9kIChzZXR0aW5nKSB7XHJcbiAgdGhpcy50aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2V0dGluZy5saW5rKTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRpdGxlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB0aGlzLnRpdGxlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgdmFyIGFjY2FyaW9kX3NlY3Rpb24gPSB0aGlzLm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgLy92YXIgYWNjYXJpb2Rfc2VjdGlvbl9jbGFzcyA9IGFjY2FyaW9kX3NlY3Rpb24uZ2V0QXR0cmlidXRlKCdjbGFzcycpO1xyXG4gICAgICAvLyB2YXIgYWNjYXJpb2RCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGFjY2FyaW9kX3NlY3Rpb25fY2xhc3MpO1xyXG5cclxuICAgICAgLy8gZm9yICh2YXIgaiA9IDA7IGogPCBhY2NhcmlvZEJveC5sZW5ndGg7IGorKykge1xyXG4gICAgICAvLyAgYWNjYXJpb2RCb3hbal0uc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcclxuICAgICAgLy8gfSAgXHJcbiAgICAgIFxyXG4gICAgICBpZiAoYWNjYXJpb2Rfc2VjdGlvbi5zdHlsZS5tYXhIZWlnaHQpIHtcclxuICAgICAgICBhY2NhcmlvZF9zZWN0aW9uLnN0eWxlLm1heEhlaWdodCA9IG51bGw7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWNjYXJpb2Rfc2VjdGlvbi5zdHlsZS5tYXhIZWlnaHQgPSBhY2NhcmlvZF9zZWN0aW9uLnNjcm9sbEhlaWdodCArICdweCc7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbm5ldyBhY2NhcmlvZCh7XHJcbiAgbGluazogJy5oZWFkZXJfX21lbnUtbGluay1kcm9wJyxcclxufSkiXSwiZmlsZSI6Im1haW4uanMifQ==
