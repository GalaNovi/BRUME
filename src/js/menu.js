'use strict';

(function () {
  var DESKTOP_WIDTH = 1200,
      menuBtnElement = document.querySelector('.page-header__menu-button'),
      menuElement = document.querySelector('.header-menu'),
      socialsElement = document.querySelector('.present__socials-list'),
      menuLinksElements = document.querySelectorAll('.header-menu__item a');

  var openCloseMenu = function () {
    menuBtnElement.classList.toggle('page-header__menu-button--open');
    menuBtnElement.classList.toggle('page-header__menu-button--close');
    menuElement.classList.toggle('header-menu--opened');
    if (window.innerWidth <= DESKTOP_WIDTH) {
      if (!socialsElement.classList.contains('present__socials-list--show')) {
        setTimeout(function () {
          socialsElement.classList.toggle('present__socials-list--show');
        }, 300)
      } else {
        socialsElement.classList.toggle('present__socials-list--show');
      }
    }
  };

  menuBtnElement.addEventListener('click', function(evt) {
    evt.preventDefault();
    openCloseMenu();
  });

  menuLinksElements.forEach(function (link) {
    link.addEventListener('click', openCloseMenu);
  });
})();
