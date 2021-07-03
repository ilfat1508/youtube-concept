const myChannelSlider = new Swiper('.my-channel-slider', {
  // Optional parameters
  
  loop: true,
  slidesPerView:1,
   spaceBetween: 20,
   breakpoints:{
     1900: {
       slidesPerView:6
     },
     1600:{slidesPerView:5},
   1300:{slidesPerView:4},
   1100:{slidesPerView:3},
   800:{slidesPerView:2}

   },
  // Navigation arrows
  navigation: {
    nextEl: '#my-channel-button-next',
    prevEl: '#my-channel-button-prev',
  },

 
 
});


const recomendedSlider = new Swiper('.recomended-slider', {
  // Optional parameters
  
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints:{
   
    1600:{slidesPerView:3},
  1100:{slidesPerView:2},
 

  },
  // Navigation arrows
  navigation: {
    nextEl: '#recomended-button-next',
    prevEl: '#recomended-button-prev',
  },

 
 
});


const recomendedChannelSlider = new Swiper('.recomended-channel-slider', {
  // Optional parameters
  
  loop: true,
  slidesPerView:1,

  spaceBetween: 20,
  breakpoints:{
    1900: {
      slidesPerView:6
    },
    1600:{slidesPerView:5},
  1300:{slidesPerView:4},
  1100:{slidesPerView:3},
  800:{slidesPerView:2}

  },

  // Navigation arrows
  navigation: {
    nextEl: '#recomended-channel-next',
    prevEl: '#recomended-channel-prev',
  },

 
 
});

const searchBtn = document.querySelector('.mobile-search');
const mobileSearch = document.querySelector('.input-group');
searchBtn.addEventListener('click', () =>{
 mobileSearch.classList.toggle('is-open');
});


if (document.documentElement.scrollWidth <= 640) {
  myChannelSlider.destroy();
  recomendedChannelSlider.destroy();
  recomendedSlider.destroy();
}