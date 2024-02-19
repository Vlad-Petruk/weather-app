import { getCurrentWeatherData, processWeatherData } from "./api";

const userInput = document.querySelector(".input");
const searchBtn = document.querySelector(".searchBtn");
const weatherCard = document.querySelector(".weather-card");

function handleInput(){

}

async function serchForWether(city) {
  const myData = await getCurrentWeatherData(city);
  console.log(myData);
  const parsedData = processWeatherData(myData);
  return parsedData
  console.log(parsedData.cloud, parsedData.temp_c);
}

async function createWeatherCard(city){
  const cityWeatherData = await serchForWether(city);
  console.log(cityWeatherData);
  weatherCard.innerHTML= '';
  let cityName = document.createElement('p')
  cityName.textContent = `${cityWeatherData.location.city}, ${cityWeatherData.location.country}`;
  let currentTime = document.createElement('p');
  currentTime.textContent = cityWeatherData.location.time;

  let weatherConditions = document.createElement('div')
  weatherConditions.classList.add('flex-centered')
  let condIcon = document.createElement('img');
  condIcon.src = cityWeatherData.conditions.icon;
  let condText = document.createElement('p');
  condText.textContent = cityWeatherData.conditions.text;
  weatherConditions.appendChild(condIcon);
  weatherConditions.appendChild(condText);

  weatherCard.appendChild(cityName);
  weatherCard.appendChild(currentTime);
  weatherCard.appendChild(weatherConditions)
}

searchBtn.addEventListener("click", () => {
  createWeatherCard(userInput.value);
});

