let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
let date = now.getDate();
let year = now.getFullYear();
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}
let currentTime = `${day}, ${month} ${date}, ${year} ${hour}:${minute}`;
let dateTime = document.querySelector("#dateTime");
dateTime.innerHTML = currentTime;


function showCurrentWeather(response){
document.querySelector("#city").innerHTML = response.data.name;
let temperature = Math.round(response.data.main.temp);
let temperatureElement = document.querySelector("#current-temp");
let description = document.querySelector("#current-description");
temperatureElement.innerHTML = `${temperature}°F`;
description.innerHTML = response.data.weather[0].description;
}

function search(event){
  event.preventDefault();
  let apiKey = "617eafff664cc7b609a6d20494a9e0cf";
  let city = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showCurrentWeather)
}

let searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", search);