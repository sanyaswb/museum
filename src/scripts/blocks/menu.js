const page = document.querySelector('.page');
const body = document.querySelector('.body');
const menu = document.querySelector('.menu');
const buttonMenu = document.querySelector('.button-menu');
const navLink = document.querySelectorAll('.nav__link');

buttonMenu.addEventListener('click', () => {
  buttonMenu.classList.toggle('button-menu--active');
  buttonMenu.classList.remove('button-menu__item--active-2');
  page.classList.toggle('page-hidden--active');
  menu.classList.toggle('menu--active');
  body.classList.toggle('menu-bg--active');
});

navLink.forEach((el) => {
  el.addEventListener('click', () => {
    buttonMenu.classList.remove('button-menu--active');
    buttonMenu.classList.remove('button-menu__item--active-2');
    page.classList.remove('page-hidden--active');
    menu.classList.remove('menu--active');
    body.classList.remove('menu-bg--active');
  });
});
