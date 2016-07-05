 $(document).ready(function(){
  $('.slider').slick({
  dots: false,
  speed: 300,
  pauseOnHover: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


  $('.sliderComment').slick({
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 3000
  });





});
