'use strict';

(function () {
  var DESKTOP_WIDTH = 1200,
      menuBtnElement = document.querySelector('.page-header__menu-button'),
      menuElement = document.querySelector('.header-menu'),
      socialsElement = document.querySelector('.present__socials-list');

  menuBtnElement.addEventListener('click', function(evt) {
    evt.preventDefault();
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
  });
})();
