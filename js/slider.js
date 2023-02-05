$(document).ready(function () {

 $('#slider').slick({
   slidesToShow:1,
   arrows:false,
   dots:true,
   infinity: true,
   autoplay: true,
   autoplaySpeed: 12000,
   pauseOnFocus: false,
   pauseOnHover: false,
     interval: 3000,
   responsive: [
    {
      breakpoint: 700,
      settings: {
         autoplay: true,
         autoplaySpeed:4000
      }
    }
  ]
});



 $('#slider').on('wheel', (function(e) {
    e.preventDefault();

    if (e.originalEvent.deltaY < 0) {
       $(this).slick('slickNext');
    } else {
       $(this).slick('slickPrev');
    }
  }));


$('#slider-mini').slick({
   slidesToShow:1,
   dots:true,
   infinity: true,
   arrows:false,
   autoplay: true,
   adaptiveHeight: true,
   autoplaySpeed:2500,
   pauseOnFocus: false,
   pauseOnHover: false,
   responsive: [
    {
      breakpoint: 700,
      settings: {
        adaptiveHeight: false
      }
    }
  ]
});

$('#slider-mini-2').slick({
   slidesToShow:1,
   dots:true,
   infinity: true,
   arrows:true,
   autoplay: true,
   adaptiveHeight: true,
   autoplaySpeed:4000,
   pauseOnFocus: false,
   pauseOnHover: false,
   responsive: [
    {
      breakpoint: 700,
      settings: {
         adaptiveHeight: false,
         arrows:false
      }
    }
  ]
});

});

