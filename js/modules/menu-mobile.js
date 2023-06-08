/*
O menu deve ser selecionado pela classe.
O botão do menu mobile deve ter o atributo [data-menu="button"].
A lista de itens deve ter o atributo [data-menu="list"].

Caso haja uma lista de itens(dropdown menu), o item pai deve ter o atributo [data-dropdown].
e a lista de itens(dropdown menu), a mesma deve ter o atributo [data-menu="list"].
*/

import outsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(nomeMenu){
    if (nomeMenu === undefined) {
      this.menu = document.querySelector('nav.menu');
    } else {
      this.menu = document.querySelector(nomeMenu);
    }
    this.menuButton = document.querySelector('[data-menu="button"]');
    this.menuList = document.querySelector('[data-menu="list"]');
    this.eventos = ['click', 'touch'];
    this.eventos2 = ['click', 'touch', 'touchstart'];
    this.opcoesMenu = document.querySelectorAll('[data-menu="list"] > li:not([data-dropdown])');
    this.dropdownMenus = document.querySelectorAll('[data-dropdown]');

    this.openMenu = this.openMenu.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  openMenu() {
    this.menuList.classList.toggle('active');
    this.menuButton.classList.toggle('active');
    outsideClick(this.menu, this.eventos2, () => {
      this.menuList.classList.remove('active');
      this.menuButton.classList.remove('active');
      this.dropdownMenus.forEach((i) => {
        i.classList.remove('active');
      })
    });
  }

  handleClick() {
    this.classList.toggle('active');
  }

  init(){
    if (this.menuButton) {
      this.eventos.forEach((evento) => this.menuButton.addEventListener(evento, this.openMenu));
    }
    
    this.dropdownMenus.forEach((dropdown) => {
      dropdown.addEventListener('click', () => {
        if (window.matchMedia('(max-width: 700px)').matches){
          dropdown.classList.toggle('active');
        }
      });
    });

    this.opcoesMenu.forEach((i) => {
      i.addEventListener('click', () => {
        this.dropdownMenus.forEach((e) => {
          e.classList.remove('active');
        });
      });
    });

    this.opcoesMenu.forEach((e) => {
      e.addEventListener('click', () => {
        this.menuList.classList.remove('active');
        this.menuButton.classList.remove('active');
      });
    });
    return this;
  }
}
