const setForecastIcons = (list, num) => {
    const weeklyIcon = document.getElementById(`weekly_icon${num}`);
    switch(list.weather[0].icon){
        case "01d":
            weeklyIcon.className = "";
            weeklyIcon.classList.add("wi");
            weeklyIcon.classList.add("wi-day-sunny");
            break;
        case "02d":
            weeklyIcon.className = "";
            weeklyIcon.classList.add("wi");
            weeklyIcon.classList.add("wi-day-cloudy");
            break;
        case "03d":
            weeklyIcon.className = "";
            weeklyIcon.classList.add("wi");
            weeklyIcon.classList.add("wi-cloud");
            break;
        case "04d":
            weeklyIcon.className = "";
            weeklyIcon.classList.add("wi");
            weeklyIcon.classList.add("wi-cloudy");
            break;
        case "09d":
            weeklyIcon.className = "";
            weeklyIcon.classList.add("wi");
            weeklyIcon.classList.add("wi-rain");
            break;
        case "10d":
            weeklyIcon.className = "";
            weeklyIcon.classList.add("wi");
            weeklyIcon.classList.add("wi-day-rain");
            break;
        case "11d":
            weeklyIcon.className = "";
            weeklyIcon.classList.add("wi");
            weeklyIcon.classList.add("wi-thunderstorm");
            break;
        case "13d":
            weeklyIcon.className = "";
            weeklyIcon.classList.add("wi");
            weeklyIcon.classList.add("wi-snow");
            break;
        case "50d":
            weeklyIcon.className = "";
            weeklyIcon.classList.add("wi");
            weeklyIcon.classList.add("wi-fog");
            break;
        case "01n":
            weeklyIcon.className = "";
            weeklyIcon.classList.add("wi");
            weeklyIcon.classList.add("wi-night-clear");
            break;
        case "02n":
            weeklyIcon.className = "";
            weeklyIcon.classList.add("wi");
            weeklyIcon.classList.add("wi-night-alt-cloudy");
            break;
        case "03n":
            weeklyIcon.className = "";
            weeklyIcon.classList.add("wi");
            weeklyIcon.classList.add("wi-cloud");
            break;
        case "04n":
            weeklyIcon.className = "";
            weeklyIcon.classList.add("wi");
            weeklyIcon.classList.add("wi-cloudy");
            break;
        case "09n":
            weeklyIcon.className = "";
            weeklyIcon.classList.add("wi");
            weeklyIcon.classList.add("wi-rain");
            break;
        case "10n":
            weeklyIcon.className = "";
            weeklyIcon.classList.add("wi");
            weeklyIcon.classList.add("wi-night-alt-rain");
            break;
        case "11n":
            weeklyIcon.className = "";
            weeklyIcon.classList.add("wi");
            weeklyIcon.classList.add("wi-thunderstorm");
            break;
        case "13n":
            weeklyIcon.className = "";
            weeklyIcon.classList.add("wi");
            weeklyIcon.classList.add("wi-snow");
            break;
        case "50n":
            weeklyIcon.className = "";
            weeklyIcon.classList.add("wi");
            weeklyIcon.classList.add("wi-fog");
            break;
    }
}

export { setForecastIcons }