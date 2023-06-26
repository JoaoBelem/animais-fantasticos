import debounce from './debounce.js';

export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.9;

    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset,
      };
    });
  }

  checkDistance() {
    this.distance.forEach((item) => {
      if (window.scrollY > item.offset - this.windowMetade) {
        item.element.classList.add('ativo');
      } else {
        item.element.classList.remove('ativo');
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      window.addEventListener('scroll', this.checkDistance);
      this.checkDistance();
    }
    return this;
  }
}
