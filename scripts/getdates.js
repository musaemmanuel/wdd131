// Get the current year
const currentYear = new Date().getFullYear();

// Display the current year in the footer
document.getElementById("copyright").textContent =
    `©${currentYear} Emmanuel M. Koweh | Abuja, Nigeria`;

// Display the date the document was last modified
document.getElementById("lastModified").textContent =
    `Last Modification: ${document.lastModified}`;