$('.present__slider').slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 1000,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1201,
      settings: {
        dots: false
      }
    }
  ]
});

$('.portfolio__slider').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  variableWidth: true
});
