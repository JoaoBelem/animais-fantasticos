export default class ScrollAnima {
  constructor(sections){
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;

    this.animaScroll = this.animaScroll.bind(this);
    this.checkDistance = this.checkDistance.bind(this);
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset
      }
    });
  }

  checkDistance() {
    console.log(window.scrollY);
    this.distance.forEach((item) => {
      console.log(item);
      if(window.scrollY > item.offset){
        item.element.classList.add('ativo');
      } else {
        item.element.classList.remove('ativo');
      }
    });
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - this.windowMetade) < 0;
      if (isSectionVisible) section.classList.add('ativo');
      else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  init() {
    this.sections.forEach((i) => {
      i.classList.add('ativo');
      console.log(i.offsetTop);
    })
    // if (this.sections.length) {
    //   // this.animaScroll();
    //   setTimeout(() => {
    //     this.getDistance();
    //     window.addEventListener('scroll', this.checkDistance)
    //   }, 1000)  
    // }
  }
}
