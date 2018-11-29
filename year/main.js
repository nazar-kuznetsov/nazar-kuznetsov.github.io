const aaSnowConfig = { snowflakes: '200' };

const colors = [
  '#FFDD00',
  '#25B898',
  '#fff',
  '#1AE13C',
  '#C76414',
  '#10D1A7',
  '#F70C74'
];

const btn = document.querySelector('#btn');

const three = document.querySelector('.st11');

const star = document.querySelector('.st1');
const light_1 = document.querySelector('.st15');
const light_2 = document.querySelector('.st16');
const light_3 = document.querySelector('.st17');
const light_4 = document.querySelector('.st18');
const light_5 = document.querySelector('.st19');
const light_6 = document.querySelector('.st20');
const light_7 = document.querySelector('.st21');
const light_8 = document.querySelector('.st22');
const light_9 = document.querySelector('.st23');
const light_10 = document.querySelectorAll('.st24');
const light_11 = document.querySelector('.st25');
const light_12 = document.querySelector('.st26');
const light_13 = document.querySelector('.st27');
const light_14 = document.querySelector('.st28');
const light_15 = document.querySelector('.st29');
const light_16 = document.querySelector('.st30');
const light_17 = document.querySelector('.st31');

let timerIndex;
btn.addEventListener('click', function () {
  if (timerIndex === undefined) {
    btn.classList.add('active');
    btn.textContent = 'Выключить';
    timerIndex = setInterval(() => {
      animate();
    }, 500);
  } else {
    clearInterval(timerIndex);
    btn.textContent = 'Раз Два Три Ёлочка гори!';
    btn.classList.remove('active');

    timerIndex = undefined;
  }
})


const threeColors = [
  '#2E942E',
  '#225912',
  '#307D19',
  '#112C09',
  '#195611'
];


const randomInteger = (arr = colors) => Math.round(0 + Math.random() * (arr.length - 1 - 0));

const animate = () => {
  light_1.style.fill = colors[randomInteger()];
  light_2.style.fill = colors[randomInteger()];
  light_3.style.fill = colors[randomInteger()];
  light_4.style.fill = colors[randomInteger()];
  light_5.style.fill = colors[randomInteger()];
  light_6.style.fill = colors[randomInteger()];
  light_7.style.fill = colors[randomInteger()];
  light_8.style.fill = colors[randomInteger()];
  light_9.style.fill = colors[randomInteger()];

  light_10.forEach(item => {
    item.style.fill = colors[randomInteger()];
  });

  light_11.style.fill = colors[randomInteger()];
  light_12.style.fill = colors[randomInteger()];
  light_13.style.fill = colors[randomInteger()];
  light_14.style.fill = colors[randomInteger()];
  light_15.style.fill = colors[randomInteger()];
  light_16.style.fill = colors[randomInteger()];
  light_17.style.fill = colors[randomInteger()];
  star.style.fill = colors[randomInteger()];
  three.style.fill = threeColors[randomInteger(threeColors)];
};