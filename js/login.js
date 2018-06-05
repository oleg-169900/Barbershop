"use strict";

(function () {
  var cabinet = document.querySelector(".enter-form");
  var open = document.querySelector(".main-nav__link--login");
  var close = cabinet.querySelector(".enter-form__btn--close");

  function showCabinet(evt) {
    evt.preventDefault();
    cabinet.classList.add("show");
  }

  function closeCabinet(evt) {
    cabinet.classList.remove("show");
  }

  open.addEventListener("click", showCabinet);
  close.addEventListener("click", closeCabinet);
})();
