const header = document.querySelector(".header");
const menu = document.querySelector(".header__menu");
const overlay = document.querySelector(".header__overlay");

menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  header.classList.toggle("open");
  overlay.classList.toggle("open");
});

// Footer //

document.getElementById("year").innerHTML = new Date().getFullYear();

let mainNavLinks = document.querySelectorAll("header__nav--links__item a");

mainNavLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    let target = document.querySelector(event.target.hash);
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
