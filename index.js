(function($) {
  $(function() {
    let btn = $(".btnTop");

    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.show();
      } else {
        btn.hide();
      }
    });

    let jcarousel = $(".jcarousel");

    jcarousel
      .on("jcarousel:reload jcarousel:create", function() {
        let carousel = $(this),
          width = carousel.innerWidth();

        if (width >= 1180) {
          width = width / 3;
        }
        if (width >= 576) {
          width = width / 2;
        } else if (width >= 529) {
          width = width / 1;
        }

        carousel.jcarousel("items").css("width", Math.ceil(width) + "px");
      })
      .jcarousel({
        wrap: "circular"
      });

    $(".jcarousel-control-prev").jcarouselControl({
      target: "-=1"
    });

    $(".jcarousel-control-next").jcarouselControl({
      target: "+=1"
    });
  });

  $(".flowing-scroll").on("click", function() {
    let el = $(this);
    let dest = el.attr("href");
    if (dest !== undefined && dest !== "") {
      $("html").animate(
        {
          scrollTop: $(dest).offset().top
        },
        500 // скорость прокрутки
      );
    }
    return false;
  });
})(jQuery);
