"use strict";

(function () {
  var newsItem = document.querySelectorAll(".news__item");

  function hideNewsItem() {
    for (var i = 2; i < newsItem.length; i++) {
      if (window.innerWidth < "1200") {
        newsItem[i].classList.add("hide");
      }
    }
  }

  hideNewsItem();
})();
