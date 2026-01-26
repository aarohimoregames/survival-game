'use strict';



const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

navbarToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    navbarToggler.classList.remove("active");
  });
}



/**
 * search toggle
 */

const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");

for (let i = 0; i < searchTogglers.length; i++) {
  searchTogglers[i].addEventListener("click", function () {
    searchBox.classList.toggle("active");
  });
}



/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

// YouTube video play on click
const playBtn = document.querySelector('.play-btn');
const ytVideo = document.getElementById('ytVideo');
const ytPoster = document.getElementById('ytPoster');

if (playBtn && ytVideo && ytPoster) {
  playBtn.addEventListener('click', () => {
    ytPoster.style.display = 'none';
    playBtn.style.display = 'none';
    ytVideo.style.display = 'block';

    ytVideo.src =
      "https://www.youtube.com/embed/goMGp6VRVMw?autoplay=1&rel=0&modestbranding=1";
  });
}
