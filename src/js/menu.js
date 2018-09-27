'use strict';

(function () {
  var DESKTOP_WIDTH = 1200,
      menuBtnElement = document.querySelector('.page-header__menu-button'),
      menuElement = document.querySelector('.header-menu'),
      socialsElement = document.querySelector('.present__socials-list');

  menuBtnElement.addEventListener('click', function(evt) {
    evt.preventDefault();
    menuElement.classList.toggle('header-menu--show');
    if (window.innerWidth <= DESKTOP_WIDTH) {
      socialsElement.classList.toggle('present__socials-list--show');
    }
  });
})();
