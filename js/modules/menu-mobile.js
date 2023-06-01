import outsideClick from './outsideclick.js';

export default function initMenuMobile() {
  const menu = document.querySelector('nav.menu');
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['click', 'touch'];
  const eventos2 = ['click', 'touch', 'touchstart'];
  const opcoesMenu = document.querySelectorAll('[data-menu="list"] > li');
  console.log(opcoesMenu);
  opcoesMenu.forEach((e) => {
    e.addEventListener('click', () => {
      menuList.classList.remove('active');
      menuButton.classList.remove('active');
    });
  });

  function openMenu() {
    menuList.classList.toggle('active');
    menuButton.classList.toggle('active');
    outsideClick(menu, eventos2, () => {
      menuList.classList.remove('active');
      menuButton.classList.remove('active');
    });
  }

  if (menuButton) {
    eventos.forEach((evento) => menuButton.addEventListener(evento, openMenu));
  }
}
