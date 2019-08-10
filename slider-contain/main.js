// иницализация слайдер 1
const about_slider = new Slider({
    selector: '#slider',
    button_next: '#button-next',
    button_prev: '#button-prev'
});

about_slider.init();

// иницализация слайдер 2
const products_slider = new Slider({
    selector: '#slider-2',
    button_next: '#button-next-2',
    button_prev: '#button-prev-2'
});

products_slider.init();