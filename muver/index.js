const parent = document.querySelector('.handle');
const circle = document.querySelector('#js-circle');
const jsLine = document.querySelector('#js-line-active');
const line = document.querySelector('.line');
const jsTitle1 = document.querySelector('#js-title1');
const jsTitle2 = document.querySelector('#js-title2');
const lineWidth = line.clientWidth;
const parentWidth = parent.clientWidth;
const sectionSVG = document.querySelector('.section-svg');
const firstSection = document.querySelector('.first-section');
const jsBack = document.querySelector('#js-back');

let newStr1 = jsTitle1.textContent;
let newStr2 = jsTitle1.textContent;


jsBack.addEventListener('click', function () {
  firstSection.classList.add('show');
  sectionSVG.classList.remove('show');
  circle.style.left = 0;
  jsLine.style.width = 0;
  jsTitle1.innerHTML = newStr1;
})

const titles = {
  length1: Math.round(parentWidth / jsTitle1.textContent.length),
  length2: Math.round(parentWidth / jsTitle2.textContent.length)
}



const styling = (position) => {
  let regExp = new RegExp(newStr1.substr(0, position), 'i');
  jsTitle1.innerHTML = jsTitle1.textContent.replace(regExp, (text) => `<span class="bold">${text}</span>`);
}

let timerID;


const end = () => {
  circle.style.left = `532px`;
  jsLine.style.width = `532px`;

  clearInterval(timerID);

  timerID = setTimeout(() => {
    firstSection.classList.add('hide');
    sectionSVG.classList.add('show');
    firstSection.classList.remove('show');
    parent.classList.remove('active');
  }, 500);

}


document.querySelector('.circle__end').addEventListener('click', function () {
  end();
  styling(9);
  parent.classList.add('active');
})

line.addEventListener('click', move);
let counter = 0;
let index = 0;

function move(event) {
  const left = event.clientX - 401;
  counter = left;

  if (counter < 18) {
    jsTitle1.innerHTML = newStr1;
    parent.classList.remove('active');
  }
  if (counter > titles.length1) {
    styling(1);
    parent.classList.add('active');
  }
  if (counter > titles.length1 * 2) styling(2);
  if (counter > titles.length1 * 3) styling(3);
  if (counter > titles.length1 * 4) styling(4);
  if (counter > titles.length1 * 5) styling(5);
  if (counter > titles.length1 * 6) styling(6);
  if (counter > titles.length1 * 7) styling(7);
  if (counter > titles.length1 * 8) styling(8);
  if (counter >= titles.length1 * 9 - 50) {
    styling(9);
    window.removeEventListener('mousemove', move);
  }


  if (left > parentWidth - 50) {
    end();
    return false;
  }

  if (left < 0) return false;
  circle.style.left = `${event.clientX - 401}px`;
  jsLine.style.width = `${event.clientX - 401}px`;

}
circle.addEventListener('mousedown', function () {
  window.addEventListener('mousemove', move);
})



window.addEventListener('mouseup', function () {
  window.removeEventListener('mousemove', move);
})