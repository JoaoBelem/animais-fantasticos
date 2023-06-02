export default class Accordion {
  constructor(item, start) {
    this.accordionList = document.querySelectorAll(item);
    this.activeClass = 'ativo';
    this.activeAccordion = this.activeAccordion.bind(this);
    if (start !== undefined) {
      this.accordionList[start].classList.add(this.activeClass);
      this.accordionList[start].nextElementSibling.classList.add(this.activeClass);
    }
  }

  addClass(item) {
    if (item !== undefined) {
      this.accordionList[item].classList.add(this.activeClass);
      this.accordionList[item].nextElementSibling.classList.add(
        this.activeClass
      );
    }
  }

  removeClass(item) {
    if(item !== undefined){
      this.accordionList[item].classList.remove(this.activeClass);
      this.accordionList[item].nextElementSibling.classList.remove(this.activeClass);
    }
  }

  activeAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  init() {
    if (this.accordionList.length) {
      this.accordionList.forEach((item) => {
        item.addEventListener('click', () => {
          this.activeAccordion(item);
        });
      });
    }
    return this;
  }
}
