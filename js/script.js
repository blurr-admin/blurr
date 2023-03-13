
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 15,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1.5,
        },
        520: {
            slidesPerView: 2.5,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

// hamburger JS
  const primaryNav = document.querySelector('.nav_list');
  const navToggle = document.querySelector('.nav-toggle');

  navToggle.addEventListener('click', () =>{
      const visibility = primaryNav.getAttribute("data-visible");
      if (visibility === "false") {
          primaryNav.setAttribute("data-visible", true);
          navToggle.setAttribute("aria-expanded", true);
      }
      else if(visibility === "true"){
          primaryNav.setAttribute("data-visible", false);
          navToggle.setAttribute("aria-expanded", false);
      }
  })

  
