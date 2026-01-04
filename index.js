// var TrandingSlider = new Swiper(".testimonial-slider", {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   loop: true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 2,
//     stretch: 20,
//     depth: 50,
//     modifier: 6,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
// console.log("JS is working!");
// var TrandingSlider = new Swiper(".testimonial-slider", {
//   effect: "slide",
//   grabCursor: true,
//   centeredSlides: true,
//   loop: true,
//   slidesPerView: 1,
//   spaceBetween: 20,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
const swiper = new Swiper(".testimonial-slider", {
  effect: "cards",
  grabCursor: true, // makes it draggable
  centeredSlides: true, // centers the active slide
  loop: true, // optional, if you want infinite scrolling
  cardsEffect: {
    slideShadows: false, // optional: remove shadow if you want
  },
  slidesPerView: 1, // cards effect should usually show 1 slide fully
});
