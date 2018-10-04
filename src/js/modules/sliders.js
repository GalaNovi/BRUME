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
      breakpoint: 961,
      settings: {
        dots: false
      }
    }
  ]
});

$('.portfolio__slider').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 961,
      settings: {
        initialSlide: 1,
        infinite: false,
        arrows: false,
        centerMode: true,
        centerPadding: '59px',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false
      }
    },
    {
      breakpoint: 769,
      settings: {
        initialSlide: 1,
        infinite: false,
        arrows: false,
        centerMode: true,
        centerPadding: '22px',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false
      }
    }
  ]
});

$('.reviews__slider').slick({
  initialSlide: 1,
  arrows: false,
  infinite: true,
  speed: 1000,
  fade: true,
  dots: true,
  dotsClass: 'reviews__slider-dots',
  adaptiveHeight: true,
  autoplay: true
});
