var li = document.querySelectorAll('.slider__item');
li[0].style.maxWidth = '100%';
var count = 0;
var flag = false;

document.querySelector('#next').addEventListener('click', function () {
  if (flag) return;
  count += 1;
  flag = true;
  if (count === 2) {
    li[0].style.maxWidth = 0;

  }

  if (count === 3) {

    count = 0;
    for (let i = 0; i < li.length; i++) {
      li[i].style.zIndex = -1;
    }


    setTimeout(() => {
    for (let i = 1; i < li.length; i++) {
      li[i].style.maxWidth = 0;
    }
    }, 500);


  }



  li[count].style.maxWidth = '100%';

  li[count].style.zIndex = count;

  li[count].addEventListener("transitionend", function () {
    setTimeout(() => {
      flag = false;
    }, 300);
  });





});
