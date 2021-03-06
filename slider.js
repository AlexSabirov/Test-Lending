// "use strict";

const track = document.querySelector('.slider__track');
const next = document.querySelector('.slider__next');
const prev = document.querySelector('.slider__prev');
const dots = document.querySelectorAll('.slider__dot');

let position = -300;
let timer;
let currentDot;
let slideCount;
let dot = Array.from(dots);

track.style.transform = `translateX(${position}px)`;

next.addEventListener('click', () => {
	timer = setInterval(slideNext, 4);
	console.log(`currentDot: ${currentDot}`);
	console.log(`position: ${position}`);
	console.log(`slideCount: ${slideCount}`);
});

prev.addEventListener('click', () => {
	timer = setInterval(slidePrev, 4);
	console.log(`currentDot: ${currentDot}`);
	console.log(`position: ${position}`);
	console.log(`slideCount: ${slideCount}`);
});

function slideNext() {
	next.disabled = true;
	position -= 5;
	slideCount = currentDot;
	track.style.transform = `translateX(${position}px)`;
	if (position % 300 === 0) {
		clearInterval(timer);
		dotsShifting();
		next.disabled = false;
	}
	if (position < -2700) {
		position = 0;
	}
};

function slidePrev() {
	prev.disabled = true;
	position += 5;
	slideCount = currentDot;
	track.style.transform = `translateX(${position}px)`;
	if (position % 300 === 0) {
		clearInterval(timer);
		dotsShifting();
		prev.disabled = false;
	}
	if (position > -300) {
		position = -3000;
	}
};

function dotsShifting() {
	currentDot = Math.abs(position / 300);
	slideCount = Math.abs(position / 300);
	dots.forEach((item, i) => {
		if ((i + 1) === currentDot) {
			item.classList.add('dot-active');
		} else {
			item.classList.remove('dot-active');
		}
	});
	return currentDot;
};

dotsShifting();

dot.forEach((item, i) => {
	item.addEventListener('click', () => {
		currentDot = i + 1;

		if (slideCount < currentDot) {
			timer = setInterval(() => {
				for (let i = 0; i < dot.length; i++) {
					dot[i].disabled = true;
				}
				position -= 10;
				slideCount = currentDot;
				track.style.transform = `translateX(${position}px)`;
				if (position === -300 * currentDot) {
					clearInterval(timer);
					dotsShifting();
					for (let i = 0; i < dot.length; i++) {
						dot[i].disabled = false;
					}
				}
				if (position < -2700) {
					position = 0;
				}
			}, 4);


		} else if (slideCount > currentDot) {

			timer = setInterval(() => {
				for (let i = 0; i < dot.length; i++) {
					dot[i].disabled = true;
				}
				position += 10;
				slideCount = currentDot;
				track.style.transform = `translateX(${position}px)`;
				if (position === -300 * currentDot) {
					clearInterval(timer);
					dotsShifting();
					for (let i = 0; i < dot.length; i++) {
						dot[i].disabled = false;
					}
				}
				if (position > -300) {
					position = -3000;
				}

			}, 4);

		};

		slideCount = currentDot;

		dots.forEach((item, i) => {
			if ((i + 1) === currentDot) {
				item.classList.add('dot-active');
			} else {
				item.classList.remove('dot-active');
			}
		});
		console.log(`currentDot: ${currentDot}`);
		console.log(`position: ${position}`);
	})
	return currentDot;
});
console.log(dot);