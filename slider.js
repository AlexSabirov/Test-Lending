// "use strict";

const track = document.querySelector('.slider__track');
const next = document.querySelector('.slider__next');
const prev = document.querySelector('.slider__prev');
const dots = document.querySelectorAll('.slider__dot');


let position = -300;
let timer;
let currentDot;
let dot = Array.from(dots);

track.style.transform = `translateX(${position}px)`;

next.addEventListener('click', () => {
	timer = setInterval(slideNext, 4);
	console.log(`currentDot: ${currentDot}`);
	console.log(`position: ${position}`);
});

prev.addEventListener('click', () => {
	timer = setInterval(slidePrev, 4);
	console.log(`currentDot: ${currentDot}`);
	console.log(`position: ${position}`);
});

function slideNext() {
	next.disabled = true;
	position -= 5;
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
		position = -300 * currentDot;
		track.style.transform = `translateX(${position}px)`;

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