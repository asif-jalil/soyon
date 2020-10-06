  $(window).scroll(function () {
    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
      console.log(++page);
      $("body").append('<main class="total-body"><h1><a href="bond.html">bond</a></h1></main > ');

    }
  });