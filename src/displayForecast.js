import { setForecastIcons } from "./setForecastIcons";

const displayForecast = (cityName) => {
    const getDateFromInfo = (dateInfo) => {
        let day = dateInfo.getDate()
        let month = dateInfo.getMonth() + 1;
        let date = day + "." + month;

        return date;
    }

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName.textContent}&appid=e87b1d0df402ffef61de75ccb3df3f8a&units=metric`, {mode: "cors"})
    .then(function(forecast) {
        return forecast.json();
    })
    .then(function(forecast) {
        console.log(forecast);
        const forecastContainer = document.querySelector(".forecast");
        const day1 = forecastContainer.querySelector(".day1_title");
        const day2 = forecastContainer.querySelector(".day2_title");
        const day3 = forecastContainer.querySelector(".day3_title");
        const day4 = forecastContainer.querySelector(".day4_title");
        const day5 = forecastContainer.querySelector(".day5_title");

        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 1);
        day1.textContent = `${getDateFromInfo(currentDate)}`;
        currentDate.setDate(currentDate.getDate() + 1);
        day2.textContent = `${getDateFromInfo(currentDate)}`;
        currentDate.setDate(currentDate.getDate() + 1);
        day3.textContent = `${getDateFromInfo(currentDate)}`;
        currentDate.setDate(currentDate.getDate() + 1);
        day4.textContent = `${getDateFromInfo(currentDate)}`;
        currentDate.setDate(currentDate.getDate() + 1);
        day5.textContent = `${getDateFromInfo(currentDate)}`;

        const temp1 = document.getElementById("day_temp1");
        const temp2 = document.getElementById("day_temp2");
        const temp3 = document.getElementById("day_temp3");
        const temp4 = document.getElementById("day_temp4");
        const temp5 = document.getElementById("day_temp5");

        temp1.textContent = `${Math.round(forecast.list[7].main.temp)}`;
        temp2.textContent = `${Math.round(forecast.list[15].main.temp)}`;
        temp3.textContent = `${Math.round(forecast.list[23].main.temp)}`;
        temp4.textContent = `${Math.round(forecast.list[31].main.temp)}`;
        temp5.textContent = `${Math.round(forecast.list[39].main.temp)}`;

        setForecastIcons(forecast.list[7], 1);
        setForecastIcons(forecast.list[15], 2);
        setForecastIcons(forecast.list[23], 3);
        setForecastIcons(forecast.list[31], 4);
        setForecastIcons(forecast.list[39], 5);
    })
}

export { displayForecast }