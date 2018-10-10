'use strict';

(function () {
  window.hoverSwipe = function (className, options) {
    var elements = document.querySelectorAll(className);
    var delay = 0;
    var smoothness = 100;
    var paintingSpeed = 20;

    options.smoothness ? smoothness = options.smoothness : smoothness = smoothness;
    options.paintingSpeed ? paintingSpeed = options.paintingSpeed : paintingSpeed = paintingSpeed;

    var getSmoothness = function (option) {
      switch (typeof option) {
        case 'string':
          smoothness = option + 'ms';
          break;
        case 'number':
          smoothness = option.toString() + 'ms';
          break;
        default:
          break;
      }
    };

    var parseElement = function (element) {
      var elementLetters = element.textContent.split('');
      element.textContent = '';
      for (var i = 0; i < elementLetters.length; i++) {
        var tempElement = document.createElement('span');
        tempElement.textContent = elementLetters[i];
        tempElement.style.transition = smoothness;
        element.appendChild(tempElement);
      }
    };

    var parseAllElements = function (elementsArray) {
      getSmoothness(smoothness);
      for (var i = 0; i < elementsArray.length; i++) {
        parseElement(elementsArray[i]);
      }
    };

    var onElementMouseEnter = function (evt) {
      var lettersElements = evt.currentTarget.querySelectorAll('span');
      if (options.direction === 'toLeft') {
        for (var i = lettersElements.length - 1; i >= 0 ; i--) {
          lettersElements[i].style.transitionDelay = delay + 'ms';
          i === 0 ? delay = 0 : delay += paintingSpeed;
        }
      } else {
        for (var i = 0; i < lettersElements.length; i++) {
          lettersElements[i].style.transitionDelay = delay + 'ms';
          i === lettersElements.length - 1 ? delay = 0 : delay += paintingSpeed;
        }
      }
    };

    var onElementMouseLeave = function (evt) {
      var lettersElements = evt.currentTarget.querySelectorAll('span');
      if (options.direction === 'toLeft') {
        for (var i = 0; i < lettersElements.length; i++) {
          lettersElements[i].style.transitionDelay = delay + 'ms';
          i === lettersElements.length - 1 ? delay = 0 : delay += paintingSpeed;
        }
      } else {
        for (var i = lettersElements.length - 1; i >= 0 ; i--) {
          lettersElements[i].style.transitionDelay = delay + 'ms';
          i === 0 ? delay = 0 : delay += paintingSpeed;
        }
      }
    };

    parseAllElements(elements);

    elements.forEach(function (element) {
      element.addEventListener('mouseenter', onElementMouseEnter);
      element.addEventListener('mouseleave', onElementMouseLeave);
    });
  }
})();

var paintSwipe = window.hoverSwipe;

paintSwipe('.header-menu__list a', {
  paintingSpeed: 25,
  smoothness: 300
});
