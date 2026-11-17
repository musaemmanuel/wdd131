// ---------- Footer: year + last modified ----------
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// ---------- Temple data ----------
// The first seven temples are from the assignment. The last three are my additions.
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // ---- My three additions ----
  {
    templeName: "Salt Lake Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
  },
   {
  templeName: "Rome Italy",
  location: "Rome, Italy",
  dedicated: "2019, March, 10",
  area: 41010,
  imageUrl: "https://www.churchofjesuschrist.org/imgs/918b10c2dcb6f84bf96088f039a65ef0cb3cf2d0/full/,500/0/default"
   },
    {
  templeName: "Laie Hawaii",
  location: "Laie, Hawaii, United States",
  dedicated: "1919, November, 27",
  area: 42100,
  imageUrl: "https://www.churchofjesuschrist.org/imgs/38a8c5aa7258fc89729aeb0dfb574ab1e794a25f/full/,500/0/default"
   }
];

// ---------- Helpers ----------
const container = document.querySelector("#temple-cards");
const pageTitle = document.querySelector("#page-title");

// "1888, May, 21" -> 1888
function getYear(temple) {
  return parseInt(temple.dedicated.split(",")[0], 10);
}

// ---------- Build the cards ----------
function createTempleCards(templeList) {
  container.innerHTML = "";

  if (templeList.length === 0) {
    container.innerHTML = '<p class="empty">No temples match this filter.</p>';
    return;
  }

  templeList.forEach((temple) => {
    const card = document.createElement("section");
    card.classList.add("card");

    const name = document.createElement("h3");
    const location = document.createElement("p");
    const dedicated = document.createElement("p");
    const area = document.createElement("p");
    const img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft`;

    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy"); // native lazy loading
    img.setAttribute("width", "400");
    img.setAttribute("height", "250");

    card.append(name, location, dedicated, area, img);
    container.appendChild(card);
  });
}

// ---------- Filters ----------
const filters = {
  home: () => temples,
  old: () => temples.filter((t) => getYear(t) < 1900),
  new: () => temples.filter((t) => getYear(t) > 2000),
  large: () => temples.filter((t) => t.area > 90000),
  small: () => temples.filter((t) => t.area < 10000)
};

const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const choice = link.dataset.filter;

    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    pageTitle.textContent = link.textContent;
    createTempleCards(filters[choice]());

  });
  
});

// Show every temple when the page first loads
createTempleCards(temples);
