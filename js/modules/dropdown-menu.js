// !!! CÓDIGO PODRE !!!
import outsideClick from './outsideclick.js';

export default function initDropdownMenu() {
  const opcoesMenu = document.querySelectorAll('[data-menu="list"] > li:not([data-dropdown])');
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  function handleClick() {
    this.classList.toggle('active');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  }
  
  dropdownMenus.forEach((menu) => {
    ['touchstart', 'click'].forEach(() => {
      // menu.removeEventListener();
      menu.addEventListener('click', handleClick);
    });
  });

  opcoesMenu.forEach((i) => {
    i.addEventListener('click', () => {
      dropdownMenus.forEach((e) => {
        e.classList.remove('active');
      });
    })
  })
}
