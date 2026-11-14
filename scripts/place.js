// GET CURRENT YEAR

const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;


// GET LAST MODIFIED DATE

const lastModified = document.lastModified;

document.querySelector("#lastModified").textContent =
    `Last Modification: ${lastModified}`;


// WEATHER DATA

const temperature = 28;

const windSpeed = 12;


// WIND CHILL CALCULATION

function calculateWindChill(temp, wind) {

    if (temp <= 10 && wind > 4.8) {

        const windChill =
            13.12 +
            (0.6215 * temp) -
            (11.37 * Math.pow(wind, 0.16)) +
            (0.3965 * temp * Math.pow(wind, 0.16));

        return `${windChill.toFixed(1)} °C`;

    } else {

        return "N/A";

    }

}


// DISPLAY WEATHER INFORMATION

document.querySelector("#temperature").textContent =
    `${temperature} °C`;

document.querySelector("#wind").textContent =
    `${windSpeed} km/h`;

document.querySelector("#windchill").textContent =
    calculateWindChill(temperature, windSpeed);