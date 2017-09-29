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
  time: 7000,
});
