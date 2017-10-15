"use strict";

(function () {
  var menuToggler = document.querySelector(".menu-toggler__elem");
  var mainNav = document.querySelector(".main-nav__wrapper");
  var header = document.querySelector(".page-header__heading");

  function makeDefault() {
    mainNav.style.display = "none";
    menuToggler.classList.remove("menu-toggler__elem--cross");
    menuToggler.classList.add("menu-toggler__elem--burger");

    if (window.innerWidth >= "768") {
      mainNav.style.display = "flex";
      menuToggler.style.display = "none";
    } else {
      menuToggler.style.display = "block";
    }
  }

  function toggleNav() {
    if ( menuToggler.classList.contains("menu-toggler__elem--burger") ) {
      menuToggler.classList.remove("menu-toggler__elem--burger");
      menuToggler.classList.add("menu-toggler__elem--cross");
      menuToggler.parentNode.style = "left: 0";
      mainNav.style.display = "block";
    } else if ( menuToggler.classList.contains("menu-toggler__elem--cross") ) {
      menuToggler.classList.remove("menu-toggler__elem--cross");
      menuToggler.classList.add("menu-toggler__elem--burger");
      menuToggler.parentNode.style = "right: 0";
      mainNav.style.display = "none";
    }
    document.removeEventListener("click", toggleNav);
  }

  menuToggler.addEventListener("click", toggleNav);
  makeDefault();
})();
