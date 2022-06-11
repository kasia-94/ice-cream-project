const swiper = new Swiper('.swiper', {

  // Optional parameters
    autoplay: {
   delay: 2500,
    },
//     effect: 'fade',
//   fadeEffect: {
//     crossFade: false
//   },

  effect: 'flip',
  flipEffect: {
    slideShadows: false
  },
       
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});