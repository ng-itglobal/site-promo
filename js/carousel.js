(function($) {
  $(function() {
    let jcarousel = $(".jcarousel");

    jcarousel
      .on("jcarousel:reload jcarousel:create", function() {
        let carousel = $(this),
          width = carousel.innerWidth();

        if (width >= 968) {
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
})(jQuery);
