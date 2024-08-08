const app = document.querySelector('.weather-app');
const temp = document.querySelector('.temp');
const dateOutput = document.querySelector('.date');
const timeOutput = document.querySelector('.time');
const conditionOutput = document.querySelector('.condition');
const nameOutput = document.querySelector('.name');
const icon = document.querySelector('.icon');
const cloudOutput = document.querySelector('.cloud');
const humidityOutput = document.querySelector('.humidity');
const windOutput = document.querySelector('.wind');
const form = document.querySelector('#locationInput'); 
const search = document.querySelector('.search');
const btn = document.querySelector('.submit');
const cities = document.querySelectorAll('.city');

let cityInput = "Amsterdam";

// Fetch weather data for the default city (Amsterdam)
fetchWeatherData();

cities.forEach((city) => {
    city.addEventListener('click', (e) => {
        cityInput = e.target.innerHTML.trim(); // Ensure there's no extra whitespace
        fetchWeatherData();
        app.style.opacity = "0"; 
    });
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (search.value.length === 0) {
        alert('Please type in a city name');
    } else {
        cityInput = search.value.trim(); // Ensure there's no extra whitespace
        fetchWeatherData();
        search.value = "";
        app.style.opacity = "0"; y
    }
});

function dayOfTheWeek(day, month, year) {
    const weekday = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    return weekday[new Date(`${year}-${month}-${day}`).getDay()]; 
}

function fetchWeatherData() {
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=b409962d84554cf8a6e12617240808&q=${encodeURIComponent(cityInput)}`;
    
    console.log(`Fetching data from: ${apiUrl}`); 

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Log the API response

            if (data.current && typeof data.current.temp_c !== 'undefined') {
                temp.innerHTML = data.current.temp_c + "&#176;"; // Corrected property
            } else {
                console.error('Temperature data is missing');
                temp.innerHTML = "Data unavailable";
            }

            conditionOutput.innerHTML = data.current.condition.text;

            const date = data.location.localtime;
            const y = parseInt(date.substr(0, 4));
            const m = parseInt(date.substr(5, 2));
            const d = parseInt(date.substr(8, 2));
            const time = date.substr(11, 5);
            
            dateOutput.innerHTML = `${dayOfTheWeek(d, m, y)} ${d}/${m}/${y}`;
            timeOutput.innerHTML = time;

            nameOutput.innerHTML = data.location.name;

            const code = data.current.condition.code;
            let timeOfDay = data.current.is_day ? "day" : "night";

            // Get the corresponding icon file
            const iconId = weatherIcons[code] ? weatherIcons[code][timeOfDay] : "default.png";
            icon.src = `./icons/${timeOfDay}/${iconId}`;

            cloudOutput.innerHTML = data.current.cloud + "%";
            humidityOutput.innerHTML = data.current.humidity + "%";
            windOutput.innerHTML = data.current.wind_kph + "km/h";

            if (code == 1000) {
                app.style.backgroundImage = `url(./images/${timeOfDay}/clear.jpg)`;
                btn.style.background = timeOfDay === "night" ? "#181e27" : "#e5ba92";
            } else if ([1003, 1006, 1009, 1030, 1069, 1087, 1135, 1273, 1276, 1279, 1282].includes(code)) {
                app.style.backgroundImage = `url(./images/${timeOfDay}/cloudy.jpg)`;
                btn.style.background = timeOfDay === "night" ? "#181e27" : "#fa6d1b";
            } else if ([1063, 1069, 1072, 1150, 1153, 1180, 1183, 1186, 1189, 1192, 1195, 1204, 1207, 1240, 1243, 1246, 1249, 1252].includes(code)) {
                app.style.backgroundImage = `url(./images/${timeOfDay}/rainy.jpg)`;
                btn.style.background = timeOfDay === "night" ? "#325c80" : "#647d75";
            } else {
                app.style.backgroundImage = `url(./images/${timeOfDay}/snowy.jpg)`;
                btn.style.background = timeOfDay === "night" ? "#1b1b1b" : "#4d72aa";
            }
            app.style.opacity = "1";
        })
        .catch(error => {
            console.error('Error fetching weather data:', error); // Log the error
            alert('City not found, please try again');
            app.style.opacity = "1";
        });
}


const weatherIcons = {
    1000: { day: "113.png", night: "113.png" },
    1003: { day: "116.png", night: "116.png" },
    1006: { day: "119.png", night: "119.png" },
    1009: { day: "122.png", night: "122.png" },
    1030: { day: "143.png", night: "143.png" },
    1063: { day: "176.png", night: "176.png" },
    1066: { day: "179.png", night: "179.png" },
    1069: { day: "182.png", night: "182.png" },
    1072: { day: "185.png", night: "185.png" },
    1087: { day: "200.png", night: "200.png" },
    1114: { day: "227.png", night: "227.png" },
    1117: { day: "230.png", night: "230.png" },
    1135: { day: "248.png", night: "248.png" },
    1147: { day: "260.png", night: "260.png" },
    1150: { day: "263.png", night: "263.png" },
    1153: { day: "266.png", night: "266.png" },
    1168: { day: "281.png", night: "281.png" },
    1171: { day: "284.png", night: "284.png" },
    1180: { day: "293.png", night: "293.png" },
    1183: { day: "296.png", night: "296.png" },
    1186: { day: "299.png", night: "299.png" },
    1189: { day: "302.png", night: "302.png" },
    1192: { day: "305.png", night: "305.png" },
    1195: { day: "308.png", night: "308.png" },
    1198: { day: "311.png", night: "311.png" },
    1201: { day: "314.png", night: "314.png" },
    1204: { day: "317.png", night: "317.png" },
    1207: { day: "320.png", night: "320.png" },
    1210: { day: "323.png", night: "323.png" },
    1213: { day: "326.png", night: "326.png" },
    1216: { day: "329.png", night: "329.png" },
    1219: { day: "332.png", night: "332.png" },
    1222: { day: "335.png", night: "335.png" },
    1225: { day: "338.png", night: "338.png" },
    1237: { day: "350.png", night: "350.png" },
    1240: { day: "353.png", night: "353.png" },
    1243: { day: "356.png", night: "356.png" },
    1246: { day: "359.png", night: "359.png" },
    1249: { day: "362.png", night: "362.png" },
    1252: { day: "365.png", night: "365.png" },
    1255: { day: "368.png", night: "368.png" },
    1258: { day: "371.png", night: "371.png" },
    1261: { day: "374.png", night: "374.png" },
    1264: { day: "377.png", night: "377.png" },
    1273: { day: "386.png", night: "386.png" },
    1276: { day: "389.png", night: "389.png" },
    1279: { day: "392.png", night: "392.png" },
    1282: { day: "395.png", night: "395.png" },
};
