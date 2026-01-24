/* global Swiper */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const gallerySection = document.querySelector('.gallery__content');
  let gallerySwiper = null;
  let currentMode = '';

  const images = [
    {
      class: 'gallery__image--1',
      src: 'src/images/gallery/gallery-img-1.jpg',
      alt: 'image painting 1',
    },
    {
      class: 'gallery__image--2',
      src: 'src/images/gallery/gallery-img-2.jpg',
      alt: 'image painting 2',
    },
    {
      class: 'gallery__image--3',
      src: 'src/images/gallery/gallery-img-3.jpg',
      alt: 'image painting 3',
    },
    {
      class: 'gallery__image--4',
      src: 'src/images/gallery/gallery-img-4.jpg',
      alt: 'image painting 4',
    },
  ];

  const renderMobile = () => {
    const slidesHTML = images
      .map(
        (img) => `
      <div class="swiper-slide">
        <img class="gallery__image" src="${img.src}" alt="${img.alt}" />
      </div>
    `,
      )
      .join('');

    gallerySection.innerHTML = `
      <div class="gallery__slider swiper">
        <div class="swiper-wrapper">
          ${slidesHTML}
        </div>
      </div>
      <div class="gallery__pagination swiper-pagination"></div>
    `;

    gallerySwiper = new Swiper('.gallery__slider', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      pagination: {
        el: '.gallery__pagination',
        clickable: true,
      },
      breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
  };

  const renderDesktop = () => {
    if (gallerySwiper) {
      gallerySwiper.destroy(true, true);
      gallerySwiper = null;
    }

    gallerySection.innerHTML = images
      .map(
        (img) => `
      <img class="gallery__image ${img.class}" src="${img.src}" alt="${img.alt}" />
    `,
      )
      .join('');
  };

  const checkBreakpoint = () => {
    const isMobile = window.innerWidth < 1280;
    const newMode = isMobile ? 'mobile' : 'desktop';

    if (currentMode === newMode) {
      return;
    }

    currentMode = newMode;

    if (isMobile) {
      renderMobile();
    } else {
      renderDesktop();
    }
  };

  checkBreakpoint();

  window.addEventListener('resize', checkBreakpoint);
});
