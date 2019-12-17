import '../scss/main.scss';

var swiper = new Swiper('.swiper-container', {
	pagination: '.swiper-pagination',
	direction: 'vertical',
	slidesPerView: 1,
	paginationClickable: true,
	mousewheelControl: true,
	keyboardControl: true,
	touchControl: false,
	parallax: true,
	speed: 600,
});
