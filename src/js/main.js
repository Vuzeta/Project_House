import Scroller from './Scroller';
import Swiper from './Swiper';
import '../scss/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  const scroller = new Scroller('#root');
  new Swiper();

  document.addEventListener('wheel', scroller.listenScroll);
  document.addEventListener('swipeUp', () => scroller.scroll(1));
  document.addEventListener('swipeDown', () => scroller.scroll(-1));
  document.addEventListener('keydown', e => {
    if (e.keyCode === 40) {
      scroller.scroll(1);
    } else if (e.keyCode === 38) {
      scroller.scroll(-1);
    } else {
      return;
    }
  });
});
