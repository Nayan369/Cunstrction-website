

$(document).ready(function(){
  $("#owl-one").owlCarousel({
    items: 4,
    margin: 30,
    loop: true,
    autoplay: false,
    nav: true,
    dots: false,
    autoplayTimeout: 3000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:2,
        },
        998:{
          items:3,
      },
        1000:{
            items:4,
        }
    }
  });

  $("#owl-two").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    nav: true,
    dots: false,
  });
});