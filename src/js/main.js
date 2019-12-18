import '../scss/main.scss';

var swiper = new Swiper('.s1', {
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

var mySwiper2 = new Swiper('.s2', {
	loop: true,
	autoplay: 4000,
	speed: 1000,
	direction: 'horizontal',
	pagination: '.swiper-pagination2',
	scrollbar: '.swiper-scrollbar2',
	paginationClickable: true,
});
