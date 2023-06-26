/*
É recomendado que o container do modal tenhas as seguintes propriedades
CSS: position absolute e z-index acima da página toda.
*/

export default class Modal {
  constructor(btnAbre, btnFecha, container, activeClass) {
    this.botaoAbrir = document.querySelector(btnAbre);
    this.botaoFechar = document.querySelector(btnFecha);
    this.containerModal = document.querySelector(container);

    if (activeClass === undefined) {
      this.activeClass = 'ativo';
    } else {
      this.activeClass = activeClass;
    }

    this.toggleModal = this.toggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  toggleModal(event) {
    if (event) {
      event.preventDefault();
    }
    this.containerModal.classList.toggle(this.activeClass);
  }

  cliqueForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal(event);
    }
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.botaoAbrir.addEventListener('click', this.toggleModal);
      this.botaoFechar.addEventListener('click', this.toggleModal);
      this.containerModal.addEventListener('mousedown', this.cliqueForaModal);
    }
    return this;
  }
}
