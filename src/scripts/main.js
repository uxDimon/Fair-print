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