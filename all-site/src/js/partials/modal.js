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
  new Accariod({
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

// Модальное окна в  Services
new Modal({
  open: '.advantages__info-lear-more[data-modal]',
  close: '.close-modal',
  //overlayClass: 'overlay',
  popupClass: 'modal',
  addClass: 'show',
  eventOpen: 'click',
  eventClose: 'click',
});

// Модальное окна Progress
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
  close: '.header__menu-close',
  //overlayClass: 'overlay',
  popupClass: 'nav__responsive',
  addClass: 'show',
  eventOpen: 'click',
  eventClose: 'click',
});

