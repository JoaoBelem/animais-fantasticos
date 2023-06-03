// !! Elemento pai de "tabItem" deve ter o atributo "position" do CSS explicito. Para que este plugin funcione da forma devida.

export default class TabNav {
  constructor(menu, display, initial, activeClassName) {
    this.tabItem = document.querySelectorAll(menu)
    this.tabDisplay = document.querySelectorAll(display);
    this.activeClass = activeClassName;
    this.initial = initial;

    if (activeClassName === undefined) {
      this.activeClass = 'ativo';
    }
    if (initial === undefined) {
      this.initial = 0;
    }
  }

  // Adiciona a classe de ativação
  activeTab(index) {
    this.tabDisplay.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    const direcao = this.tabDisplay[index].dataset.anime;
    this.tabDisplay[index].classList.add(this.activeClass, direcao);
  }

  // Adiciona classe ativa + muda o menu
  goto(index) {
    if (index <= this.tabItem.length - 1 && index >= 0) {
      this.activeTab(index);
      this.tabItem[0].parentElement.scroll({
        top: this.tabItem[index].offsetTop,
        behavior: 'smooth'
      });
    }
  }

  init(){
    if (this.tabItem.length && this.tabDisplay.length) {
      this.tabItem.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
          this.activeTab(index);
        });
      });
      this.goto(this.initial);
    }
  }
}
