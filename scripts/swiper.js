const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: 2,
  loop: true,
  speed: 600,
  autoplay: {
    delay: 3000,
  },

  coverflowEffect: {
    rotate: 10,
    modifier: 0.5,
    scale: 0.8,
  },
  navigation: {
    nextEl: ".swiper-right",
    prevEl: ".swiper-left",
  },
});
