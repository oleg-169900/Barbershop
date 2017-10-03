"use strict";

(function () {
  var newsItem = document.querySelectorAll(".news__item");
  var newsBtn = document.querySelector(".news__to-all");

  function hideNewsItem() {
    for (var i = 2; i < newsItem.length; i++) {
      newsItem[i].classList.add("hide");
    }
  }

  function showAllNews(evt) {
    evt.preventDefault();
    for (var i = 2; i < newsItem.length; i++) {
      if (newsItem[i].classList.contains("hide")) {
        newsItem[i].classList.remove("hide");
      } else {
        newsItem[i].classList.add("hide");
      }
    }
  }

  hideNewsItem();

  newsBtn.addEventListener("click", showAllNews);
})();
