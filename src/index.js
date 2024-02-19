import { getCurrentWeatherData, processWeatherData } from "./api";

const userInput = document.querySelector(".input");
const searchBtn = document.querySelector(".searchBtn");
const weatherCard = document.querySelector(".weather-card");
const errorDiv = document.querySelector('.error');

function handleInput(){

}

async function serchForWether(city) {
  try{
    errorDiv.textContent = '';
    const myData = await getCurrentWeatherData(city);
    if (myData == undefined){
      errorDiv.textContent = 'No matching location found'
    }
    console.log(myData);
    const parsedData = processWeatherData(myData);
    return parsedData
  } catch (e) {
    console.log(e)
  }
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

createWeatherCard('Kamieniec Podolski');

export {serchForWether}