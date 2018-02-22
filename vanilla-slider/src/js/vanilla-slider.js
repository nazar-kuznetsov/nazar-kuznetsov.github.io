/*
vanilla-slider.js
Author: Kuznetsov Nazar
email: nazar.kuznettsov@gmail.com
github: https://github.com/nazar-kuznetsov
*/
function Slider(settings) {
  this.container = document.querySelector(settings.container);
  this.dotsReady = settings.dots;

  this.fade = settings.fade || false;
  this.count = (this.fade) ? 0 : 1;
  this.vertical = settings.vertical || false;

  // добавляем классы и клонов для слайдера в режиме transform
  if (!this.fade) {
    const firstElement = this.container.children[0];
    const lastElement = this.container.children[this.container.children.length - 1];

    // клонируем и добавляем первый и последний слайд
    this.container.appendChild(this.cloneElement(firstElement));
    this.container.insertBefore(this.cloneElement(lastElement), this.container.firstChild);

    if (!this.vertical) {
      this.container.parentNode.classList.add('slider-container-X');
      this.container.classList.add('slider-X');
    } else {
      this.container.parentNode.classList.add('slider-container-Y');
      this.container.classList.add('slider-Y');
    }
  } else {
    this.container.classList.add('slider-F');
  }

  this.children = this.container.children;

  // добавляем класс со стилями элементам слайдера
  for (let i = 0; i < this.children.length; i++) {
    if (!this.vertical && !this.fade) {
      this.children[i].classList.add('slider-item-X');
    } else if (this.vertical && !this.fade) {
      this.children[i].classList.add('slider-item-Y');
    } else if (this.fade) {
      this.children[i].classList.add('slider-item-F');
    }
  }

  this.childrenSize = this.getChildrenSize.call(this);
  this.containerSize = -this.childrenSize;

  if (!this.fade) this.transform(); // двигаем слайдер на 1 элемент

  this.children[this.count].classList.add('active');

  this.length = this.children.length;
  this.timerId = undefined;
  this.time = settings.time || 4000;
  this.callback = settings.callback || function () {};

  // кординаты перемещение слайдов с помощью скролла и свайпа
  this.coordsMove = {
    start: undefined,
    move: undefined,
    end: undefined,
  };

  this.pauseScroll = false;
  this.touchUser = false;
  this.speed = true;
  this.scrollStart = false;
  this.isRun = false; // в момент прокрутки true после завершение анимации false не дает сбить анимации при повторном клике

  // Кнопки вперед и назад
  if (settings.next !== undefined && settings.prev !== undefined) {
    this.buttonNext = document.querySelector(settings.next);
    this.buttonPrev = document.querySelector(settings.prev);

    this.buttonNext.addEventListener('click', this.next.bind(this));
    this.buttonPrev.addEventListener('click', this.prev.bind(this));
  }

  // проверяем передали ли dots
  if (this.dotsReady) {
    this.dots = document.querySelectorAll(settings.dots);
    this.dots[0].classList.add('active');

    // добавляем dots атрибут с номером слайдера и вешаем события клик
    this.dots.forEach((dots, index) => {
      (this.fade) ? dots.setAttribute('data-slide', index) : dots.setAttribute('data-slide', index + 1);
      dots.addEventListener('click', this.paginationMove.bind(this));
    });
  }

  // события тач свайпа
  this.container.addEventListener('touchstart', this.touchStart.bind(this));
  this.container.addEventListener('touchmove', this.touchMove.bind(this));
  this.container.addEventListener('touchend', this.calcScroll.bind(this));

  // события скролл мышкой
  this.container.addEventListener('mousedown', this.mouseStart.bind(this));
  this.container.addEventListener('mousemove', this.mouseMove.bind(this));
  this.container.addEventListener('mouseup', this.calcScroll.bind(this));
  this.container.addEventListener('mouseleave', this.calcScroll.bind(this));

  // события окончание анимации
  this.container.addEventListener('transitionend', this.animatedEnd.bind(this));

  if (settings.auto) this.autoSlider();

  if (this.style === undefined && !this.fade) {
    window.addEventListener('resize', this.resizeResponsive.bind(this));
  }
}

Slider.prototype.resizeResponsive = function () {
  // при двигаем слайд при изменение экрана
  (!this.vertical) ? this.container.classList.remove('animate-X') : this.container.classList.remove('animate-Y');

  this.childrenSize = this.getChildrenSize.call(this);
  const offset = this.childrenSize * this.count;
  this.containerSize = -offset;
  this.transform();
};

Slider.prototype.cloneElement = function (element) {
  //  клонируем element
  const clone = document.createElement(element.nodeName);
  clone.className = element.className;
  clone.innerHTML = element.innerHTML;
  return clone;
};

Slider.prototype.mouseStart = function (event) {
  // получаем кординаты Y или X по клику мышки
  event.preventDefault();
  if (this.pauseScroll || this.isRun) return;

  const targetScrollY = event.clientY;
  const targetScrollX = event.clientX;
  this.scrollStart = true;
  this.getTargetPosition(targetScrollY, targetScrollX);
};

Slider.prototype.touchStart = function (event) {
  // получаем кординаты Y или X по касанию touch
  event.preventDefault();
  if (this.pauseScroll || this.isRun) return;

  const targetTouchY = event.touches[0].pageY;
  const targetTouchX = event.touches[0].pageX;
  this.scrollStart = true;
  this.getTargetPosition(targetTouchY, targetTouchX);
};

Slider.prototype.getTargetPosition = function (targetY, targetX) {
  this.stopTimer();
  if (this.vertical) event.preventDefault();

  if (!this.fade) {
    (!this.vertical) ? this.container.classList.remove('animate-X') : this.container.classList.remove('animate-Y');
  }
  this.coordsMove.start = this.setTargetPosition(targetY, targetX);
};

Slider.prototype.setTargetPosition = function (targetY, targetX) {
  return (this.vertical) ? targetY : targetX;
};

Slider.prototype.mouseMove = function (event) {
  // двигаем слайдер при движение миши
  if (!this.scrollStart) return;
  if (this.pauseScroll) return;

  this.scrollStart = true;
  this.coordsMove.move = this.setTargetPosition(event.clientY, event.clientX);
  this.scrollMove();
};

Slider.prototype.touchMove = function (event) {
  // двигаем слайдер при свайпе
  if (this.pauseScroll) return;
  if (!this.scrollStart) return;

  this.scrollStart = true;
  this.coordsMove.move = this.setTargetPosition(event.touches[0].pageY, event.touches[0].pageX);
  this.scrollMove();
};

Slider.prototype.scrollMove = function () {
  this.touchUser = true;
  this.coordsMove.end = (this.count * this.childrenSize) + (this.coordsMove.start - this.coordsMove.move);
  this.containerSize = -this.coordsMove.end;

  if (this.fade) return;

  this.stopTimer();
  this.transform();
};

Slider.prototype.calcScroll = function () {
  /* считает на сколько был передвинут слайдер с помощью мишки или свайпа
  и если растояние было больше чем ширина или высота 1 слайда / 8
  тогда двигаем вперед или назад */
  if (!this.touchUser && !this.scrollStart) return;
  const absMove = Math.abs((this.count * this.childrenSize) - this.coordsMove.end);

  if (absMove > this.childrenSize / 8 && this.touchUser) {
    if (this.coordsMove.end > this.count * this.childrenSize) {
      this.count += 1;
    } else if (this.coordsMove.end < this.count * this.childrenSize) {
      this.count -= 1;
    }

    if (!this.fade) this.pauseScroll = true;
  }

  this.containerSize = -this.count * this.childrenSize;
  this.touchUser = false;
  this.scrollStart = false;
  this.move();
};

Slider.prototype.autoSlider = function () {
  this.startTimer();

  this.container.addEventListener('mouseover', this.stopTimer.bind(this));
  if (this.buttonNext !== undefined) {
    this.buttonNext.addEventListener('click', this.stopTimer.bind(this));
  }
  this.container.addEventListener('mouseout', this.startTimer.bind(this));
};

Slider.prototype.next = function () {
  // двигает слайдер на 1 слайд вперед
  if (this.isRun && !this.fade) return false;
  this.isRun = true;

  this.containerSize -= this.childrenSize;
  this.count += 1;
  this.move();
};

Slider.prototype.prev = function () {
  // двигает слайдер на 1 слайд назад
  if (this.isRun && !this.fade) return false;
  this.isRun = true;

  this.stopTimer();
  this.containerSize += this.childrenSize;
  this.count -= 1;
  this.move();
};

Slider.prototype.stopTimer = function () {
  // останавливаем auto режим
  if (this.timerId !== undefined) {
    clearInterval(this.timerId);
  }
};

Slider.prototype.startTimer = function () {
  // автоматически переключает слайды вперед
  if (this.timerId !== undefined) return;
  this.timerId = setInterval(this.next.bind(this), this.time);
};

Slider.prototype.paginationMove = function (event) {
  // срабатывает при клике на dots получаем порядковые номер у dots и двигаем слайдер
  event.preventDefault();
  this.stopTimer();
  const target = event.target;
  this.isRun = true;

  this.count = parseInt(target.getAttribute('data-slide'));
  const childrenOffset = this.childrenSize * this.count;
  this.containerSize = -childrenOffset;

  this.move();
};

Slider.prototype.checkCount = function () {
  if (this.count > this.length - 2) {
    // функция может и не начаться так как собития вызваеться после завершение анимации
    this.container.addEventListener('transitionend', () => {
      if (this.count > this.length - 2) {
        this.invisibleMove(1, 1);
      }
    });
  } else if (this.count < 1) {
    this.container.addEventListener('transitionend', () => {
      if (this.count < 1) {
        this.invisibleMove(this.length - 2);
      }
    });
  } else {
    this.children[this.count].classList.add('active');
  }
};

Slider.prototype.elementActive = function () {
  // Удаляем клас active на slide
  for (let i = 0; i < this.length; i++) {
    this.children[i].classList.remove('active');
    this.children[i].addEventListener('transitionend', (event) => {
      event.stopPropagation();
    });
  }

  // удаляем класс active на dots
  if (this.dotsReady) {
    for (let i = 0; i < this.dots.length; i++) {
      this.dots[i].classList.remove('active');
    }

    // добавляем класс active у dots с поправкой на клонов
    if (this.count > this.dots.length) {
      this.dots[0].classList.add('active');
    } else if (this.count === 0) {
      this.dots[this.dots.length - 1].classList.add('active');
    } else {
      this.dots[this.count - 1].classList.add('active');
    }
  }
};

Slider.prototype.fadeActive = function () {
  // в режеме fade выбераем нужный слайд и dots и добавляем класс active
  if (this.count > this.children.length - 1) {
    this.count = 0;
  } else if (this.count < 0) {
    this.count = this.children.length - 1;
  }

  for (let i = 0; i < this.children.length; i++) {
    this.children[i].classList.remove('active');
    if (!this.dotsReady) continue;
    this.dots[i].classList.remove('active');
  }

  this.children[this.count].classList.add('active');
  if (this.dotsReady) this.dots[this.count].classList.add('active');
  this.adaptiveHeight();
};

Slider.prototype.move = function () {
  if (this.fade) {
    this.fadeActive();
    return;
  }

  this.elementActive();
  this.checkCount();
  this.addClassAnimate();
  this.transform();
};

Slider.prototype.transform = function () {
  // двигоаем слайдер по X или Y
  if (this.vertical) {
    this.container.style.transform = `translateY(${this.containerSize}px)`;
    // this.container.parentNode.style.maxHeight = `${this.children[this.count].clientHeight}px`;
  } else {
    this.container.style.transform = `translateX(${this.containerSize}px)`;
    this.adaptiveHeight();
  }
};

Slider.prototype.getChildrenSize = function () {
  // возращает высоту или ширину children элемента
  return (this.vertical) ? this.children[this.count].clientHeight : this.children[this.count].clientWidth;
};

Slider.prototype.animatedEnd = function () {
  // функци срабатует при завершение анимации transition на контейнере
  this.isRun = false;
  this.pauseScroll = false;
  this.callback();
};

Slider.prototype.invisibleMove = function (count, len = count) {
  // убираем анимацию и двигаем слайдер обратно когда он находиться в конце или в начале
  this.count = count;
  (!this.vertical) ? this.container.classList.remove('animate-X') : this.container.classList.remove('animate-Y');
  this.children[this.count].classList.add('active');

  this.containerSize = -this.childrenSize * len;
  this.transform();
  this.pauseScroll = false;
};

Slider.prototype.addClassAnimate = function () {
  if (this.vertical && !this.container.classList.contains('animate-Y')) {
    this.container.classList.add('animate-Y');
  }

  if (!this.vertical && !this.container.classList.contains('animate-X')) {
    this.container.classList.add('animate-X');
  }
};

Slider.prototype.adaptiveHeight = function () {
  this.container.style.height = `${this.children[this.count].clientHeight}px`;
};