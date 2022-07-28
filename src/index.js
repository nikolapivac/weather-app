const location = document.getElementById("location");
const submitBtn = document.querySelector(".search_btn");

submitBtn.addEventListener("click", () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location.value}&APPID=e87b1d0df402ffef61de75ccb3df3f8a`, {mode: "cors"})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log(response);
    })
    
    
})