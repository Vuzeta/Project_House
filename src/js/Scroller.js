class Scroller {
  constructor(rootElement) {
    this.rootElement = document.querySelector(rootElement);
    this.sections = [...this.rootElement.querySelectorAll('section')];
    const currectSectionIndex = this.sections.findIndex(el => this.isScrolledIntoView(el));
    this.currectSectionIndex = Math.max(currectSectionIndex, 0);
    this.isThrottled = false;
    this.isScrolledIntoView(this.sections[0]);
    this.drawNavigation();
    this.selectActiveNavItem();
  }

  isScrolledIntoView(el) {
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = Math.floor(rect.bottom);
    const isVissible = elemTop >= 0 && elemBottom <= window.innerHeight;

    return isVissible;
  }

  listenScroll = e => {
    if (this.isThrottled) return;
    this.isThrottled = true;

    setTimeout(() => (this.isThrottled = !this.isThrottled), 700);

    const direction = e.deltaY < 0 ? -1 : 1;
    this.scroll(direction);
  };

  scroll = direction => {
    if (direction === 1) {
      const isLastSection = this.currectSectionIndex === this.sections.length - 1;
      if (isLastSection) return;
    } else if (direction === -1) {
      const isFirstSection = this.currectSectionIndex === 0;
      if (isFirstSection) return;
    }
    this.currectSectionIndex = this.currectSectionIndex + direction;

    this.scrollToCurrentSection();
  };

  scrollToCurrentSection = () => {
    this.selectActiveNavItem();
    this.sections[this.currectSectionIndex].scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  drawNavigation = () => {
    this.navigationContainer = document.createElement('aside');
    this.navigationContainer.setAttribute('class', 'navigation');

    const list = document.createElement('ul');
    list.setAttribute('class', 'navigation__list');

    this.sections.forEach((section, index) => {
      const listItem = document.createElement('li');
      listItem.setAttribute('class', 'navigation__item');

      listItem.addEventListener('click', () => {
        this.currectSectionIndex = index;
        this.scrollToCurrentSection();
        this.selectActiveNavItem();
      });

      list.appendChild(listItem);
    });

    this.navigationContainer.appendChild(list);

    document.body.appendChild(this.navigationContainer);
  };

  selectActiveNavItem = () => {
    const navigationItems = this.navigationContainer.querySelectorAll('.navigation__item');
    navigationItems.forEach((item, index) => {
      if (index === this.currectSectionIndex) {
        item.classList.add('navigation__item--active');
      } else {
        item.classList.remove('navigation__item--active');
      }
    });
  };
}

export default Scroller;
