'use strict';

const sectionViewer = document.getElementById('section-viewer-wrapper');

function checkScreen() {
  if (window.innerWidth >= 1280) {
    sectionViewer.classList.add('header__section-viewer');
  } else {
    sectionViewer.classList.remove('header__section-viewer');
  }
}

checkScreen();
window.addEventListener('resize', checkScreen);

document.addEventListener('DOMContentLoaded', () => {
  const viewer = document.querySelector('.header__section-viewer');

  if (!viewer) {
    return;
  }

  const placeholder = document.createElement('div');

  placeholder.style.visibility = 'hidden';
  placeholder.style.display = 'none';
  placeholder.className = viewer.className;
  placeholder.classList.remove('header__section-viewer');
  placeholder.style.gridColumn = '2 / 3';
  placeholder.style.gridRow = '1 / 2';
  placeholder.style.alignSelf = 'end';
  placeholder.style.height = '125.4px';
  placeholder.style.width = '55px';

  viewer.parentNode.insertBefore(placeholder, viewer);

  const calculateTrigger = () => {
    const el = viewer.classList.contains('is-fixed') ? placeholder : viewer;
    const rect = el.getBoundingClientRect();
    const absoluteTop = rect.top + window.scrollY;
    const elHeight = rect.height;
    const windowHeight = window.innerHeight;

    return absoluteTop - windowHeight / 2 + elHeight / 2;
  };

  let triggerPoint = calculateTrigger();

  window.addEventListener('resize', () => {
    triggerPoint = calculateTrigger();
  });

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll >= triggerPoint) {
      if (!viewer.classList.contains('is-fixed')) {
        viewer.classList.add('is-fixed');
        placeholder.style.display = 'block';
      }
    } else {
      if (viewer.classList.contains('is-fixed')) {
        viewer.classList.remove('is-fixed');
        placeholder.style.display = 'none';
      }
    }
  });
});
