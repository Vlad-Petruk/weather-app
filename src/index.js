import { getCurrentWeatherData, processWeatherData } from "./api";
import { createWeatherCard } from "./dom";

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

searchBtn.addEventListener("click", () => {
  createWeatherCard(userInput.value);
});

createWeatherCard('Kamieniec Podolski');

export {serchForWether, weatherCard}