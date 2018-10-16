'use-strict';

(function () {
  var DESKTOP_WIDTH = 960;
  var TABLET_WIDTH = 768;
  var PADDING_CONTAINER = 15;
  var TABLET_PADDING_CONTAINER = 37;
  var SLIDES_TO_SHOW = 4;
  var WIDTH_HOVERED_SLIDE = 33.5;     // Процентов от ширины контейнера
  var WIDTH_UNHOVERED_SLIDE = 22.16;  // за вычетом паддингов
  var slidesElements = document.querySelectorAll('.portfolio__item');
  var containerElement = document.querySelector('.container');
  var paddingsSum = 0;

  var onSlideHover = function (evt) {
    window.innerWidth > DESKTOP_WIDTH || window.innerWidth <= TABLET_WIDTH ? paddingsSum = (PADDING_CONTAINER * 2) : paddingsSum = (TABLET_PADDING_CONTAINER * 2);
    var currentWidth = containerElement.offsetWidth - paddingsSum;
    var slidesActiveElements = document.querySelector('.portfolio__slider').querySelectorAll('div.slick-active');

    for (var i = 0; i < slidesActiveElements.length; i++) {
      if (slidesActiveElements[i] !== evt.target) {
        slidesActiveElements[i].style.width = currentWidth * (WIDTH_UNHOVERED_SLIDE / 100) + 'px';
      }
      evt.currentTarget.style.width = currentWidth * (WIDTH_HOVERED_SLIDE / 100) + 'px';
    }
  };

  var onSlideOut = function () {
    window.innerWidth > DESKTOP_WIDTH || window.innerWidth <= TABLET_WIDTH ? paddingsSum = (PADDING_CONTAINER * 2) : paddingsSum = (TABLET_PADDING_CONTAINER * 2);
    var currentWidth = containerElement.offsetWidth - paddingsSum;
    var slidesActiveElements = document.querySelector('.portfolio__slider').querySelectorAll('div.slick-slide');

    for (var i = 0; i < slidesActiveElements.length; i++) {
      slidesActiveElements[i].style.width = currentWidth / SLIDES_TO_SHOW + 'px';
    }
  };

  var addSlidesListeners = function (slides) {
    for (var i = 0; i < slides.length; i++) {
      slides[i].addEventListener('mouseover', onSlideHover);
      slides[i].addEventListener('mouseout', onSlideOut);
    }
  };

  var removeSlidesListeners = function (slides) {
    for (var i = 0; i < slides.length; i++) {
      slides[i].removeEventListener('mouseover', onSlideHover);
      slides[i].removeEventListener('mouseout', onSlideOut);
    }
  };

  var addRemoveSlidesListeners = function (slides) {
    window.innerWidth >= DESKTOP_WIDTH ? addSlidesListeners(slides) : removeSlidesListeners(slides);
  };

  var setWidthSlides = function (slides) {
    window.innerWidth > DESKTOP_WIDTH || window.innerWidth <= TABLET_WIDTH ? paddingsSum = (PADDING_CONTAINER * 2) : paddingsSum = (TABLET_PADDING_CONTAINER * 2);
    var currentWidth = containerElement.offsetWidth - paddingsSum;
    if (window.innerWidth > DESKTOP_WIDTH) {
      for (var i = 0; i < slides.length; i++) {
        slides[i].style.width = currentWidth / SLIDES_TO_SHOW + 'px';
      }
    }
    else {
      for (var i = 0; i < slides.length; i++) {
        slides[i].style.width = 'none';
      }
    }
  };

  window.addEventListener('resize', function() {
    setWidthSlides(slidesElements);
    addRemoveSlidesListeners(slidesElements);
  })

  addRemoveSlidesListeners(slidesElements);
  setWidthSlides(slidesElements);
})();
