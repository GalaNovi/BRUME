'use strict';

(function () {
  var sectionElement = document.querySelector('.portfolio');
  var buttonAll = sectionElement.querySelector('.portfolio__navigation-button--all');
  var buttonDesign = sectionElement.querySelector('.portfolio__navigation-button--design');
  var buttonWorks = sectionElement.querySelector('.portfolio__navigation-button--works');

  var changeActiveButton = function(clickedButton) {
    var activeButtonElement = sectionElement.querySelector('.portfolio__navigation-button--active');
    activeButtonElement.classList.remove('portfolio__navigation-button--active');
    clickedButton.classList.add('portfolio__navigation-button--active');
  };

  var addButtonListener = function (button, itemClass) {
    button.addEventListener('click', function (evt) {
      evt.preventDefault();
      changeActiveButton(evt.target);
      $('.portfolio__slider').slick('slickUnfilter');
      if (itemClass) {
        $('.portfolio__slider').slick('slickFilter', itemClass);
      }
    });
  };

  addButtonListener(buttonAll);
  addButtonListener(buttonDesign, '.portfolio__item--design');
  addButtonListener(buttonWorks, '.portfolio__item--works');
})();
