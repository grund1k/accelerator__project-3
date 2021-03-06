import './swiper';

const initSlider = () => {
  const slider = new Swiper('.trainers-list', {
    slidesPerView: 4,
    spaceBetween: 41,
    slidesPerGroup: 4,
    loop: true,
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
      768: {
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
}

const initCarousel = () => {
  const carousel = new Swiper('.reviews__list', {
    slidesPerView: 1,
    spaceBetween: 40,
    slidesPerGroup: 1,
    loop: false,
    navigation: {
      nextEl: '.reviews__btn--next',
      prevEl: '.reviews__btn--prev',
    },
  });
}

export { initSlider, initCarousel };
