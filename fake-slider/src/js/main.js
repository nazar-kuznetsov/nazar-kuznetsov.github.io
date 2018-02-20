//= libs/slider.js

document.addEventListener("DOMContentLoaded", function () {

	// let total = document.querySelector('.total span');
	// let images = document.querySelectorAll('.img-cart');
	// let imgCart = document.querySelector('#select-image');

	// document.querySelectorAll('header select').forEach((select) => {
	// 	select.addEventListener('change', calcPrice);
	// });

	// function calcPrice(event) {
	// 	let pcs = +document.querySelector('#price-cart').value;
	// 	let style = +document.querySelector('#style-cart').value;

	// 	images.forEach((img) => {
	// 		img.classList.remove('active');
	// 	});

	// 	let cart = selectImages.call(this);

	// 	document.querySelector(cart.img).classList.add('active');
	// 	total.textContent = ((pcs + style) * cart.procent).toFixed(2);

	// }

	// function selectImages() {
	// 	// получаем активный option из select с картинками
	// 	let optionSelect = undefined;
	// 	let optionImag = imgCart.options;

	// 	if (this.id === imgCart.id) {
	// 		optionSelect = optionImag[this.selectedIndex];
	// 	} else {
	// 		optionSelect = optionImag[optionImag.selectedIndex];
	// 	}

	// 	return {
	// 		img: optionSelect.getAttribute('data-img'),
	// 		procent: +optionSelect.getAttribute('data-procent')
	// 	};
	// }

	// горизонтальный
	new Slider({
		el: {
			container: '#slider-1',
			next: '#next-1',
			prev: '#prev-1',
			dots: '.dots-1'
		}
	})

// вертикальный
	new Slider({
		el: {
			container: '#slider-vertical',
			next: '#next-3',
			prev: '#prev-3',
			dots: '.dots-3'
		},
		vertical: true

	})


		// fade
		new Slider({
			el: {
				container: '#fade-list',
				next: '#next-2',
				prev: '#prev-2',
				dots: '.dots-2'
			},
			fade: true
	
		})


/*

		new Slider({
			el: {
				container: '#slider-y',
				next: '#next2',
				prev: '#prev2',
				dots: '.dots-3',
			},
			vertical: true,
			controlSpeed: true,
			mouseScroll: true

		})

		new Slider({
			el: {
				container: '#fade',
				next: '#next-fade',
				prev: '#prev-fade',
				dots: '.dots-2',
			},
			fade: true,
			controlSpeed: true,
			mouseScroll: true

		})
*/


});

// function applyVisa(succes, error) {
// 	console.log('пожалуйста подождите...');
// 	setTimeout(() => {
// 		let visa = {
// 			name: 'Nazar',
// 			lastName: 'Kuznetsov'
// 		};

// 		return Math.random() > .5? succes(visa): error();
// 	}, 2000);
// }

// applyVisa(function (v) {
// 	console.log('Виза получина на имя ' + v.name + ' ' + v.lastName);
// }, function () {
// 	console.error('Отказано');
// });