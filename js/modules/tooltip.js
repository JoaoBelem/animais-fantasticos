/* eslint-disable class-methods-use-this */
/* eslint-disable no-inner-declarations */
export default class Tooltip {
  constructor(tooltipSelector){
    this.tooltips = document.querySelectorAll('[data-tooltip]');

    this.onMouseMove = {
      handleEvent(event) {
        this.tooltipBox.style.top = `${event.pageY + 20}px`;
        this.tooltipBox.style.left = `${event.pageX + 20}px`;
      },
    };
    this.onMouseLeave = {
      handleEvent() {
        this.tooltipBox.remove();
        // this.element.removeEventListener('mouseleave', this.onMouseLeave);
        // this.element.removeEventListener('mousemove', this.onMouseMove);
      },
    };
  }

  
  criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  onMouseOver(e) {
    const tooltipBox = this.criarTooltipBox(e);

    this.onMouseMove.tooltipBox = tooltipBox;
    e.addEventListener('mousemove', this.onMouseMove);

    this.onMouseLeave.tooltipBox = tooltipBox;
    this.onMouseLeave.element = e;
    e.addEventListener('mouseleave', this.onMouseLeave);
  }

  init() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', () => this.onMouseOver(item));
    });
  }
}
