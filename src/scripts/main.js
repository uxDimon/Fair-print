//selects
if (document.querySelectorAll('.calc-table__cell--select')) {
  let selectWraps = document.querySelectorAll('.calc-table__cell--select');
  let selects = document.querySelectorAll('.calc-table__select');

  for (let selectWrap of selectWraps) {
    selectWrap.addEventListener('click', function() {
      selectWrap.classList.toggle('active');

      if(selectWrap.classList.contains('active')) {
        selectWrap.classList.add('active');
      } else {
        selectWrap.classList.remove('active');
      }
    });
    selectWrap.addEventListener('focusout', function() {
      selectWrap.classList.remove('active');
    });
  }
}

//sliders
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

if (document.querySelector('.application__img-wrapper')) {
  var mySwiper10 = new Swiper('.application__img-wrapper .swiper-container', {
    breakpoints: {
      768: {
        direction: 'vertical',
        slidesPerView: 2,
        allowTouchMove: false,
        spaceBetween: 30,
      },
      280: {
        direction: 'horizontal',
        slidesPerView: 1.5,
        spaceBetween: 17,
        allowTouchMove: true,
      }
    }
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
      768: {
        slidesPerView: 3,
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
if (document.querySelector('.production__slider')) {
  var mySwiper9 = new Swiper('.production__slider .swiper-container', {
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
        allowTouchMove: false,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
        allowTouchMove: true,
      },
      280: {
        slidesPerView: 1.5,
        spaceBetween: 17,
        allowTouchMove: true,
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

//about page slider
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

//swiper with thumbnails
if (document.querySelector('.gallery-thumbs')) {
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 30,
    slidesPerView: 5,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    thumbs: {
      swiper: galleryThumbs,
    },
    breakpoints: {
      1024: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 1.5,
      }
    }
  });
}

//accordion
new Accordion('.help-tabs__wrap');
new Accordion('.help-tabs__wrap--payment');

//show calculator
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

//popup size table
if (document.querySelector('.main-size-table')) {
  let table = document.querySelector('.main-size-table');
  let btnClose = document.querySelector('.size-table__btn');
  
  btnClose.addEventListener('click', function(){
    table.classList.remove('active');
  });
}


// if (document.querySelectorAll('.footer-col').length) {
//   let footerLinks = document.querySelectorAll('.footer-col__title');
//   let footerConts = document.querySelectorAll('.footer-col-wrap');

//   for (let footerLink of footerLinks) {
//     footerLink.addEventListener('click', function() {
//       footerLink.nextElementSibling.classList.toggle('active');

//       if(footerLink.nextElementSibling.classList.contains('active')) {
//         footerLink.classList.add('active');
//       } else {
//         footerLink.classList.remove('active');
//       }
//     });
//   }
// }