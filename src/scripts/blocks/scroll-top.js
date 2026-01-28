'use strict';

const header = document.getElementById('header');
const scrollTopBtn = document.querySelector('.button-scroll-top');

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  const headerBottom = header.offsetHeight;

  if (currentScroll <= headerBottom) {
    scrollTopBtn.classList.remove('visible');
  } else {
    scrollTopBtn.classList.add('visible');
  }
});
