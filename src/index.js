import { getCurrentWeatherData, processWeatherData } from "./api";
import { createWeatherCard } from "./dom";

const userInput = document.querySelector(".input");
const searchBtn = document.querySelector(".searchBtn");
const weatherCard = document.querySelector(".weather-card");
const errorDiv = document.querySelector('.error');
const buttonC = document.querySelector('.buttonC');
const buttonF = document.querySelector('.buttonF');

userInput.value = 'Kamieniec Podolski'

buttonC.addEventListener('click', ()=>{
  createWeatherCard(userInput.value, "C")
})
buttonF.addEventListener('click', ()=>{
  createWeatherCard(userInput.value, "F")
})

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
  createWeatherCard(userInput.value, 'C');
});


createWeatherCard('Kamieniec Podolski','C');

export {serchForWether, weatherCard,userInput}