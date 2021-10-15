/* Cookie */

let cookie = document.querySelector('.cookie');
let cookieActive = function () { cookie.classList.add('active-cookie') }
let cookieClose = document.querySelector('.cookie__button');

setTimeout(cookieActive, 1500);

cookieClose.addEventListener('click', () => cookie.classList.remove('active-cookie'))

