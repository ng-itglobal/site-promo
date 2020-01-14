$(document).ready(function() {
  $(".center").slick({
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 10,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
          dots: true,
          dotsClass: "timDots",
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
          dots: true,
          dotsClass: "timDots",
        }
      }
    ]
  });
});
