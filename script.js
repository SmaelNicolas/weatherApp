const WEATHERURL =
  "http://api.openweathermap.org/data/2.5/weather?q=bahia blanca&lang=sp&units=metric&APPID=6a9167c752f7617699b81023544a254b";
// "http://api.openweathermap.org/data/2.5/weather?q=London,uk&callback=test&APPID=6a9167c752f7617699b81023544a254b";

fetch(WEATHERURL)
  .then((response) => response.json())
  .then((data) => {
    APP(data);
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
    alert("fallo");
  });

const setIcon = (icon) => {
  document
    .getElementById("wIcon")
    .setAttribute("src", `http://openweathermap.org/img/wn/${icon}@2x.png`);
  console.log(`http://openweathermap.org/img/wn/${icon}@4x.png`);
};

const setCityName = (cityName) => {
  document.getElementById("cityName").innerHTML = cityName;
};

const setTemp = (temperature) => {
  document.getElementById("temp").innerHTML = temperature;
};
const setFeelsLike = (feelsLike) => {
  document.getElementById("feelsLike").innerHTML = feelsLike;
};
const setHumidiy = (humidity) => {
  document.getElementById("humidity").innerHTML = humidity;
};
const setWind = (wind) => {
  document.getElementById("wind").innerHTML = wind;
};
const setClouds = (clouds) => {
  document.getElementById("clouds").innerHTML = clouds;
};
const setWeatherDescription = (weatherDescription) => {
  document.getElementById("weather").innerHTML = weatherDescription;
};
const setCoords = (coordLat, coordLon) => {
  document.getElementById("lat").innerHTML = coordLat;
  document.getElementById("lon").innerHTML = coordLon;
};

const APP = (data) => {
  let icon = data.weather[0].icon;
  let cityName = data.name;
  let temperature = data.main.temp;
  let feelsLike = data.main.feels_like;
  let humidity = data.main.humidity;
  let wind = data.wind.speed;
  let clouds = data.clouds.all;
  let weatherDescription = data.weather[0].description;
  let coordLat = data.coord.lat;
  let coordLon = data.coord.lon;

  setCityName(cityName);
  setTemp(temperature);
  setFeelsLike(feelsLike);
  setHumidiy(humidity);
  setWind(wind);
  setClouds(clouds);
  setWeatherDescription(weatherDescription);
  setCoords(coordLat, coordLon);

  setIcon(icon);
};
