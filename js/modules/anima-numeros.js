/* eslint-disable no-param-reassign */
export default class AnimaNumeros {
  constructor() {
    this.numeros = document.querySelectorAll('[data-numero]');
    this.observerTarget = document.querySelector('.numeros');

    this.handleMutation = this.handleMutation.bind(this);
  }

  incrementarNumero(e) {
    const total = +e.innerText;
    const inscremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += inscremento;
      e.innerText = start;
      if (start > total) {
        e.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  animaNumeros() {
    this.numeros.forEach((numero) => this.incrementarNumero(numero));
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  addObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if(this.numeros && this.observerTarget){
      this.addObserver();
    }
  }
}
