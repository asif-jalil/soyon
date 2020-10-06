(function ($) {

  // stycky navbar
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop()
    if (scroll > 800) {
      $('.header').addClass('sticky-state');
    } else {
      $('.header').removeClass('sticky-state');
    }
  })

  //offcanvas menu
  $(".menu-trigger").click(function () {
    $(".ofcanvas-menu").addClass("active")
  });

  $(".menu-close").click(function () {
    $(".ofcanvas-menu").removeClass("active")
  });

  //about collapse active js
  $(".option-heading").click(function () {
    $(this).parent().toggleClass("active");
    $(this).toggleClass("active");
  });

  // section h1 hover
  // $(".about p").hide();
  // $(".contact p").hide();
  // $(".bond p").hide();
  // $(".baristo p").hide();
  // $(".lumi p").hide();
  // $(".ninety-nine p").hide();
  // $(".gamuda p").hide();
  // $(".hash p").hide();

  // $(".about h1").hover(function () {
  //   $(".about p").toggle('slow');
  // });
  // $(".contact h1").hover(function () {
  //   $(".contact P").toggle('slow');
  // });
  // $(".bond h1").hover(function () {
  //   $(".bond P").toggle('slow');
  // });
  // $(".baristo h1").hover(function () {
  //   $(".baristo p").toggle('slow');
  // });
  // $(".lumi h1").hover(function () {
  //   $(".lumi p").toggle('slow');
  // });
  // $(".ninety-nine h1").hover(function () {
  //   $(".ninety-nine p").toggle('slow');
  // });
  // $(".gamuda h1").hover(function () {
  //   $(".gamuda p").toggle('slow');
  // });
  // $(".hash h1").hover(function () {
  //   $(".hash p").toggle('slow');
  // });


  //section linking
  // $(".gamuda").click(function () {
  //   window.location = $(this).find("a").attr("href");
  //   return false;
  // });
  // $(".ninety-nine").click(function () {
  //   window.location = $(this).find("a").attr("href");
  //   return false;
  // });
  // $(".contact").click(function () {
  //   window.location = $(this).find("a").attr("href");
  //   return false;
  // });
  // $(".bond").click(function () {
  //   window.location = $(this).find("a").attr("href");
  //   return false;
  // });
  // $(".baristo").click(function () {
  //   window.location = $(this).find("a").attr("href");
  //   return false;
  // });
  // $(".lumi").click(function () {
  //   window.location = $(this).find("a").attr("href");
  //   return false;
  // });
  // $(".about").click(function () {
  //   window.location = $(this).find("a").attr("href");
  //   return false;
  // });
  // $(".hash").click(function () {
  //   window.location = $(this).find("a").attr("href");
  //   return false;
  // });

  //owl carosel
  $('.owl-carousel').owlCarousel({
    center: true,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 3
      },
      480: {
        items: 4
      },
      576: {
        items: 5
      },
      768: {
        items: 6
      },
      992: {
        items: 7
      },
      1200: {
        items: 8
      }
    }
  });

  //infinity loop






})(jQuery);