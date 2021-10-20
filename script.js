/* Cookie */

const cookie = document.querySelector('.cookie');
const cookieActive = function () { cookie.classList.add('active-cookie') }
const cookieClose = document.querySelector('.cookie__button');

setTimeout(cookieActive, 1500);

cookieClose.addEventListener('click', () => cookie.classList.remove('active-cookie'))

/* Image Move */

const image = document.querySelector('.mission__image');

function offset(el) {
	const rect = el.getBoundingClientRect(),
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return { top: rect.top + scrollTop }
}

window.addEventListener('scroll', animImageOn);

function animImageOn() {
	const imageHeight = image.offsetHeight;
	const imageOffset = offset(image).top;
	const animStart = 4;

	function imageTranslate() {
		image.classList.remove('image-translate');
	};

	let animImagePoint = window.innerHeight - imageHeight / animStart;
	if (imageHeight > window.innerHeight) {
		animImagePoint = window.innerHeight - window.innerHeight / animStart;
	}

	if ((pageYOffset > imageOffset - animImagePoint) && pageYOffset < (imageOffset + animImagePoint)) {
		imageTranslate();
		setTimeout(() => { image.classList.remove('image-rotate') }, 3000);
	}
}

