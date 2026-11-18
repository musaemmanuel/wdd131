const products = [
    {
        id: "kw-print-01",
        name: "colour printing",
        averagerating: 4.6
    },
    {
        id: "kw-copy-02",
        name: "photocopy and scanning",
        averagerating: 4.4
    },
    {
        id: "kw-design-03",
        name: "graphic design",
        averagerating: 4.7
    },
    {
        id: "kw-bind-04",
        name: "binding and typesetting",
        averagerating: 4.3
    },
    {
        id: "kw-train-05",
        name: "computer training",
        averagerating: 4.8
    },
    {
        id: "kw-web-06",
        name: "web development training",
        averagerating: 4.5
    }
];

const productSelect = document.querySelector("#productName");

function buildProductOptions(productList) {
    const optionsHTML = productList
        .map((product) => `<option value="${product.id}">${product.name}</option>`)
        .join("");
    productSelect.insertAdjacentHTML("beforeend", optionsHTML);
}

function showFooterInfo() {
    const today = new Date();
    document.querySelector("#copyright").textContent = `\u00A9${today.getFullYear()} Emmanuel Koweh Musa - Nigeria`;
    document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;
}

buildProductOptions(products);
showFooterInfo();