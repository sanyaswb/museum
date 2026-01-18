const page = document.querySelector('.page');
const body = document.querySelector('.body');
const menu = document.querySelector('.menu');
const buttonMenu = document.querySelector('.button-menu');

buttonMenu.addEventListener('click', () => {
  buttonMenu.classList.toggle('button-menu--active');
  page.classList.toggle('page-hidden--active');
  menu.classList.toggle('menu--active');
  body.classList.toggle('menu-bg--active');
});
