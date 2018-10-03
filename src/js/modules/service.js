'use strict';

(function () {
  var menuItemsElements = document.querySelectorAll('.service__menu-item');
  var itemsElements = document.querySelectorAll('.service__item');
  var currentMenuItemElement = document.querySelector('.service__menu-item--active');
  var currentItemElement = document.querySelector('.service__item--active');

  menuItemsElements.forEach(function (element, index) {
    element.addEventListener('click', function () {
      currentMenuItemElement.classList.remove('service__menu-item--active');
      currentItemElement.classList.remove('service__item--active');

      element.classList.toggle('service__menu-item--active');
      itemsElements[index].classList.toggle('service__item--active');

      currentMenuItemElement = element;
      currentItemElement = itemsElements[index];
    })
  });
})();
