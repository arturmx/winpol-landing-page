$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    dots:true,
    // autoplay: true,
    // autoplaySpeed: 4000,
    swipe: true,
    fade: true,
    speed: 800,
    dotsClass: 'hero__dots',
  });
});
