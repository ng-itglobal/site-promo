$(document).ready(function($) {
  $(".topnavHeadMenuIconOpen").click(function() {
    $(".topnavHeadMenuIconOpen").css("display", "none");
    $(".topnavHeadMenuIconClose").css("display", "block");
    $(".headMobLinkS").css("display", "block");

    if (parseInt($(".headMob").css("height")) === $(window).height()) {
      $(".headMob").css("height", "auto");
      $(".wrapLinksMobMenu").css("display", "none");
    } else {
      $(".headMob").css("height", "100vh");
      $(".wrapLinksMobMenu").css("display", "");
    }

  })

  $(".topnavHeadMenuIconClose").click(function() {
    $(".topnavHeadMenuIconClose").css("display", "none");
    $(".topnavHeadMenuIconOpen").css("display", "block");
    $(".headMobLinkS").css("display", "none");
    $(".headMob").css("height", "auto");
  })

  $(".headMobLink").click(function() {
    $(".headMobLinkS").css("display", "none");
    $(".headMob").css("height", "auto");
    $(".topnavHeadMenuIconClose").css("display", "none");
    $(".topnavHeadMenuIconOpen").css("display", "block");
  });
})(jQuery);