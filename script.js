const initFetch = (string) => {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${string}&lang=sp&units=metric&APPID=6a9167c752f7617699b81023544a254b`
  )
    .then((response) => response.json())
    .then((data) => {
      APP(data);
      let inputInfo = document.getElementById("inputInfo");
      inputInfo.style.display = "none";
      let container = document.getElementById("container");
      container.style.display = "flex";
    })
    .catch((error) => {
      console.log(error);
      alert("Ingrese una localidad valida");
    });
};

const setIcon = (icon) => {
  document
    .getElementById("wIcon")
    .setAttribute("src", `http://openweathermap.org/img/wn/${icon}@4x.png`);
};

const setCityName = (cityName, country) => {
  document.getElementById("cityName").innerHTML = `${cityName} , ${country}  `;
};

const setTemp = (temperature) => {
  document.getElementById("temp").innerHTML = Math.floor(temperature);
};

const setFeelsLike = (feelsLike) => {
  document.getElementById("feelsLike").innerHTML = Math.floor(feelsLike);
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
  document.getElementById("weather").innerHTML = capitalize(weatherDescription);
};

const setCoords = (coordLat, coordLon) => {
  document.getElementById("lat").innerHTML = coordLat;
  document.getElementById("lon").innerHTML = coordLon;
};

const capitalize = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};

const APP = (data) => {
  let icon = data.weather[0].icon;
  let cityName = data.name;
  let country = data.sys.country;
  let temperature = data.main.temp;
  let feelsLike = data.main.feels_like;
  let humidity = data.main.humidity;
  let wind = data.wind.speed;
  let clouds = data.clouds.all;
  let weatherDescription = data.weather[0].description;
  let coordLat = data.coord.lat;
  let coordLon = data.coord.lon;
  console.log(data);

  setCityName(cityName, country);
  setTemp(temperature);
  setFeelsLike(feelsLike);
  setHumidiy(humidity);
  setWind(wind);
  setClouds(clouds);
  setWeatherDescription(weatherDescription);
  // setCoords(coordLat, coordLon);
  setIcon(icon);
};

const startApp = () => {
  let button = document.getElementById("start");

  inputValue.addEventListener("keyup", () => {
    if (event.keyCode === 13) {
      let value = document.getElementById("inputValue").value;
      if (isNaN(value.toString())) {
        initFetch(value);

        console.log(value);
      } else {
        alert("Ingrese un texto");
      }
    }
  });

  button.addEventListener("click", () => {
    let value = document.getElementById("inputValue").value;
    if (isNaN(value.toString())) {
      initFetch(value);

      console.log(value);
    } else {
      alert("Ingrese un texto");
    }
  });
};

startApp();
