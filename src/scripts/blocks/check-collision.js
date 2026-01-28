'use strict';

const movingElements = document.querySelectorAll(
  '.button-menu__item, .button-scroll-top',
);

const triggers = [
  {
    selector: 'h1, h2, h3, h4, li, p, .logo',
    activeClass: 'button-menu__item--active-2',
    target: '.button-menu',
    moverSelector: '.button-menu__item',
  },
  {
    selector: '.subscribe',
    activeClass: 'button-menu__item--active',
    moverSelector: '.button-menu__item',
  },

  {
    selector: '.subscribe',
    activeClass: 'button-scroll-top--collision',
    moverSelector: '.button-scroll-top',
  },
];

const deactivatorSelector = '.subscribe__form';

function isColliding(rect1, rect2) {
  return (
    rect1.bottom >= rect2.top &&
    rect1.top <= rect2.bottom &&
    rect1.right >= rect2.left &&
    rect1.left <= rect2.right
  );
}

function checkCollision() {
  const deactivators = document.querySelectorAll(deactivatorSelector);
  const menuOpen = document.querySelector('.menu');

  if (menuOpen && menuOpen.classList.contains('menu--active')) {
    return;
  }

  movingElements.forEach((mover) => {
    const moverRect = mover.getBoundingClientRect();
    let isBlocked = false;

    deactivators.forEach((section) => {
      const secRect = section.getBoundingClientRect();

      if (isColliding(moverRect, secRect)) {
        isBlocked = true;
      }
    });

    triggers.forEach((trigger) => {
      if (trigger.moverSelector && !mover.matches(trigger.moverSelector)) {
        return;
      }

      const targetElement = trigger.target
        ? document.querySelector(trigger.target)
        : mover;

      if (!targetElement) {
        return;
      }

      if (isBlocked) {
        targetElement.classList.remove(trigger.activeClass);

        return;
      }

      const sections = document.querySelectorAll(trigger.selector);
      let shouldActivate = false;

      sections.forEach((section) => {
        const secRect = section.getBoundingClientRect();

        if (isColliding(moverRect, secRect)) {
          shouldActivate = true;
        }
      });

      if (shouldActivate) {
        targetElement.classList.add(trigger.activeClass);
      } else {
        targetElement.classList.remove(trigger.activeClass);
      }
    });
  });
}

window.addEventListener('scroll', checkCollision);
window.addEventListener('resize', checkCollision);
checkCollision();
