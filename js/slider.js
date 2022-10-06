/* eslint-disable linebreak-style */
const slider = () => {
  // eslint-disable-next-line no-undef, no-unused-vars
  const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
    speed: 1000,

  });
};

slider();
