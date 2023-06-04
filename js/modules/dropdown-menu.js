// !!! Código interligado com menu-mobile.js

export default function initDropdownMenu() {
  const opcoesMenu = document.querySelectorAll('[data-menu="list"] > li:not([data-dropdown])');
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  function handleClick() {
    this.classList.toggle('active');
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
    });
  });
}

