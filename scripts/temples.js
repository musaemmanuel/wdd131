const yearSpan = document.querySelector("#currentyear");
const modifiedSpan = document.querySelector("#lastModified");

const today = new Date();
yearSpan.textContent = today.getFullYear();
modifiedSpan.textContent = document.lastModified;
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#primary-nav");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");


  menuButton.innerHTML = isOpen ? "&#10006;" : "&#9776;";

 
  menuButton.setAttribute("aria-expanded", isOpen);
});