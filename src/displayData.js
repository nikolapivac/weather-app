const displayData = (response) => {
    const getTimeFromUnix = (timestamp) => {
        let date = new Date(timestamp * 1000);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        let formattedTime = hours + ":" + minutes.substr(-2);

        return formattedTime;
    }

    const cityName = document.querySelector(".city_name");
    const stateName = document.querySelector(".state_name");
    const temperature = document.querySelector(".temperature");
    const mainDescription = document.querySelector(".main_desc");
    const detailDescription = document.querySelector(".detail_desc");
    const feelsLike = document.getElementById("feels");
    const humidity = document.getElementById("humid");
    const pressure = document.getElementById("press");
    const windSpeed = document.getElementById("wind");
    const sunrise = document.getElementById("sunrise");
    const sunset = document.getElementById("sunset");
    const maxTemp = document.getElementById("maxtemp");
    const minTemp = document.getElementById("mintemp");

    cityName.textContent = `${response.name}`;
    stateName.textContent = `${response.sys.country}`;
    temperature.textContent = `${Math.round(response.main.temp)}°`;
    mainDescription.textContent = `${response.weather[0].main}`;
    detailDescription.textContent = `${response.weather[0].description}`;
    feelsLike.textContent = `${Math.round(response.main.feels_like)}°`;
    humidity.textContent = `${response.main.humidity}%`;
    pressure.textContent = `${response.main.pressure} hPa`;
    windSpeed.textContent = `${Math.round(response.wind.speed)} km/h`;
    sunrise.textContent = `${getTimeFromUnix(response.sys.sunrise)} h`;
    sunset.textContent = `${getTimeFromUnix(response.sys.sunset)} h`;
    maxTemp.textContent = `${Math.round(response.main.temp_max)}°`;
    minTemp.textContent = `${Math.round(response.main.temp_min)}°`;

    const getForecast = () => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName.textContent}&appid=e87b1d0df402ffef61de75ccb3df3f8a&units=metric`, {mode: "cors"})
        .then(function(forecast) {
            return forecast.json();
        })
        .then(function(forecast) {
            console.log(forecast);
        })
    }

    getForecast();
}

export { displayData } 