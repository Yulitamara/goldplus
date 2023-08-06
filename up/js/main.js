/*=============== Navbar ===============*/
const header = document.querySelector(".header");
const menu = document.querySelector(".header__menu");
const overlay = document.querySelector(".header__overlay");

// Function to close the navbar
const closeNavbar = () => {
  menu.classList.remove("open");
  header.classList.remove("open");
  overlay.classList.remove("open");
};

// Toggle navbar on menu click
menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  header.classList.toggle("open");
  overlay.classList.toggle("open");
});

// Get all the links in the navigation
let mainNavLinks = document.querySelectorAll(".header__nav--links__item a");

// Add click event listener to each link
mainNavLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    closeNavbar(); // Close the navbar when a link is clicked
    let target = document.querySelector(event.target.hash);

    // Check if the window width is greater than 1200px
    const windowWidth = window.innerWidth;
    const offset = windowWidth > 1200 ? 90 : 0;

    // Scroll to target element with the appropriate offset
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - offset,
      behavior: "smooth",
    });
  });
});

// Close the navbar when clicking outside of it
window.addEventListener("click", (event) => {
  const target = event.target;
  if (!header.contains(target)) {
    closeNavbar();
  }
});

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactPhone = document.getElementById("contact-phone"),
  contactOrganization = document.getElementById("contact-organization"),
  contactMessage = document.getElementById("contact-message"),
  contactError = document.getElementById("contact-error");

const sendEmail = (e) => {
  e.preventDefault();

  // Check if the field has a value
  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactPhone.value === "" ||
    contactMessage.value === ""
  ) {
    // Add and remove color
    contactError.classList.remove("color-blue");
    contactError.classList.add("color-red");

    // Show message
    contactError.textContent = "נא מלאו את כל השדות 📥";
  } else {
    // serviceID - templateID - #form - publickey
    emailjs
      .sendForm(
        "service_ky4w1yd",
        "template_fa15r54",
        "#contact-form",
        "rexvJSVw22UHGT0HS"
      )
      .then(
        () => {
          // Show message and add color
          contactError.classList.add("color-blue");
          contactError.textContent = "ההודעה נשלחה ✅";

          // Remove message after five seconds
          setTimeout(() => {
            contactError.textContent = "";
          }, 5000);
        },
        (error) => {
          alert("OOPS! SOMETHING HAS FAILED...", error);
        }
      );

    // To clear the input field
    contactName.value = "";
    contactEmail.value = "";
    contactMessage.value = "";
    contactPhone.value = "";
    contactOrganization.value = "";
  }
};
contactForm.addEventListener("submit", sendEmail);

/*=============== Footer ===============*/
document.getElementById("year").innerHTML = new Date().getFullYear();

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true /* Animation repeat */,
});

sr.reveal(`.image-left`, {
  origin: "left",
});
sr.reveal(`.image-right`, {
  origin: "right",
});

// ScrollReveal().reveal(".sale-image", { delay: 500 });
