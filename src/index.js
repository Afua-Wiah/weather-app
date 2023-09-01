function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];
  return `${day} ${hours}:${minutes}`;
}
function displayWeather(response) {
  document.querySelector(".card-header").innerHTML = response.data.name;
  document.querySelector(".card-title").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector(".card-text").innerHTML =
    response.data.weather[0].main;
}

function searchInput(city) {
  let apiKey = "2fabf68687d905fa0708185a43ac4e4b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  searchInput(city);
}
let dateElement = document.querySelector(".card-date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#find-city");
searchForm.addEventListener("submit", search);

searchInput("Accra");
