// temples.js - hamburger menu and footer dates

const menuButton = document.querySelector("#menu");
const siteNav = document.querySelector("#site-nav");
const yearSpan = document.querySelector("#currentyear");
const modifiedSpan = document.querySelector("#lastModified");

// Show or hide the navigation on small screens
menuButton.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuButton.textContent = isOpen ? "\u2716" : "\u2630";
  menuButton.setAttribute("aria-expanded", isOpen);
});

// Footer: current year and the date this page was last modified
const today = new Date();
yearSpan.textContent = today.getFullYear();
modifiedSpan.textContent = document.lastModified;