import { displayForecast } from "./displayForecast";
import { setMainIcon } from "./setMainIcon";

const displayData = (response) => {
    const getTimeFromUnix = (response, sun) => {
        let date;
        if(sun === "rise"){
            date = new Date((response.sys.sunrise + response.timezone) * 1000);
        } else if (sun === "set"){
            date = new Date((response.sys.sunset + response.timezone) * 1000);
        }
        let hours = date.getHours() -2;
        if (hours === -1){
            hours = 23;
        } else if (hours === -2) {
            hours = 22;
        }
        let minutes = "0" + date.getMinutes();
        let formattedTime = hours + ":" + minutes.substr(-2);

        return formattedTime;
    }

    const getTime = (response) => {
        let date = new Date((response.dt + response.timezone) * 1000);
        let hours = date.getHours() - 2;
        if (hours === -1){
            hours = 23;
        } else if (hours === -2) {
            hours = 22;
        }
        let minutes = "0" + date.getMinutes();
        let formattedTime = hours + ":" + minutes.substr(-2);

        return formattedTime;
    }

    const getTodaysDate = (response) => {
        let date = new Date((response.dt + response.timezone) * 1000);
        let dayOfWeek;
        switch (date.getDay()){
            case 0:
                dayOfWeek = "Sun";
                break;
            case 1: 
                dayOfWeek = "Mon";
                break;
            case 2:
                dayOfWeek = "Tue";
                break;
            case 3: 
                dayOfWeek = "Wed";
            break;
            case 4: 
                dayOfWeek = "Thu";
            break;
            case 5:
                dayOfWeek = "Fri";
                break;
            case 6: 
                dayOfWeek = "Sun";
                break;
        }
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        
        return`${dayOfWeek}, ${day}/${month}/${year}`;
    }

    const cityName = document.querySelector(".city_name");
    const stateName = document.querySelector(".state_name");
    const temperature = document.querySelector(".temperature");
    const currentDate = document.querySelector(".current_date");
    const currentTime = document.querySelector(".current_time");
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
    currentDate.textContent = `${getTodaysDate(response)}`;
    currentTime.textContent = `${getTime(response)} h`;
    mainDescription.textContent = `${response.weather[0].main}`;
    setMainIcon(response);
    detailDescription.textContent = `${response.weather[0].description}`;
    feelsLike.textContent = `${Math.round(response.main.feels_like)}°`;
    humidity.textContent = `${response.main.humidity}%`;
    pressure.textContent = `${response.main.pressure} hPa`;
    windSpeed.textContent = `${Math.round(response.wind.speed)} km/h`;
    sunrise.textContent = `${getTimeFromUnix(response, "rise")} h`;
    sunset.textContent = `${getTimeFromUnix(response, "set")} h`;
    maxTemp.textContent = `${Math.round(response.main.temp_max)}°`;
    minTemp.textContent = `${Math.round(response.main.temp_min)}°`;

    displayForecast(cityName);
}

export { displayData } 