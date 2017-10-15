"use strict";

(function () {
    var reviewsList = document.querySelector('.reviews__list');
    var reviewsItem = document.querySelectorAll('.reviews__item');
    var arrowLeft = document.querySelector('.reviews__prev');
    var arrowRight = document.querySelector('.reviews__next');
    var width = 100;
    var position = 0;
    var count = 1;
    var advantagesToggle1 = document.querySelector('#advantage-1');
    var advantagesToggle2 = document.querySelector('#advantage-2');
    var advantagesToggle3 = document.querySelector('#advantage-3');
    var advantagesList = document.querySelector('.advantages__list');


    arrowLeft.onclick = function() {
      position = Math.min(position + width * count, 0)
      reviewsList.style.marginLeft = position + '%';
    };

    arrowRight.onclick = function() {
      position = Math.max(position - width * count, -width * (reviewsItem.length - count));
      reviewsList.style.marginLeft = position + '%';
    };

    advantagesToggle1.onclick = function() {
      advantagesToggle2.classList.remove('advantages__toggle--active');
      advantagesToggle3.classList.remove('advantages__toggle--active');
      advantagesToggle1.classList.add('advantages__toggle--active');
      advantagesList.style.left = 0;
    };

    advantagesToggle2.onclick = function() {
      advantagesToggle1.classList.remove('advantages__toggle--active');
      advantagesToggle3.classList.remove('advantages__toggle--active');
      advantagesToggle2.classList.add('advantages__toggle--active');
      advantagesList.style.left = '-100%';
    };

    advantagesToggle3.onclick = function() {
      advantagesToggle1.classList.remove('advantages__toggle--active');
      advantagesToggle2.classList.remove('advantages__toggle--active');
      advantagesToggle3.classList.add('advantages__toggle--active');
      advantagesList.style.left = '-200%';
    };
})();
