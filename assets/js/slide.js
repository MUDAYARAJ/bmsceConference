const scrollingTextContainer = document.querySelector('.scrolling-text-container');

scrollingTextContainer.addEventListener('animationiteration', () => {
  scrollingTextContainer.appendChild(scrollingTextContainer.querySelector('.scrolling-text').cloneNode(true));
});
