// change header background color on scroll


const header = document.querySelector(".header");

const activeHeader = function() {
  if (window.scrollY > 0 || window.pageYOffset > 0) {
    document.querySelector(".header").classList.add("header__color");
    document.querySelector("header").classList.remove("header__transparent");
  } else {
    document.querySelector("header").classList.remove("header__color");
    document.querySelector("header").classList.add("header__transparent");
  }
};
activeHeader();
  window.addEventListener("scroll", activeHeader)
