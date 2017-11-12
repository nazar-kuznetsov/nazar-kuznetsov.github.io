function stringsToArray (str) {
  let smallLetters = /^[a-z]+$/;
  let arr = str.split(' ');

  let newArr = arr.filter(function(item) {
    return item.match(smallLetters);
  });

  return newArr;
}

let letterString = 'accept acceptCharset accessKey action allowFullScreen allowTransparency alt async autoComplete autoFocus';

console.log(stringsToArray(letterString));

function Search(setting) {
  this.item = document.querySelectorAll(setting.li);
  this.input = document.querySelector(setting.input);

  this.input.addEventListener('keyup', this.getValue.bind(this));
}

Search.prototype.getValue = function (e) {
  let value = e.target.value;
  this.regExp = new RegExp(this.escapeRegExp(value), 'i');
  this.checkValue();
};

Search.prototype.checkValue = function () {
  for (let i = 0; i < this.item.length; i++) {
    if (this.regExp.test(this.item[i].textContent)) {
      this.show.call(this, this.item[i]);
    } else {
      this.hide.call(this, this.item[i]);
    }
  }
};

Search.prototype.show = function (li) {
  li.classList.remove('hidden');
  li.innerHTML = li.textContent.replace(this.regExp, function (word) {
    return `<span class="highlight">${word}</span>`;
  });
};

Search.prototype.hide = function (li) {
  li.classList.add('hidden');
};

Search.prototype.escapeRegExp = function (text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
};


new Search({
  input: '#search-user',
  li: '.user__item'
});




// let items = document.querySelectorAll('.user__item');
// document.querySelector('#search-user').addEventListener('keyup', serachUser);

// function serachUser() {
//   let val = this.value;
//   let myReg = new RegExp(escapeRegExp(val), 'i');

//   for (let i = 0; i < items.length; i++) {
//     if (myReg.test(items[i].textContent)) {
//       items[i].classList.remove('hidden');
//       items[i].innerHTML = items[i].textContent.replace(myReg, function(word) {
//         return `<span class='highlight'>${word}</span>`;
//       });
//     } else {
//       items[i].classList.add('hidden');
//     }
//   }
// }

// function escapeRegExp(text) {
//   return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
// }
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHN0cmluZ3NUb0FycmF5IChzdHIpIHtcclxuICBsZXQgc21hbGxMZXR0ZXJzID0gL15bYS16XSskLztcclxuICBsZXQgYXJyID0gc3RyLnNwbGl0KCcgJyk7XHJcblxyXG4gIGxldCBuZXdBcnIgPSBhcnIuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgIHJldHVybiBpdGVtLm1hdGNoKHNtYWxsTGV0dGVycyk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBuZXdBcnI7XHJcbn1cclxuXHJcbmxldCBsZXR0ZXJTdHJpbmcgPSAnYWNjZXB0IGFjY2VwdENoYXJzZXQgYWNjZXNzS2V5IGFjdGlvbiBhbGxvd0Z1bGxTY3JlZW4gYWxsb3dUcmFuc3BhcmVuY3kgYWx0IGFzeW5jIGF1dG9Db21wbGV0ZSBhdXRvRm9jdXMnO1xyXG5cclxuY29uc29sZS5sb2coc3RyaW5nc1RvQXJyYXkobGV0dGVyU3RyaW5nKSk7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2goc2V0dGluZykge1xyXG4gIHRoaXMuaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2V0dGluZy5saSk7XHJcbiAgdGhpcy5pbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2V0dGluZy5pbnB1dCk7XHJcblxyXG4gIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmdldFZhbHVlLmJpbmQodGhpcykpO1xyXG59XHJcblxyXG5TZWFyY2gucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gKGUpIHtcclxuICBsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICB0aGlzLnJlZ0V4cCA9IG5ldyBSZWdFeHAodGhpcy5lc2NhcGVSZWdFeHAodmFsdWUpLCAnaScpO1xyXG4gIHRoaXMuY2hlY2tWYWx1ZSgpO1xyXG59O1xyXG5cclxuU2VhcmNoLnByb3RvdHlwZS5jaGVja1ZhbHVlID0gZnVuY3Rpb24gKCkge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAodGhpcy5yZWdFeHAudGVzdCh0aGlzLml0ZW1baV0udGV4dENvbnRlbnQpKSB7XHJcbiAgICAgIHRoaXMuc2hvdy5jYWxsKHRoaXMsIHRoaXMuaXRlbVtpXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhpZGUuY2FsbCh0aGlzLCB0aGlzLml0ZW1baV0pO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcblNlYXJjaC5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uIChsaSkge1xyXG4gIGxpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gIGxpLmlubmVySFRNTCA9IGxpLnRleHRDb250ZW50LnJlcGxhY2UodGhpcy5yZWdFeHAsIGZ1bmN0aW9uICh3b3JkKSB7XHJcbiAgICByZXR1cm4gYDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0XCI+JHt3b3JkfTwvc3Bhbj5gO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuU2VhcmNoLnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24gKGxpKSB7XHJcbiAgbGkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbn07XHJcblxyXG5TZWFyY2gucHJvdG90eXBlLmVzY2FwZVJlZ0V4cCA9IGZ1bmN0aW9uICh0ZXh0KSB7XHJcbiAgcmV0dXJuIHRleHQucmVwbGFjZSgvWy1bXFxde30oKSorPy4sXFxcXF4kfCNcXHNdL2csICdcXFxcJCYnKTtcclxufTtcclxuXHJcblxyXG5uZXcgU2VhcmNoKHtcclxuICBpbnB1dDogJyNzZWFyY2gtdXNlcicsXHJcbiAgbGk6ICcudXNlcl9faXRlbSdcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG4vLyBsZXQgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudXNlcl9faXRlbScpO1xyXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLXVzZXInKS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHNlcmFjaFVzZXIpO1xyXG5cclxuLy8gZnVuY3Rpb24gc2VyYWNoVXNlcigpIHtcclxuLy8gICBsZXQgdmFsID0gdGhpcy52YWx1ZTtcclxuLy8gICBsZXQgbXlSZWcgPSBuZXcgUmVnRXhwKGVzY2FwZVJlZ0V4cCh2YWwpLCAnaScpO1xyXG5cclxuLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgICBpZiAobXlSZWcudGVzdChpdGVtc1tpXS50ZXh0Q29udGVudCkpIHtcclxuLy8gICAgICAgaXRlbXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbi8vICAgICAgIGl0ZW1zW2ldLmlubmVySFRNTCA9IGl0ZW1zW2ldLnRleHRDb250ZW50LnJlcGxhY2UobXlSZWcsIGZ1bmN0aW9uKHdvcmQpIHtcclxuLy8gICAgICAgICByZXR1cm4gYDxzcGFuIGNsYXNzPSdoaWdobGlnaHQnPiR7d29yZH08L3NwYW4+YDtcclxuLy8gICAgICAgfSk7XHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICBpdGVtc1tpXS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGVzY2FwZVJlZ0V4cCh0ZXh0KSB7XHJcbi8vICAgcmV0dXJuIHRleHQucmVwbGFjZSgvWy1bXFxde30oKSorPy4sXFxcXF4kfCNcXHNdL2csICdcXFxcJCYnKTtcclxuLy8gfSJdLCJmaWxlIjoibWFpbi5qcyJ9
