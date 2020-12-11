let text = "Привет Васян";
console.log(text);

var mySwiper = new Swiper('.main-top__container', {
    // Optional parameters
    loop: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
});
var mySwiper = new Swiper('.clients__swiper-top', {
  // Optional parameters
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  slidesPerView: 6,
  spaceBetween: 30,
});
var mySwiper = new Swiper('.clients__swiper-bot', {
  // Optional parameters
  slidesPerView: 6,
  spaceBetween: 30,
});
var mySwiper = new Swiper('.work-examples__swiper', {
  // Optional parameters
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  slidesPerView: 3,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
var mySwiper = new Swiper('.print-cups__slider .swiper-container', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});