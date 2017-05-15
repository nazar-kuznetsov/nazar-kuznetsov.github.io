'use strict';

// document.addEventListener("DOMContentLoaded", namFunction); вызов функцию после загрузки DOM


// Открыть закрыть меню навигации в шапке
document.getElementById('openAndClose').addEventListener('click', myFunction)
function myFunction() {
    this.classList.toggle("change");
    var nav = document.getElementsByClassName('header__nav')[0];
    
    if (nav.style.maxHeight) {
        nav.style.maxHeight = null;
    } else {
        nav.style.maxHeight = nav.scrollHeight + 'px';
    }
}




