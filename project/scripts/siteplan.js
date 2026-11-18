function showFooterInfo() {
    const today = new Date();
    document.querySelector("#copyright").textContent = `\u00A9${today.getFullYear()} Emmanuel Koweh Musa - Nigeria`;
    document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;
}

showFooterInfo();