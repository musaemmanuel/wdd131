// Static weather values (match what is shown in the Weather section)
const temperature = 32; // °C
const windSpeed = 8; // km/h

// Metric wind chill formula (°C and km/h), one-line return
function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

// Only calculate when conditions are viable: temp <= 10 °C and wind > 4.8 km/h
let windChill = "N/A";
if (temperature <= 10 && windSpeed > 4.8) {
    windChill = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
}

document.querySelector("#temperature").textContent = temperature;
document.querySelector("#wind-speed").textContent = windSpeed;
document.querySelector("#wind-chill").textContent = windChill;

// Footer: current year and last modified date
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;