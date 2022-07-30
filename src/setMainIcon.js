const setMainIcon = (response) => {
    const mainIcon = document.getElementById("main_icon");
    switch(response.weather[0].icon){
        case "01d":
            mainIcon.className = "";
            mainIcon.classList.add("wi");
            mainIcon.classList.add("wi-day-sunny");
            break;
        case "02d":
            mainIcon.className = "";
            mainIcon.classList.add("wi");
            mainIcon.classList.add("wi-day-cloudy");
            break;
        case "03d":
            mainIcon.className = "";
            mainIcon.classList.add("wi");
            mainIcon.classList.add("wi-cloud");
            break;
        case "04d":
            mainIcon.className = "";
            mainIcon.classList.add("wi");
            mainIcon.classList.add("wi-cloudy");
            break;
        case "09d":
            mainIcon.className = "";
            mainIcon.classList.add("wi");
            mainIcon.classList.add("wi-rain");
            break;
        case "10d":
            mainIcon.className = "";
            mainIcon.classList.add("wi");
            mainIcon.classList.add("wi-day-rain");
            break;
        case "11d":
            mainIcon.className = "";
            mainIcon.classList.add("wi");
            mainIcon.classList.add("wi-thunderstorm");
            break;
        case "13d":
            mainIcon.className = "";
            mainIcon.classList.add("wi");
            mainIcon.classList.add("wi-snow");
            break;
        case "50d":
            mainIcon.className = "";
            mainIcon.classList.add("wi");
            mainIcon.classList.add("wi-fog");
            break;
        case "01n":
            mainIcon.className = "";
            mainIcon.classList.add("wi");
            mainIcon.classList.add("wi-night-clear");
            break;
        case "02n":
            mainIcon.className = "";
            mainIcon.classList.add("wi");
            mainIcon.classList.add("wi-night-alt-cloudy");
            break;
        case "03n":
            mainIcon.className = "";
            mainIcon.classList.add("wi");
            mainIcon.classList.add("wi-cloud");
            break;
        case "04n":
            mainIcon.className = "";
            mainIcon.classList.add("wi");
            mainIcon.classList.add("wi-cloudy");
            break;
        case "09n":
            mainIcon.className = "";
            mainIcon.classList.add("wi");
            mainIcon.classList.add("wi-rain");
            break;
        case "10n":
            mainIcon.className = "";
            mainIcon.classList.add("wi");
            mainIcon.classList.add("wi-night-alt-rain");
            break;
        case "11n":
            mainIcon.className = "";
            mainIcon.classList.add("wi");
            mainIcon.classList.add("wi-thunderstorm");
            break;
        case "13n":
            mainIcon.className = "";
            mainIcon.classList.add("wi");
            mainIcon.classList.add("wi-snow");
            break;
        case "50n":
            mainIcon.className = "";
            mainIcon.classList.add("wi");
            mainIcon.classList.add("wi-fog");
            break;
        
    }
}

export {setMainIcon}