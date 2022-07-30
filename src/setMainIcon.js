const setMainIcon = (response) => {
    const mainIcon = document.getElementById("main_icon");
    const mainContainer = document.querySelector(".main_container");

    switch(response.weather[0].icon){
        case "01d":
            mainIcon.className = "";
            mainIcon.classList.add("wi");
            mainIcon.classList.add("wi-day-sunny");
            mainContainer.style.backgroundImage = "url('./photos/sunny.webp')";
            break;
        case "02d":
            mainIcon.className = "";
            mainIcon.classList.add("wi");
            mainIcon.classList.add("wi-day-cloudy");
            mainContainer.style.backgroundImage = "url('./photos/cloudy.webp')";
            break;
        case "03d":
            mainIcon.className = "";
            mainIcon.classList.add("wi");
            mainIcon.classList.add("wi-cloud");
            mainContainer.style.backgroundImage = "url('./photos/cloudy.webp')";
            break;
        case "04d":
            mainIcon.className = "";
            mainIcon.classList.add("wi");
            mainIcon.classList.add("wi-cloudy");
            mainContainer.style.backgroundImage = "url('./photos/cloudy.webp')";
            break;
        case "09d":
            mainIcon.className = "";
            mainIcon.classList.add("wi");
            mainIcon.classList.add("wi-rain");
            mainContainer.style.backgroundImage = "url('./photos/rainy.jpg')";
            break;
        case "10d":
            mainIcon.className = "";
            mainIcon.classList.add("wi");
            mainIcon.classList.add("wi-day-rain");
            mainContainer.style.backgroundImage = "url('./photos/rainy.jpg')";
            break;
        case "11d":
            mainIcon.className = "";
            mainIcon.classList.add("wi");
            mainIcon.classList.add("wi-thunderstorm");
            mainContainer.style.backgroundImage = "url('./photos/thunderstorm.jpg')";
            break;
        case "13d":
            mainIcon.className = "";
            mainIcon.classList.add("wi");
            mainIcon.classList.add("wi-snow");
            mainContainer.style.backgroundImage = "url('./photos/snow.webp')";
            break;
        case "50d":
            mainIcon.className = "";
            mainIcon.classList.add("wi");
            mainIcon.classList.add("wi-fog");
            mainContainer.style.backgroundImage = "url('./photos/foggy.jpg')";
            break;
        case "01n":
            mainIcon.className = "";
            mainIcon.classList.add("wi");
            mainIcon.classList.add("wi-night-clear");
            mainContainer.style.backgroundImage = "url('./photos/night-clear.webp')";
            break;
        case "02n":
            mainIcon.className = "";
            mainIcon.classList.add("wi");
            mainIcon.classList.add("wi-night-alt-cloudy");
            mainContainer.style.backgroundImage = "url('./photos/night-cloudy.jpg')";
            break;
        case "03n":
            mainIcon.className = "";
            mainIcon.classList.add("wi");
            mainIcon.classList.add("wi-cloud");
            mainContainer.style.backgroundImage = "url('./photos/night-cloudy.jpg')";
            break;
        case "04n":
            mainIcon.className = "";
            mainIcon.classList.add("wi");
            mainIcon.classList.add("wi-cloudy");
            mainContainer.style.backgroundImage = "url('./photos/night-cloudy.jpg')";
            break;
        case "09n":
            mainIcon.className = "";
            mainIcon.classList.add("wi");
            mainIcon.classList.add("wi-rain");
            mainContainer.style.backgroundImage = "url('./photos/night-rainy.jpg')";
            break;
        case "10n":
            mainIcon.className = "";
            mainIcon.classList.add("wi");
            mainIcon.classList.add("wi-night-alt-rain");
            mainContainer.style.backgroundImage = "url('./photos/night-rainy.jpg')";
            break;
        case "11n":
            mainIcon.className = "";
            mainIcon.classList.add("wi");
            mainIcon.classList.add("wi-thunderstorm");
            mainContainer.style.backgroundImage = "url('./photos/thunderstorm.jpg')";
            break;
        case "13n":
            mainIcon.className = "";
            mainIcon.classList.add("wi");
            mainIcon.classList.add("wi-snow");
            mainContainer.style.backgroundImage = "url('./photos/night-snow.jpg')";
            break;
        case "50n":
            mainIcon.className = "";
            mainIcon.classList.add("wi");
            mainIcon.classList.add("wi-fog");
            mainContainer.style.backgroundImage = "url('./photos/night-fog.jpg')";
            break;
        
    }
}

export {setMainIcon}