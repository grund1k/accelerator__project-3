// Swiper 7.4.1
import './vendor/swiper';

const swiper = new Swiper('.trainers-list', {
  slidesPerView: 4,
  spaceBetween: 41,
  slidesPerGroup: 4,
  loop: false,
  loopFillGroupWithBlank: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
      slidesPerGroup: 1,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 31,
      slidesPerGroup: 2,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 41,
      slidesPerGroup: 4,
    },
  },
});
