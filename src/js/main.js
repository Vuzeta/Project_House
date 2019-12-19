import '../scss/main.scss';

const swiper = new Swiper('.s1', {
  pagination: '.swiper-pagination',
  direction: 'vertical',
  slidesPerView: 1,
  paginationClickable: true,
  mousewheelControl: true,
  keyboardControl: true,
  touchControl: false,
  parallax: true,
  speed: 1400,
  followFinger: false,
});

const mySwiper2 = new Swiper('.s2', {
  direction: 'horizontal',
  pagination: '.swiper-pagination2',
  slidesPerView: 1,
  autoplay: 4000,
  autoplayDisableOnInteraction: false,
  speed: 1000,
  paginationClickable: true,
});
