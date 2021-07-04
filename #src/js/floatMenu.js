let headerBurger = document.querySelector('.header__burger');
let headerTopRight = document.querySelector('.header__top-right');
let body = document.querySelector("body");
let menuLink = document.getElementsByClassName('menu__item-link');
let menuLogo = document.querySelector('.logo__link');

headerBurger.addEventListener("click", toggleClass);
menuLogo.addEventListener("click", removeClass);

for (let i = 0; i < menuLink.length; i++) {
	menuLink[i].addEventListener("click", removeClass);
}

function toggleClass() {
	headerBurger.classList.toggle('active');
	headerTopRight.classList.toggle('active');
	body.classList.toggle("lock");
}

function removeClass() {
	headerBurger.classList.remove('active');
	headerTopRight.classList.remove('active');
	body.classList.remove("lock");
}

