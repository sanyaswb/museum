'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.page-section');
  const paginationContainer = document.getElementById('pagination-container');
  const viewerText = document.getElementById('viewer-text');

  const dots = [];
  let currentActiveTitle = '';

  const updateActiveState = (index) => {
    dots.forEach((d) => d.classList.remove('active'));

    if (dots[index]) {
      dots[index].classList.add('active');
    }

    const currentSection = sections[index];

    if (currentSection) {
      const title = currentSection.getAttribute('data-title');

      viewerText.textContent = title;
      currentActiveTitle = title;
    }
  };

  sections.forEach((section, index) => {
    const dot = document.createElement('div');

    dot.classList.add('pagination-dot');

    const sectionTitle = section.getAttribute('data-title');

    dot.addEventListener('click', () => {
      section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    dot.addEventListener('mouseenter', () => {
      viewerText.textContent = sectionTitle;
    });

    dot.addEventListener('mouseleave', () => {
      viewerText.textContent = currentActiveTitle;
    });

    paginationContainer.appendChild(dot);
    dots.push(dot);
  });

  const observerOptions = {
    root: null,
    rootMargin: '-45% 0px -45% 0px',
    threshold: 0,
  };

  const observer = new window.IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Array.from(sections).indexOf(entry.target);

        updateActiveState(index);
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });
});
