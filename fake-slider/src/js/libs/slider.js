/* 
fake-slider.js
Author: Kuznetsov Nazar
email: nazar.kuznettsov@gmail.com 
github: https://github.com/nazar-kuznetsov 
*/
function Slider(settings) {
  this.container = document.querySelector(settings.el.container);
  this.dots = document.querySelectorAll(settings.el.dots);

  this.fade = settings.fade || false;
  this.count = (this.fade) ? 0 : 1;
  this.vertical = settings.vertical || false;

  // добавляем классы и клонов для слайдера в режиме transform
  if (!this.fade) {

    if (this.vertical) {
      this.container.parentNode.classList.add('fake-wrapper__vertical');
      this.container.classList.add('fake-slider__vertical');

    } else {
      this.container.parentNode.classList.add('fake-wrapper');
      this.container.classList.add('fake-slider');
    }

    const firstElement = this.container.children[0];
    const lastElement = this.container.children[this.container.children.length - 1];
    // клонируем и добавляем первый и последний слайд
    this.container.appendChild(this.cloneElement(firstElement));
    this.container.insertBefore(this.cloneElement(lastElement), this.container.firstChild);

    this.children = this.container.children;

    for (let i = 0; i < this.children.length; i++) {
      if (this.vertical) {
        this.children[i].classList.add('fake-item__vertical');
      } else {
        this.children[i].classList.add('fake-item');
      }
    }

    this.childrenSize = this.getChildrenSize.call(this);
    this.containerSize = -this.childrenSize;
    this.dots[this.count - 1].classList.add('active');
    this.transform();
  }

  // добавляем классы для элементов в режиме fade
  if (this.fade) {
    this.container.parentNode.classList.add('fake-wrapper__fade');
    this.container.classList.add('fake-slider__fade');
    this.children = this.container.children;

    this.children = this.container.children;
    this.childrenSize = this.getChildrenSize.call(this);
    this.containerSize = -this.childrenSize;
    this.dots[this.count].classList.add('active');
  }

  this.children[this.count].classList.add('active');
  this.length = this.children.length;

  this.timerId = undefined;
  this.time = settings.time || 4000;
  this.callback = settings.callback || function () {};

  // кординаты перемещение слайдов с помощью скролла и свайпа
  this.coordsMove = {
    start: undefined,
    move: undefined,
    end: undefined
  };


  this.pauseScroll = false;
  this.touchUser = false;
  this.speed = true;
  this.scrollStart = false;

  // Кнопки вперед и назад
  if (settings.el.next !== undefined && settings.el.prev !== undefined) {
    this.buttonNext = document.querySelector(settings.el.next);
    this.buttonPrev = document.querySelector(settings.el.prev);

    this.buttonNext.addEventListener('click', this.next.bind(this));
    this.buttonPrev.addEventListener('click', this.prev.bind(this));
  }

  // добавляем dots атрибут с номером слайдера и вешаем события клик
  this.dots.forEach((dots, index) => {
    if (this.fade) {
      dots.setAttribute('data-slide', index);
      this.children[index].classList.add('fake-item__fade');
    } else {
      dots.setAttribute('data-slide', index + 1);
    }
    dots.addEventListener('click', this.paginationMove.bind(this));
  });

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
  if (settings.speed) this.isRun = false;

  if (this.style === undefined) {
    window.addEventListener('resize', this.resizeResponsive.bind(this));
  }

}

// при двигаем слайд при изменение экрана
Slider.prototype.resizeResponsive = function () {
  if (this.fade) return;
  if (this.container.classList.contains('animate')) {
    this.container.classList.remove('animate');
  }

  this.childrenSize = this.getChildrenSize.call(this);
  const offset = this.childrenSize * this.count;
  this.containerSize = -offset;
  this.transform();
};

//клонируем element
Slider.prototype.cloneElement = function (element) {
  const clone = document.createElement(element.nodeName);
  clone.className = element.className;
  clone.innerHTML = element.innerHTML;
  return clone;
};

// получаем кординаты Y или X по клику мышки
Slider.prototype.mouseStart = function (event) {
  event.preventDefault();
  if (this.pauseScroll) return;

  const targetScrollY = event.clientY;
  const targetScrollX = event.clientX;
  this.scrollStart = true;
  this.getTargetPosition(targetScrollY, targetScrollX);

};

// получаем кординаты Y или X по касанию touch
Slider.prototype.touchStart = function (event) {
  event.preventDefault();
  if (this.pauseScroll) return;

  const targetTouchY = event.touches[0].pageY;
  const targetTouchX = event.touches[0].pageX;
  this.scrollStart = true;
  this.getTargetPosition(targetTouchY, targetTouchX);
};

Slider.prototype.getTargetPosition = function (targetY, targetX) {
  this.stopTimer();
  if (this.vertical) event.preventDefault();
  this.container.classList.remove('animate');
  this.coordsMove.start = this.setTargetPosition(targetY, targetX);
};

Slider.prototype.setTargetPosition = function (targetY, targetX) {
  return (this.vertical) ? targetY : targetX;
}

// двигаем слайдер при движение миши
Slider.prototype.mouseMove = function () {
  if (!this.scrollStart) return;
  if (this.pauseScroll) return;

  this.scrollStart = true;
  this.coordsMove.move = this.setTargetPosition(event.clientY, event.clientX);
  this.scrollMove();
};

// двигаем слайдер при свайпе
Slider.prototype.touchMove = function (event) {
  if (this.pauseScroll) return;
  if (!this.scrollStart) return;

  this.scrollStart = true;
  this.coordsMove.move = this.setTargetPosition(event.touches[0].pageY, event.touches[0].pageX);
  this.scrollMove();

};

Slider.prototype.scrollMove = function (event) {
  this.touchUser = true;
  this.coordsMove.end = this.count * this.childrenSize + (this.coordsMove.start - this.coordsMove.move);
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
  const absMove = Math.abs(this.count * this.childrenSize - this.coordsMove.end);

  if (absMove > this.childrenSize / 8 && this.touchUser) {
    if (this.coordsMove.end > this.count * this.childrenSize) {
      this.count += 1;
    } else if (this.coordsMove.end < this.count * this.childrenSize /*&& this.count > 0*/ ) {
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

// двигает слайдер на 1 слайд вперед
Slider.prototype.next = function () {
  if (this.speed) {
    if (this.isRun && !this.fade) return;
    this.isRun = true;
  }

  this.containerSize -= this.childrenSize;
  this.count += 1;
  this.move();
};

// двигает слайдер на 1 слайд назад
Slider.prototype.prev = function () {
  if (this.speed) {
    if (this.isRun && !this.fade) return;
    this.isRun = true;
  }

  this.stopTimer();
  this.containerSize += this.childrenSize;
  this.count -= 1;
  this.move();
};

// останавливаем auto режим
Slider.prototype.stopTimer = function () {
  if (this.timerId !== undefined) {
    clearInterval(this.timerId);
  }
};

// автоматически переключает слайды вперед
Slider.prototype.startTimer = function () {
  if (this.timerId !== undefined) return;
  this.timerId = setInterval(this.next.bind(this), this.time);
};

// срабатывает при клике на dots получаем индекс у dots и двигаем слайдер
Slider.prototype.paginationMove = function (event) {
  event.preventDefault();
  this.stopTimer();
  const target = event.target;

  this.count = parseInt(target.getAttribute('data-slide'));
  const childrenOffset = this.childrenSize * this.count;
  this.containerSize = -childrenOffset;

  this.move();
};

Slider.prototype.checkCount = function () {
  if (this.count > this.children.length - 2) {
    this.container.addEventListener('transitionend', (event) => {
      if (this.count > this.children.length - 2) {
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
  // удаляем класс active на dots
  for (let i = 0; i < this.dots.length; i++) {
    this.dots[i].classList.remove('active');
  }
  // Удаляем клас active на slide
  for (let i = 0; i < this.length; i++) {
    this.children[i].classList.remove('active');
    this.children[i].addEventListener('transitionend', (event) => {
      event.stopPropagation();
    });
  }

  // добавляем класс active у dots с поправкой на клонов
  if (this.count > this.dots.length) {
    this.dots[0].classList.add('active');
  } else if (this.count === 0) {
    this.dots[this.dots.length - 1].classList.add('active');
  } else {
    this.dots[this.count - 1].classList.add('active');
  }

};

// в режеме fade выбераем нужный слайд и dots и добавляем класс active
Slider.prototype.fadeActive = function () {

  if (this.count > this.children.length - 1) {
    this.count = 0;

  } else if (this.count < 0) {
    this.count = this.children.length - 1;
  }

  for (let i = 0; i < this.children.length; i++) {
    this.children[i].classList.remove('active');
    this.dots[i].classList.remove('active');
  }

  this.children[this.count].classList.add('active');
  this.dots[this.count].classList.add('active');
}

Slider.prototype.move = function (event) {
  if (this.fade) {
    this.fadeActive();
    return false;
  }

  this.elementActive();
  this.checkCount();

  if (!this.container.classList.contains('animate')) {
    this.container.classList.add('animate');
  }
  this.transform();
};

// двигоаем слайдер по X или Y
Slider.prototype.transform = function () {
  return (this.vertical) ?
    this.container.style.transform = `translateY(${  this.containerSize  }px)` :
    this.container.style.transform = `translateX(${  this.containerSize  }px)`;
};

// возращает высоту или ширину li
Slider.prototype.getChildrenSize = function () {
  return (this.vertical) ?
    this.children[this.count].clientHeight :
    this.children[this.count].clientWidth;
};

// функци срабатует при завершение анимации transition на контейнере
Slider.prototype.animatedEnd = function () {
  if (this.speed) this.isRun = false;
  this.callback();
  this.pauseScroll = false;
};

// двигаем слайдер когда он находиться на клоне
Slider.prototype.invisibleMove = function (count, len = count) {
  this.count = count;

  this.container.classList.remove('animate');
  this.children[this.count].classList.add('active');

  this.containerSize = -this.childrenSize * len;
  this.transform();
  this.pauseScroll = false;
};


/*        ОБНОВЛЕНИЕ
-------------------------------------------------------------------------------
1. добавил возможность перелистывание слайдера с помощью мышкой
2. Добавил бесконечную прокрутку
3. добавил css style файл
4. теперь класс active у первого слайда и dots добавляеться сам при иницализации слайдера
5. добавил li активному салйду класс active
6. Добавил название для слайдера теперь это fake slider:)
7. пофиксил баг который появляеться после touchstart кликаем быстро на сайлдер он перелистываеться
8. оптимизировал код
-----------------------------------------------------------------------------------------------

 
Подумать на счет мульти прокрутки тоесть 2 и больша слайда видно и прокручиваться 1
для этого нужно добавить больше клонов и 
написать функцию calc которая будет определять на каких слайдах делать переходы



        что нужно сделать
--------------------------------------------------
доделать правильную работу автотаймера
1. проверить название переменных
дописать коментарии
2 по групировать flag
2. добавить обекты и масивы для групировок
3. оптимизировать код
6. проверить clearTimer поставить его в конце там где transfrom
*/