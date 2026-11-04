const currentYear = new Date().getFullYear();

document.getElementById("copyright").textContent =
    `©${currentYear} Emmanuel M. Koweh | Abuja, Nigeria`;

document.getElementById("lastModified").textContent =
    `Last Modification: ${document.lastModified}`;