document.addEventListener('DOMContentLoaded', function () {
    swiper = new Swiper('.swiper-pers', {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: ".pagination",
            type: "fraction",
          },
        autoplay:{
          delay:4000,
        },
        speed: 400,
        loop:true,
        navigation: {
            nextEl: ".button-next",
            prevEl: ".button-prev",
          },
          breakpoints: {
            // when window width is >= 320px
            1340: {
              slidesPerView: 3,
            },
          }
      });
      if ($(window).width() <= 1000 && $('#slider').hasClass('slider-no'))
      {
        $('#slider').removeClass('slider-no');
        $('#slider').addClass('slider-etap');
        $('.grid').addClass('swiper-wrapper');
        $('#gb-1-2').addClass('swiper-slide');
        $('#gb-3').addClass('swiper-slide');
        $('#gb-4-5').addClass('swiper-slide');
        $('#gb-6').addClass('swiper-slide');
        $('#gb-7').addClass('swiper-slide');
        swiper1 = new Swiper('.slider-etap', {
          pagination: {
              el: ".pagination-dote",
            },
          speed: 400,
          spaceBetween: 40,
          navigation: {
              nextEl: ".button-next",
              prevEl: ".button-prev",
            }
        });
        
      }
      else if($(window).width() > 1000 && $('#slider').hasClass('slider-etap'))
      {
        $('#slider').removeClass('slider-etap');
        $('.grid').removeClass('swiper-wrapper');
        $('#gb-1-2').removeClass('swiper-slide');
        $('#gb-3').removeClass('swiper-slide');
        $('#gb-4-5').removeClass('swiper-slide');
        $('#gb-6').removeClass('swiper-slide');
        $('#gb-7').removeClass('swiper-slide');
        $('#slider').addClass('slider-no');
      }
      $(".b-black").click(function () {
        // get the element on the page related to the button
        var divPosition = $('#support').offset();
        $('html, body').animate({scrollTop: divPosition.top}, "slow");
        // make the page scroll down to where you want
        // ...
    });
    $(".b-transparency").click(function () {
      // get the element on the page related to the button
      var divPosition = $('#about').offset();
      $('html, body').animate({scrollTop: divPosition.top}, "slow");
      // make the page scroll down to where you want
      // ...
  });
});