(function($) {
  $(".close").click(function(e) {
    e.preventDefault();
    $(".modal").css('display', 'none');
  });
})(jQuery);
