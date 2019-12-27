(function($) {
  $(".modalBtn").click(function(e) {
    e.preventDefault();
    let id = $(".modal");

    let winH = $(window).height();
    let winW = $(window).width();

    id.css("top", winH / 2 - id.height() / 2);
    id.css("left", winW / 2 - id.width() / 2);

    id.fadeIn();

    $("input").prop("disabled", true);
    $("textarea").prop("disabled", true);
    $(".page").fadeTo(500, 0.5);
  });

  $(".closeModal").click(function(e) {
    e.preventDefault();
    $(".modal").fadeOut();
    $("input").prop("disabled", false);
    $("textarea").prop("disabled", false);
    $(".page").fadeTo(500, 1);
  });
})(jQuery);
