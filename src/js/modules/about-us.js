'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var playButtonElement = document.querySelector('.about-us__button');
  var closeButtonElement = document.querySelector('.ubout-us__video-close');
  var videoBlockElement = document.querySelector('.about-us__video-overlay');

  var closeVideo = function () {
    videoBlockElement.classList.add('about-us__video-overlay--hidden');
    closeButtonElement.removeEventListener('click', onCloseButtonClick);
    window.removeEventListener('keydown', onVideoBlockPressEsc);
  };

  var onCloseButtonClick = function () {
    closeVideo();
  };

  var onVideoBlockPressEsc = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closeVideo();
    }
  };

  playButtonElement.addEventListener('click', function (evt) {
    evt.preventDefault();
    videoBlockElement.classList.remove('about-us__video-overlay--hidden');
    closeButtonElement.addEventListener('click', onCloseButtonClick);
    window.addEventListener('keydown', onVideoBlockPressEsc);
  });
})();
