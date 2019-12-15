class Swiper {
  constructor() {
    this.initialY = null;
    this.initialX = null;

    document.addEventListener('touchstart', this.startTouch);
    document.addEventListener('touchmove', this.moveTouch);

    this.events = {
      swipeUp: new Event('swipeUp'),
      swipeDown: new Event('swipeDown'),
    };
  }

  startTouch = e => {
    this.initialX = e.touches[0].clientX;
    this.initialY = e.touches[0].clientY;
  };

  moveTouch = e => {
    if (!this.initialY || !this.initialX) return;

    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;

    const diffX = this.initialX - currentX;
    const diffY = this.initialY - currentY;

    if (Math.abs(diffX) < Math.abs(diffY)) {
      if (diffY > 0) {
        document.dispatchEvent(this.events.swipeUp);
      } else {
        document.dispatchEvent(this.events.swipeDown);
      }
    }

    this.initialY = null;
    this.initialX = null;
  };
}

export default Swiper;
