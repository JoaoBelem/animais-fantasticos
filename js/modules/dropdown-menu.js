import outsideClick from './outsideclick.js';

export default function initDropdownMenu() {
  function handleClick(event) {
    event.preventDefault();
    console.log(this);
    this.classList.toggle('active');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  }
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  dropdownMenus.forEach((menu) => {
    ['touchstart', 'click'].forEach((event) => {
      console.log(event)
      // menu.removeEventListener();
      menu.addEventListener('click', handleClick);
    });
  });
}
