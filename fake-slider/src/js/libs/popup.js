/* Author: Kuznetsov Nazar, nazar.kuznettsov@gmail.com */
function Modal(settings) {
  this.btnClose = settings.el.close;
  this.eventOpen = settings.event || 'click';

  this.overlay = document.createElement('div');
  this.modal = document.createElement('div');

  this.modal.classList.add(settings.el.modal);
  this.overlay.classList.add(settings.el.overlay);

  document.body.appendChild(this.modal);
  document.body.appendChild(this.overlay);

  this.timerDelay = settings.time || 10000;
  this.timerId;
  
  if (settings.el.open !== undefined) {
    this.btnOpen = document.querySelectorAll(settings.el.open);
    for (let i = 0; i < this.btnOpen.length; i++) {
      this.btnOpen[i].addEventListener(this.eventOpen, this.addContent.bind(this));
    }
  }

  if (settings.auto) {
    this.autoContent = document.querySelector(settings.autoContent);
    this.timerId = setTimeout(() => {
      this.addContent(this.autoContent);
    }, this.timerDelay);
  }

  this.overlay.addEventListener('click', this.close.bind(this));

  this.callback = settings.callback || function (){};
}

Modal.prototype.addContent = function (timerContent) {
  let modalContent;
  if (event !== undefined) {
    if (this.timerId !== undefined) clearInterval(this.timerId);
    let target = event.target.getAttribute('data-modal');
    modalContent = document.querySelector(target);
  } else {
    modalContent = timerContent;
  }

  this.modal.innerHTML = modalContent.innerHTML;
  this.open();
}

Modal.prototype.open = function () {
  this.overlay.classList.add('show');
  this.modal.classList.add('show');
  this.modal.querySelector(this.btnClose).addEventListener('click', this.close.bind(this));
  this.callback();
}

Modal.prototype.close = function () {
  this.overlay.classList.remove('show');
  this.modal.classList.remove('show');
}


new Modal({
  el: {
    overlay: 'overlay', // клас который будет отвечат за подложку окна при появление добавляет класс show
    modal: 'modal', // класс стилей для модального окна при появление добавляет класс show
    open: '.link', // класс кнопки
    close: '.close', // клас кнопки закрыть закрыть 
  },
  callback: function () {
  	console.log('Hello!');
  },
  //event: 'click', 
  //auto: false,
  //time: 3000,
  //autoContent: '#work-4'
})

/* Пример
<a class="link" href="#" data-modal="#work-1">Link-1</a> Кнопка открыть
модальное окно нуно сначала скрыть класом hide или другим при появление у модального окна и подложки лдобавляеться клас show его и стилизуем
<div id="work-1" class="hide"> 
  Модальное окно 1
  <span class="close">Закрыть</span>
</div>

*/
