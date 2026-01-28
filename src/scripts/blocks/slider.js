/* global Swiper */

'use strict';

window.gallerySwiper = new Swiper('.gallery__slider', {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 1,

  pagination: {
    el: '.gallery__pagination',
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 'auto',
      enabled: false,
    },
  },
});
