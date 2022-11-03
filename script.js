
const apikey = "0c371f452d85f838db1f2377cbf23e09";
const latLiege = 50.6333;
const lonLiege = 5.56667;
const langage = "fr";
const counter = 7;

// https://api.openweathermap.org/data/2.5/forecast?lat=50.6333&lon=5.56667&appid=0c371f452d85f838db1f2377cbf23e09&lang=fr&cnt=7&units=metric

const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latLiege}&lon=${lonLiege}&appid=${apikey}&lang=${langage}&cnt=${counter}&units=metric`;
console.log(weatherUrl);

  fetch(weatherUrl)
    .then((response) => response.json())
    .then((response) =>
      response.list.forEach((call) => {
        const templateElement = document.importNode(
          document.querySelector("template").content,
          true
        );
        templateElement.getElementById("date").textContent = call.dt_txt;
        templateElement.getElementById("maxTemp").textContent = `${Math.round(
          call.main.temp_max
        )} °C`;
        templateElement.getElementById("minTemp").textContent = `${Math.round(
          call.main.temp_min
        )} °C`;
        templateElement.getElementById("windSpeed").textContent = `${Math.round(
          call.wind.speed *3.6)} km/h`;
        templateElement.getElementById("description").textContent =
          call.weather[0].description;
        templateElement.getElementById(
          "image"
        ).src = `https://openweathermap.org/img/wn/${call.weather[0].icon}@2x.png`;
        document.querySelector("main").appendChild(templateElement);
      })
    );
