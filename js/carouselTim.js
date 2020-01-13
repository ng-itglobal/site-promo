(function($) {
  $(function() {
    let jcarousel = $("#jcarouselTim");

    jcarousel
      .on("jcarousel:reload jcarousel:create", function() {
        let carousel = $(this),
          width = carousel.innerWidth();

        if (width > 768) {
          width = width / 3;
        } else {
          width = width / 1;
        }

        carousel.jcarousel("items").css("width", Math.ceil(width) + "px");
        // carousel.jcarousel("fullyvisible").css("opacity", "0.8");
        // $(this).jcarousel("last").css("opacity", "0.25");
        // $(this).jcarousel("first").css("opacity", "0.25")
      })
      .on("jcarousel:animateend", function(event, carousel) {
        // $(this).jcarousel("items").css("opacity", "0.25");
        // $(this).jcarousel("fullyvisible").css("opacity", "0.8");
        // $(this).jcarousel("last").css("opacity", "0.25");
        // $(this).jcarousel("first").css("opacity", "0.25")
      })
      .jcarousel({
        wrap: "circular"
      })
      .jcarouselSwipe();

    $(".jcarousel-control-prev").jcarouselControl({
      target: "-=1"
    });

    $(".jcarousel-control-next").jcarouselControl({
      target: "+=1"
    });

    $(".jcarousel-pagination")
      .on("jcarouselpagination:active", "a", function() {
        $(this).addClass("active");
      })
      .on("jcarouselpagination:inactive", "a", function() {
        $(this).removeClass("active");
      })
      .on("click", function(e) {
        e.preventDefault();
      })
      .jcarouselPagination({
        perPage: 1,
        item: function(page) {
          return '<a href="#' + page + '">' + page + "</a>";
        }
      });
  });
})(jQuery);
