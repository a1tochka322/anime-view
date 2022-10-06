/* eslint linebreak-style: ["error", "windows"] */

const scrollToTop = () => {
  const topBtn = document.querySelector('#scrollToTopButton');

  topBtn.addEventListener('click', (event) => {
    event.preventDefault();

    // eslint-disable-next-line no-undef
    seamless.scrollIntoView(document.querySelector('.header'), {
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  });
};

scrollToTop();
