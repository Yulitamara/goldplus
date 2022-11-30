const scroll = document.querySelector(".scroll");
const bgNav = document.querySelector(".header__nav");

window.addEventListener("scroll", () => {
  scroll.classList.toggle("active", window.scrollY > 200);
  bgNav.style.backgroundColor = "#1a1c1ded";
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

scroll.addEventListener("click", () => {
  scrollToTop();
});
