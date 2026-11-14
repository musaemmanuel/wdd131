// ========================================
// NIGERIA PLACE PAGE - WDD 131
// Author: Emmanuel Koweh Musa
// ========================================

// Weather information
const temperature = 32;
const windSpeed = 8;

// Wind chill calculation using the metric formula
function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    );
}

// Check wind chill eligibility
let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
}

// Display weather information
document.querySelector("#temperature").textContent = temperature;

document.querySelector("#wind-speed").textContent = windSpeed;

document.querySelector("#wind-chill").textContent = windChill;


// ========================================
// FOOTER INFORMATION
// ========================================

// Display current year
document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

// Display last modified date
document.querySelector("#lastModified").textContent =
    document.lastModified;