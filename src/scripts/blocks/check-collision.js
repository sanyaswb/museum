'use strict';

const movingElements = document.querySelectorAll('.button-menu__item');

const triggers = [
  {
    selector: 'h1, h2, h3, h4, li, p, .logo',
    activeClass: 'button-menu__item--active-2',
    target: '.button-menu',
  },
  {
    selector: '.subscribe',
    activeClass: 'button-menu__item--active',
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
