'use strict';
document.getElementById('menu').addEventListener('click', ready, false);
document.getElementById('close').addEventListener('click', ready, false);
document.getElementById('google').addEventListener('click', openGoogle, false);
document.getElementById('toggle').addEventListener('click', navToggle, false);

function ready () {
  var hiddenMenu = document.getElementById('hidden-menu');
  hiddenNav(hiddenMenu);
}

function openGoogle () {
  var googleBox = document.getElementById('googleBox');
  heightFunction(googleBox);
 
}


function hiddenNav(div) {
  if (div.style.maxWidth) {
    div.style.maxWidth = null;
  }
  else {
    div.style.maxWidth = div.scrollWidth + 'px';
  }
  
}

function heightFunction (div) {
  if (div.style.maxHeight) {
    div.style.maxHeight = null;
  }
  else {
    div.style.maxHeight = div.scrollHeight + 'px';
  }
}




function navToggle () {
  this.classList.toggle("change");
  var nav = document.getElementsByClassName('nav-container')[0];
  heightFunction(nav);
}




var myTimer = setInterval(progressBar, 20);
var countTImer = 0;


function progressBar () {
  var html = document.getElementsByClassName('html')[0];
  if (countTImer > 90) {
      clearInterval(myTimer);
  }else {
      countTImer++;
      html.style.width = countTImer + "%";
  }
  
}


