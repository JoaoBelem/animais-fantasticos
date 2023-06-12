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
      // console.log(i.offsetTop);
    });

    const contato = document.querySelector('.contato')

    console.log('note que os valores bem no inicio ao carregar a página estão errados, mas depois de 1 segundo é o valor real.');

    console.log(`offsetTop de contato é ${contato.offsetTop}`);
    console.log(`offsetHeight de body é ${document.body.offsetHeight}`);
    setTimeout(() => {
      console.log(`offsetTop de contato depois de 1 segundo é ${contato.offsetTop}`);
      console.log(`offsetHeight de body depois de 1 segundo é ${document.body.offsetHeight}`);
    }, 1000);


    // if (this.sections.length) {
    //   // this.animaScroll();
    //   setTimeout(() => {
    //     this.getDistance();
    //     window.addEventListener('scroll', this.checkDistance)
    //   }, 1000)  
    // }
  }
}
