let elheader = document.querySelector("header");

window.addEventListener("scroll", function () {
  if (scrollY >= 120) {
    elheader.classList.add("header-scrol");
  } else {
    elheader.classList.remove("header-scrol");
  }
});

let elButton = document.querySelector(".header-site__btn");
let elnav = document.querySelector("nav");
elButton.addEventListener("click", function () {
  elnav.classList.toggle("kok");
});
