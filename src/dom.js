import { serchForWether, weatherCard, } from ".";
import { getConditionsList } from "./api";

const background = document.querySelector('.main-container');
const toggleButons = document.querySelector('.toggleButtons');
const inputGroup = document.querySelector('.input-group');

const header = document.querySelector('.header');
const conditions = document.querySelector('.conditions');
const condIcon = document.querySelector('.cond-icon');
const condText = document.querySelector('.cond-text');
const temperature = document.querySelector('.temp');

const extraBox = document.querySelector('.extra-box');
const wind = document.querySelector('.wind');
const feelsLike = document.querySelector('.feels-like');
const time = document.querySelector('.time');

async function createWeatherCard(city, unit){
    try{
        const cityWeatherData = await serchForWether(city);
        weatherCard.innerHTML= '';

        header.textContent = `${cityWeatherData.location.city}, ${cityWeatherData.location.country}`;
        condIcon.src = cityWeatherData.conditions.icon;
        condText.textContent = cityWeatherData.conditions.text;
    
        weatherCard.appendChild(toggleButons)
        weatherCard.appendChild(inputGroup)
        weatherCard.appendChild(header);
        if (unit === 'F') {
            temperature.textContent = `${cityWeatherData.temp_f}°F`;
        } else if (unit === 'C'){
            temperature.textContent = `${cityWeatherData.temp_c}°C`;
        }

        wind.textContent = `Wind speed ${cityWeatherData.wind_speed} km/h`;
        if (unit === 'F') {
            feelsLike.textContent = `Feels like ${cityWeatherData.feelslike_c}°F`

        } else if (unit === 'C'){
            feelsLike.textContent = `Feels like ${cityWeatherData.feelslike_c}°C`

        }
        const timeData = cityWeatherData.location.time;
        const date = timeData.split(' ')[0];
        const times = timeData.split(' ')[1];

        const dayName = new Date(date).toLocaleString('en-us', {
            weekday: 'long',
        });
        time.textContent = `${dayName} ${times}`;
        
        weatherCard.appendChild(conditions);    
        weatherCard.appendChild(extraBox);

        weatherCard.classList.add('flex-centered-col')
        switch (cityWeatherData.conditions.text){
            case "Overcast ":
                background.style.background = 'blue';
                break;
            default:
                background.style.background = 'black';
                break;
        }
    } catch (error) {
        console.log(error);
    }
}



  export {createWeatherCard}