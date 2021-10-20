const slides = document.querySelectorAll('.slider__item');
const slider = [];
const prev = document.querySelector('.slider__prev');
const next = document.querySelector('.slider__next');

for (let i = 0; i < slides.length; i++) {
	dotsAdd();
}

function dotsAdd() {
	let dot = document.createElement('div');
	dot.classList.add('slider__dot');
	dot.classList.add('dot-active');
	document.querySelector('.slider__dots').appendChild(dot);
}

const dots = document.querySelectorAll('.slider__dot');

for (let i = 0; i < slides.length; i++) {
	slider[i] = slides[i].src;
	slides[i].remove();
}

let step = 0;
let offset = 0;
let count = 0;


function draw() {
	let img = document.createElement('img');
	img.src = slider[step];
	img.classList.add('slider__item');
	img.style.left = offset * 300 + 'px';
	document.querySelector('.slider__items').appendChild(img);
	if (step + 1 == slider.length) {
		step = 0;
	} else {
		step++;
	}
	offset = 1;
	console.log('step ' + step);
	console.log('offset ' + offset);
}

draw(); draw();

function left() {
	next.onclick = null;
	let slides2 = document.querySelectorAll('.slider__item');
	let offset2 = 0;
	for (let i = 0; i < slides2.length; i++) {
		slides2[i].style.left = offset2 * 300 - 300 + 'px';
		offset2++;
	}
	setTimeout(function () {
		slides2[0].remove();
		draw();
		next.onclick = left;
	}, 300);
}


// function draw2() {
// 	let img3 = document.createElement('img');
// 	img3.src = slider[step - 1];
// 	img3.classList.add('slider__item');
// 	img3.style.left = -offset * 300 + 'px';
// 	document.querySelector('.slider__items').appendChild(img3);
// 	if (step - 1 == -1) {
// 		step = slider.length - 1;
// 	} else {
// 		step--;
// 	}
// 	offset = 1;
// 	console.log('step ' + step);
// 	console.log('offset ' + offset);
// };
// draw2();

// function right() {
// 	prev.onclick = null;
// 	let slides2 = document.querySelectorAll('.slider__item');
// 	let offset2 = 0;
// 	for (let i = 0; i < slides2.length; i++) {
// 		slides2[0].style.left = 0;
// 		offset2++;
// 	}
// 	setTimeout(function () {
// 		slides2[0].remove();
// 		draw2();
// 		prev.onclick = right;
// 	}, 300);
// }


next.addEventListener('click', left);
next.addEventListener('click', () => {
	if (count + 1 > slides.length - 1) { count = -1 };
	count++;
	dotActive();
});


// prev.addEventListener('click', right);
prev.addEventListener('click', () => {
	if (count - 1 < 0) { count = 10 };
	count--;
	dotActive();
});

function dotActive() {
	for (let i = 0; i < dots.length; i++) {
		dots[i].classList.remove('dot-active');
		dots[count].classList.add('dot-active');
	}
};
dotActive();










