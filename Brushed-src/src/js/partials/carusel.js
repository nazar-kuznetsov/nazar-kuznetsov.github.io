const carusel = new Slider({
  next: '[data-carusel=next]',
  prev: '[data-carusel=prev]',
  item: '#carusel .carusel__item',
  auto: false,
  slideTimer: 1000
});



function Slider(settings) {
  const that = this;
   let count = 0;

      
  that.item = document.querySelectorAll(settings.item);
  that.prevBtn = document.querySelector(settings.prev);
  that.nextBtn = document.querySelector(settings.next);

  that.numberPage = document.querySelectorAll(settings.numberPage);


  that.next = function () {
    that.item[count].classList.add('active');
    count++;

    if (count >= that.item.length) {

      for (let i = 0; i < that.item.length; i++) {
        that.item[i].classList.remove('active');
      }

      count = 0;
    }
  };



  that.prev = function () {

    if (count <= 0) {

      for (let i = 0; i < that.item.length; i++) {
        that.item[i].classList.add('active');
      }

      count = that.item.length;
    }

    count--;
    that.item[count].classList.remove('active');
  };

  that.nextBtn.addEventListener('click', that.next);
  that.prevBtn.addEventListener('click', that.prev);

  // Автоматически переключает если стоит значения true
  if (settings.auto) {
    that.timerId = setInterval(that.next, settings.slideTimer);
  }


}
