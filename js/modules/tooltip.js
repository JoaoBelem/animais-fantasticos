export default class Tooltip {
  constructor(tooltipSelector){
    if (tooltipSelector === undefined)
      this.tooltips = document.querySelectorAll('[data-tooltip]');
    else
      this.tooltips = document.querySelectorAll(tooltipSelector);
    
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseMove(item) {
    this.tooltipBox.style.top = `${item.pageY + 20}px`;
    if ((item.pageX + this.tooltipBox.offsetWidth + 50) > window.innerWidth) {
      this.tooltipBox.style.left = `${item.pageX - this.tooltipBox.offsetWidth - 20}px`;
    } else{
      this.tooltipBox.style.left = `${item.pageX + 20}px`;
    }
  }

  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }
  
  criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  onMouseOver(event) {
    this.tooltipBox = this.criarTooltipBox(event.currentTarget);
    event.currentTarget.addEventListener('mousemove', this.onMouseMove);
    event.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  init() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', (e) => this.onMouseOver(e));
    });
    return this;
  }
}
