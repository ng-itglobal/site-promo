$(document).ready(function($) {
  $(function() {
    let btn = $(".btnTop");

    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.show();
      } else {
        btn.hide();
      }
    });

    $(".flowing-scroll").on("click", function() {
      let el = $(this);
      let dest = el.attr("href");
      if (dest !== undefined && dest !== "") {
        $("html").animate(
          {
            scrollTop: $(dest).offset().top - ($("header").height() + 30)
          },
          0 // скорость прокрутки
        );
      }
      return false;
    });
  });
})(jQuery);
