'use-strict';

(function (){
  var slidesElements = document.querySelectorAll('.portfolio__item');

  var onSlideHover = function (evt) {
    var slidesActiveElements = document.querySelector('.portfolio__slider').querySelectorAll('div.slick-active');

    for (var i = 0; i < slidesActiveElements.length; i++) {
      if (slidesActiveElements[i] !== evt.target) {
        slidesActiveElements[i].style.width = '259.3px';
      }
      evt.currentTarget.style.width = '392.1px';
    }
  };

  var onSlideOut = function () {
    var slidesActiveElements = document.querySelector('.portfolio__slider').querySelectorAll('div.slick-active');

    for (var i = 0; i < slidesActiveElements.length; i++) {
      slidesActiveElements[i].style.width = '292.5px';
    }
  };

  var addSlidesListeners = function (slides) {
    for (var i = 0; i < slides.length; i++) {
      slides[i].addEventListener('mouseover', onSlideHover);
      slides[i].addEventListener('mouseout', onSlideOut);
    }
  };

  addSlidesListeners(slidesElements);
})();
