const apiKey = "d8ac0651b7faa161bfc4964d048b16dc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?appid=" + apiKey + "&q=";

const weatherConditions = {
    200: "thunderstorm with light rain",
    201: "thunderstorm with rain",
};

const searchBox = document.querySelector("#default-search");
const searchBtn = document.querySelector("#click-button");
const weatherIcon = document.querySelector(".weather-for-all");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city);
    const data = await response.json();

    document.querySelector("#city").innerHTML = data.name;
    const temp = data.main.temp.toFixed(2);
    const tempSubstring = temp.slice(0, 2);
    document.querySelector("#temp").innerHTML = ` ${tempSubstring} °C`;
    document.querySelector("#humidity").innerHTML = ` ${data.main.humidity} %`;
    document.querySelector("#wind").innerHTML = ` ${data.wind.speed} km/h`;

    const weatherDescription = data.weather[0].description;
    document.querySelector("#weather_d").innerHTML = `is ${weatherDescription}`;

    if (data.weather[0].main === 'Clear') {
        weatherIcon.innerHTML = '<i class="fi fi-rr-sun"></i>';
    } else if (data.weather[0].main === 'Clouds') {
        weatherIcon.innerHTML = '<i class="fi fi-rs-clouds-sun"></i>';
    } else if (data.weather[0].main === 'Drizzle') {
        weatherIcon.innerHTML = '<i class="fi fi-rr-cloud-showers-heavy"></i>';
    } else if (data.weather[0].main === 'Humidity') {
        weatherIcon.innerHTML = '<i class="fi fi-rr-humidity"></i>';
    } else if (data.weather[0].main === 'Mist') {
        weatherIcon.innerHTML = '<i class="fi fi-rr-smog"></i>';
    } else if (data.weather[0].main === 'Rain') {
        weatherIcon.innerHTML = '<i class="fi fi-rr-cloud-rain"></i>';
    } else if (data.weather[0].main === 'Snow') {
        weatherIcon.innerHTML = '<i class="fi fi-rr-cloud-snow"></i>';
    } else {
        weatherIcon.innerHTML = '<i class="fi fi-rr-wind"></i>';
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

