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
          centerPadding: "40px",
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: true,
          dotsClass: "paginationTim",
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1
        }
      }
    ]
  });
});
