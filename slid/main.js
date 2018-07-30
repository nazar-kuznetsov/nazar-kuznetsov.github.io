const slider = document.querySelector('#slider');
const buttonNext = document.querySelector('#next');
const buttonPrev = document.querySelector('#prev');
const li = document.querySelectorAll('#slider li');
var clone = li[0];
var flag = false;
var last = slider.children[slider.children.length - 1];
const circleItem = document.querySelectorAll('#circle-list li');

slider.appendChild(clone.cloneNode());
slider.children[slider.childElementCount - 1].classList.remove('active');
slider.insertBefore(last.cloneNode(), slider.children[0]);
slider.children[0].style.width = '100%';

var count = 1;

buttonNext.addEventListener('click', function () {
  if (flag) return;

  if (count === slider.childElementCount - 2) {
    flag = true;

    slider.children[slider.childElementCount - 1].addEventListener('transitionend', function () {
      for (let i = 0; i < slider.childElementCount; i++) {
        if (i === 0) continue;
        slider.children[i].classList.remove('animation');
        slider.children[i].style.width = '0';
      }
      count = 1;
      slider.children[count].style.width = '100%';
      slider.children[1].classList.add('animation');
      flag = false;
    })

  }

  count += 1;
  slider.children[count].classList.add('animation');
  slider.children[count].style.width = '100%';
});


buttonPrev.addEventListener('click', function () {
  if (flag) return;

  if (count === 1) {
    flag = true;

      setTimeout(function(){
        for (let i = 0; i < slider.children.length; i++) {
        if (i === slider.children.length - 1) {
          slider.children[i].classList.add('animation');

        } else if (i === 0) continue;

         else {
        slider.children[i].classList.add('animation');
      slider.children[i].style.width = '100%';
     count = slider.children.length - 2;

        }

    }

    setTimeout(function(){

flag = false;
    }, 1000)


      }, 1200)


  }
slider.children[count].style.width = '0%';
  count -= 1;

});


circleItem.forEach(function(item) {
  item.addEventListener('click', function (e) {
    var number = +e.target.getAttribute('data-number');
    count = number;
    console.log(count);
    for (let i = 0; i < slider.children.length; i++) {
     if (i <= number)  slider.children[i].style.width = '100%';
    // else  if (i === number) {
    //     slider.children[i].classList.add('animation');
    //     slider.children[i].style.width = '100%';
    //   }


    }

});
});


