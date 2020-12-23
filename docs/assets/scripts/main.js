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

//header burger
if (document.querySelector('.header__toggle')) {
  let btnToggle = document.querySelector('.header__toggle');
  let burgerMenu = document.querySelector('.burger-menu');
  btnToggle.addEventListener('click', function(){
    burgerMenu.classList.toggle('active');
    btnToggle.classList.toggle('active');
  });
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
  let styleProjects;
  let sliderOn = false;

  function initSlider() {
    if (document.body.clientWidth >= 768 && sliderOn) {
      styleProjects.destroy();
      sliderOn = false;
    }
    if (document.body.clientWidth < 768 && !sliderOn) {
      styleProjects = new Swiper(".application__img-wrapper .swiper-container", {
        slidesPerView: 1.5,
        spaceBetween: 17,
        // breakpoints: {
        //   768: {
        //     direction: 'vertical',
        //     slidesPerView: 2,
        //     allowTouchMove: false,
        //     spaceBetween: 30,
        //   },
        //   280: {
        //     direction: 'horizontal',
            
        //     
        //     allowTouchMove: true,
        //   }
        // }
      });
      sliderOn = true;
    }
  }

  window.onresize = function () {
    initSlider();
  };

  initSlider();
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
      500: {
        slidesPerView: 3,
      },
      280: {
        slidesPerView: 2,
        spaceBetween: 17
      }
    }
  });
}

//clients brand slider
if (document.querySelector('.clients__swiper-top')) {
  var mySwiper2 = new Swiper('.clients__swiper-top', {
    // Optional parameters
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 1500,
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
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
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 1500,
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      280: {
        slidesPerView: 2,
        spaceBetween: 17,
      }
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
}
// clients brand slider end


if (document.querySelector('.production__slider')) {
  let styleProjects;
  let sliderOn = false;

  function initSlider() {
    if (document.body.clientWidth >= 768 && sliderOn) {
      styleProjects.destroy();
      sliderOn = false;
    }
    if (document.body.clientWidth < 768 && !sliderOn) {
      styleProjects = new Swiper(".production__slider .swiper-container", {
        breakpoints: {
          550: {
            slidesPerView: 2.5,
            spaceBetween: 20,
            allowTouchMove: true,
          },
          425: {
            slidesPerView: 2,
            spaceBetween: 17,
            allowTouchMove: true,
          },
          280: {
            slidesPerView: 1.5,
            spaceBetween: 17,
            allowTouchMove: true,
          }
        },
      });
      sliderOn = true;
    }
  }

  window.onresize = function () {
    initSlider();
  };

  initSlider();
}
// if (document.querySelector('.production__slider')) {
//   var mySwiper9 = new Swiper('.production__slider .swiper-container', {
//     breakpoints: {
//       1350: {
//         slidesPerView: 3,
//         spaceBetween: 30,
//         allowTouchMove: false,
//       },
//       768: {
//         slidesPerView: 2.5,
//         spaceBetween: 20,
//         allowTouchMove: true,
//       },
//       425: {
//         slidesPerView: 2,
//         spaceBetween: 17,
//         allowTouchMove: true,
//       },
//       280: {
//         slidesPerView: 1.5,
//         spaceBetween: 17,
//         allowTouchMove: true,
//       }
//     },
//   });
// }
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
if (document.querySelector('.about-slider__bot')) {
  var mySwiper7 = new Swiper('.about-slider__bot', {
    // Optional parameters
    slidesPerView: 6,
    spaceBetween: 30,
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
    pagination: {
      el: '.swiper-pagination',
    },
  });
}
//about slider end

//swiper with thumbnails
if (document.querySelector('.gallery-thumbs')) {
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 30,
    slidesPerView: 5,
    watchSlidesProgress: true,
    observer: true,
    observeParents: true
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    observer: true,
    observeParents: true,
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

AOS.init();

//show calculator
if (document.querySelectorAll('.clothes-list__link').length) {
  let cardLinks = document.querySelectorAll('.clothes-list__link');
  let calculator = document.querySelector('.js-calc');
  for (let cardLink of cardLinks) {
    cardLink.addEventListener('click', function (event) {
      event.preventDefault();
      calculator.classList.add('show');

      // if(calculator.classList.contains('show')) {
      //   calculator.classList.remove('show');
      // }
    });
  }
}

//popup size table
if (document.querySelector('.main-size-table')) {
  let table = document.querySelector('.main-size-table');
  let sizeBtns = document.querySelectorAll('.calc__btn');
  let btnClose = document.querySelector('.size-table__btn');
  
  for(let sizeBtn of sizeBtns) {
    sizeBtn.addEventListener('click', function(event){
      // event.preventDefault();
      table.classList.add('active');
    });
  }
  btnClose.addEventListener('click', function(){
    table.classList.remove('active');
  });
  // let tableOverlay = document.querySelector('.size-table');
  // tableOverlay.addEventListener('click', function(){
  //   if(table.classList.contains('active')) {
  //     table.classList.remove('active');
  //   }
  // });
}

//popup write-us
if (document.querySelectorAll('.js-write')) {
  let writeBtns = document.querySelectorAll('.js-write');
  let writePopup = document.querySelector('.main-form-popup');
  let popupClose = document.querySelector('.form-popup__btn');

  for(let writeBtn of writeBtns) {
    writeBtn.addEventListener('click', function(event){
      event.preventDefault();
      writePopup.classList.add('active');
    });
    popupClose.addEventListener('click', function(){
      writePopup.classList.remove('active');
    });
  }
  // let formOverlay = document.querySelector('.form-popup');
  // formOverlay.addEventListener('click', function(){
  //   if(writePopup.classList.contains('active')) {
  //     writePopup.classList.remove('active');
  //   }
  // });
}

//about text more
if (document.querySelectorAll('.about__wrap').length) {
  let linksMore = document.querySelectorAll('.about__btn');
  let textWraps = document.querySelectorAll('.about__wrap');

  for(let linkMore of linksMore) {
    linkMore.addEventListener('click', function(){
      for (let textWrap of textWraps) {
        if (linkMore.innerText == 'Развернуть') {
          linkMore.innerText = 'Свернуть';
          textWrap.classList.add('more');
        } else {
          linkMore.innerText = 'Развернуть';
          textWrap.classList.remove('more');
        }
        
      }
    });
  }
}

//application text more
if (document.querySelectorAll('.application__text-wrap').length) {
  let linksMore = document.querySelectorAll('.application__btn--more');
  let textWraps = document.querySelectorAll('.application__text-wrap');

  for(let linkMore of linksMore) {
    linkMore.addEventListener('click', function(){
      for (let textWrap of textWraps) {
        if (linkMore.innerText == 'Развернуть') {
          linkMore.innerText = 'Свернуть';
          textWrap.classList.add('more');
        } else {
          linkMore.innerText = 'Развернуть';
          textWrap.classList.remove('more');
        }
      }
    });
  }
}

//accordion
new Accordion('.help-tabs__wrap');
new Accordion('.help-tabs__wrap--payment');
