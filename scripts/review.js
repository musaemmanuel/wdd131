const REVIEW_COUNT_KEY = "reviewCount";

function updateReviewCount() {
    const previousCount = Number(localStorage.getItem(REVIEW_COUNT_KEY)) || 0;
    const newCount = previousCount + 1;
    localStorage.setItem(REVIEW_COUNT_KEY, newCount);
    return newCount;
}

function showConfirmation(count) {
    const params = new URLSearchParams(window.location.search);
    const reviewerName = params.get("userName");

    if (reviewerName && reviewerName.trim() !== "") {
        document.querySelector("#thanks").textContent = `Thank you for your review, ${reviewerName.trim()}!`;
    }

    const reviewWord = count === 1 ? "review" : "reviews";
    document.querySelector("#counter").textContent = `You have completed ${count} ${reviewWord} so far.`;
}

function showFooterInfo() {
    const today = new Date();
    document.querySelector("#copyright").textContent = `\u00A9${today.getFullYear()} Emmanuel Koweh Musa - Nigeria`;
    document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;
}

showConfirmation(updateReviewCount());
showFooterInfo();