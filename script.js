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

// const setIcon = (icon) => {
//   document
//     .getElementById("icon")
//     .setAttribute("src", `http://openweathermap.org/img/wn/${icon}@2x.png`);
//   console.log(`http://openweathermap.org/img/wn/${icon}@2x.png`);
// };

const APP = (data) => {
  let icon = data.weather[0].icon;
  // setIcon(icon);
};
