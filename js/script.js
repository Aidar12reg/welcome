

const swiper = new Swiper('.swiper', {
   // Optional parameters
   effect: "flip",
   grabCursor: true,
   // loop: true,
   centeredSlides: true,

   autoplay: {
      delay: 3500,
      stopOnLastSlide: true,
   },



   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },


});



