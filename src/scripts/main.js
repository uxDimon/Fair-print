if (document.querySelector('.main-top__container')) {
  var mySwiper1 = new Swiper('.main-top__container', {
    // Optional parameters
    loop: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  });
}
if (document.querySelector('.clothes-list__swiper')) {
  var mySwiper8 = new Swiper('.clothes-list__swiper', {
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      1024: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      280: {
        slidesPerView: 2,
        spaceBetween: 17
      }
    }
  });
}
if (document.querySelector('.clients__swiper-top')) {
  var mySwiper2 = new Swiper('.clients__swiper-top', {
    // Optional parameters
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    breakpoints: {
      1024: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
      },
      280: {
        slidesPerView: 2,
        spaceBetween: 17,
      }
    },
  });
}
if (document.querySelector('.clients__swiper-bot')) {
  var mySwiper3 = new Swiper('.clients__swiper-bot', {
    // Optional parameters
    
    breakpoints: {
      1024: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
      },
      280: {
        slidesPerView: 2,
        spaceBetween: 17,
      }
    },
  });
}
if (document.querySelector('.work-examples__swiper')) {
  var mySwiper4 = new Swiper('.work-examples__swiper', {
    // Optional parameters
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      280: {
        slidesPerView: 1.5,
        spaceBetween: 17,
      }
    },
  });
}
if (document.querySelector('.print-cups__slider .swiper-container')) {
  var mySwiper5 = new Swiper('.print-cups__slider .swiper-container', {
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
}
if (document.querySelector('.about-slider__top')) {
  var mySwiper6 = new Swiper('.about-slider__top', {
    // Optional parameters
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    slidesPerView: 6,
    spaceBetween: 30,
  });
}
if (document.querySelector('.about-slider__bot')) {
  var mySwiper7 = new Swiper('.about-slider__bot', {
    // Optional parameters
    slidesPerView: 6,
    spaceBetween: 30,
  });
}

if (document.querySelector('.gallery-thumbs')) {
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 30,
    slidesPerView: 5,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    thumbs: {
      swiper: galleryThumbs,
    }
  });
};

new Accordion('.help-tabs__wrap');
new Accordion('.help-tabs__wrap--payment');

if (document.querySelectorAll('.clothes-list__link').length) {
  let cardLinks = document.querySelectorAll('.clothes-list__link');
  let calculator = document.querySelector('.calc');
  for (let cardLink of cardLinks) {
    cardLink.addEventListener('click', function (event) {
      event.preventDefault();
      calculator.classList.add('active');
    });
  }
}

if (document.querySelector('.main-size-table')) {
  let table = document.querySelector('.main-size-table');
  let btnClose = document.querySelector('.size-table__btn');
  
  btnClose.addEventListener('click', function(){
    table.classList.remove('active');
  });
}

// if (document.querySelectorAll('.header-main__link')) {
//   let headerLinks = document.querySelectorAll('.header-main__link');
//   let dropMenus = document.querySelectorAll('.header-main__inner-menu');
//   for(let headerLink of headerLinks) {
//     headerLink.addEventListener('focus', function(){
//       for(let dropMenu of dropMenus) {
//         dropMenu.classList.add('active');
//       }
//     });
//   }
// }

// if (document.querySelectorAll('.about__wrap').length) {
//   let textWrap = document.querySelector('.about__wrap');
//   let btnMore = document.querySelector('.about__btn');
//   btnMore.addEventListener('click', function(event){
//     textWrap.classList.add('more');
//   });
// }



// let styleProjects;
// let sliderOn = false;

// function initSlider() {
//   if (document.body.clientWidth <= 768 && sliderOn) {
//     styleProjects.destroy();
//     sliderOn = false;
//   }
//   if (document.body.clientWidth > 768 && !sliderOn) {
//     styleProjects = new Swiper(".main-clothes__swiper", {
//       slidesPerView: 2,
//       spaceBetween: 17,
//     });
//     sliderOn = true;
//   }
// }

// window.onresize = function () {
//   initSlider();
// };

// initSlider();