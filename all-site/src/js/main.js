//= partials/preloader.js
//= partials/modal.js
//= partials/slider.js
//= partials/form-pleaceholder.js
//= ../libs/wow/wow.min.js

new WOW().init();

function Accariod(setting) {
  this.title = document.querySelectorAll(setting.link);

  for (let i = 0; i < this.title.length; i++) {
    this.title[i].addEventListener('click', function openAccardion() {
      let accariodSection = this.nextElementSibling;

      if (accariodSection.style.maxHeight) {
        accariodSection.style.maxHeight = null;
      } else {
        accariodSection.style.maxHeight = `${accariodSection.scrollHeight}px`;
      }
    });
  }
}

new Accariod({
  link: '.header__menu-link-drop',
});

