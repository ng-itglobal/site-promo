(function($) {
  $(".containerIconBurger").click(function() {
    if (parseInt($(".headMob").css("height")) === $(window).height()) {
      $(".headMob").css("height", "auto");
    } else {
      $(".headMob").css("height", "100vh");
    }
  });

  $(".headMobLink").click(function() {
    $(".containerIconBurger").click();
    $(".headMobLinks").css("display", "none");
    $(".wrapLinksMobMenu").css("display", "none");
    $(".headMob").css("height", "auto");
  });
})(jQuery);

function actionBurgMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function actionIconBurgMenu(x) {
  x.classList.toggle("change");
}
