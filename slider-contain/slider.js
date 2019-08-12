class Slider {
    constructor(option) {
        this.parent = document.querySelector(option.selector);
        this.items = this.parent.children;
        this.index = 0;
        this.children_element_count = this.parent.childElementCount;
        this.button_next = document.querySelector(option.button_next);
        this.button_prev = document.querySelector(option.button_prev);
    }
    next() {
        if (this.index === this.children_element_count - 1) return;
        this.items[this.index].style.clip = 'rect(0 0 500px 0)';
        this.index += 1;
    }
    prev() {
        if (this.index === 0) return;
        this.index -= 1;
        this.items[this.index].style.clip = 'rect(0 900px 500px 0)';
    }
    init() {
        let couter = this.items.length - 1;
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].style.zIndex = couter + 1;
            couter -= 1;
        }
        this.button_next.addEventListener('click', this.next.bind(this));
        this.button_prev.addEventListener('click', this.prev.bind(this));
    }
}