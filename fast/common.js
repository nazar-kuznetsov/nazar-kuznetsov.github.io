var li = document.querySelectorAll('.slider__item');
var count = 0;

document.querySelector('#next').addEventListener('click', function () {
  if (count === 3) {
    count = 0;
    li.forEach(function(element, i) {

      element.style.zIndex = i;
      element.style.maxWidth = 0;
    })

  }


  li[count].style.maxWidth = '400px';
  
  li[count].style.zIndex = count;
  

  count += 1;
  
 // li[count].style.maxWidth = '100%';
});

document.querySelector('#prev').addEventListener('click', function () {
  
  li[count -= 1].style.maxWidth = '0';

});