(function($) {
  $(".modalBtn").click(function(e) {
    e.preventDefault();
    let id = $(".modal");

    let winH = $(window).height();
    let winW = $(window).width();

    id.css("top", winH / 2 - id.height() / 2);
    id.css("left", winW / 2 - id.width() / 2);

    id.fadeIn();
  });

  $(".closeModal").click(function(e) {
    e.preventDefault();
    $(".modal").fadeOut();
  });
})(jQuery);
