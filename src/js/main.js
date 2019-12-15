import Scroller from './Scroller';
import '../scss/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  const scroller = new Scroller('#root');

  document.addEventListener('wheel', scroller.listenScroll);
});
