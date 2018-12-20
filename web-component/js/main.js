class Slider extends HTMLElement {
  constructor() {
    super();
    this.product = this.children;

    this.buttonPrev = document.createElement('button');
    this.buttonNext = document.createElement('button');

    this.index = 0;

    this.buttonPrev.innerText = 'назад';
    this.buttonNext.innerText = 'вперед';

    this.appendChild(this.buttonPrev);
    this.appendChild(this.buttonNext);

    this.disableButton();
    this.hidden();
    this.show();
  }

  get firstPage() {
    return this.index === 0;
  }



  get lastPage() {
    return this.index === this.children.length - 3;
  }

  connectedCallback() {
    this.buttonNext.addEventListener('click', this.next.bind(this));
    this.buttonPrev.addEventListener('click', this.prev.bind(this));
  }

  hidden() {
    for (let i = 0; i < this.children.length - 2; i++) {
      this.children[i].shadowRoot.querySelector('div').style.display = 'none';
    }
  }

  next() {
    this.index += 1;
    this.move();
  }

  show() {
    this.children[this.index].shadowRoot.querySelector('div').style.display = 'block';
  }

  prev() {
    this.index -= 1;
    this.move();
  }

  disableButton() {
    this.buttonPrev.disabled = this.firstPage;
    this.buttonNext.disabled = this.lastPage;
  }

  move() {
    this.disableButton();
    this.hidden();
    this.show();
  }

}



class Product extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.build();
    this.style();

    this.shadowRoot.querySelector('button').addEventListener('click', this.handleClick);
  }

  build() {
    const content = document.createElement('div');
    const img = document.createElement('img');
    this.button = document.createElement('button');
    const description = document.createElement('p');
    const price = document.createElement('span');

    img.src = this.getAttribute('src');
    this.button.innerText = 'Купить';
    description.innerText = this.textContent;
    price.innerText = `${this.getAttribute('price')} грн`;

    content.appendChild(description);
    content.appendChild(img);
    content.appendChild(price);
    content.appendChild(this.button);

    this.shadowRoot.appendChild(content);
  }

  style() {
    const style = `
    <style>
      img {
      display: block;
      width: 400px;
      height: 280px;
      margin-bottom: 15px;
    }

    div {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    button {
      background-color: #00A046;
      color: #fff;
      font-weight: bold;
      font-size: 20px;
      border: none;
      padding: 10px 15px;
      border-radius: 3px;
      cursor: pointer;
    }

    button:hover {
      background-color: #00BC52;
    }

    span {
      background-color: #FFCE3C;
      padding: 5px 10px;
      font-size: 25px;
      margin-right: 10px;
    }

    p {
      font-size: 20px;
    }
      </style>
    `;
    this.shadowRoot.innerHTML += style;
  }

  handleClick({ target }) {
    const name = target.parentNode.querySelector('p').innerText;
    const price = target.parentNode.querySelector('span').innerText;
    alert(`Поздравляю вы купили ${name} цена: ${price}`);
  }

}

customElements.define('my-product', Product);
customElements.define('my-slider', Slider);