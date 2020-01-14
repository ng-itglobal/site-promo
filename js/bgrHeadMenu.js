$(document).ready(function($) {
  $(function() {
    let head = $(".head");

    $(window).scroll(function() {
      if ($(window).scrollTop() > 30) {
        head.css("background-color", "rgba(17, 17, 17, 0.95)");
      } else {
        head.css("background-color", "rgba(17, 17, 17, 0)");
      }
    });
  });
})(jQuery);