var li = document.querySelectorAll('.slider__item');
li[0].style.maxWidth = '100%';
var flag = false;

function move(count) {
  if (flag) return;
  flag = true;
  li[count].style.maxWidth = '100%';

  setTimeout(() => {
    for (let i = 0; i < li.length; i++) {
      if (i === count) continue;
      li[i].style.maxWidth = '0';
    }
    flag = false;
  }, 1000);
}

var controls = document.querySelectorAll('.slider-control ul li');

function slideIndex() {
  const index = +this.getAttribute('data-slide');
  for (let i = 0; i < controls.length; i++) {
    controls[i].classList.remove('active');
  }
  controls[index].classList.add('active');
  move(index);
}


controls.forEach(el => {
  el.addEventListener('click', slideIndex);
})