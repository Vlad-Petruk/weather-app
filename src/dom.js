import { serchForWether, weatherCard, } from ".";
import { getConditionsList } from "./api";

const background = document.querySelector('body');

async function createWeatherCard(city, unit){
    try{
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
    
        weatherCard.appendChild(cityName);
        if (unit === 'F') {
            let tempFar = document.createElement('p');
            tempFar.textContent = `${cityWeatherData.temp_f}°F`;
            weatherConditions.appendChild(tempFar);
        } else if (unit === 'C'){
            let tempCels = document.createElement('p');
            tempCels.textContent = `${cityWeatherData.temp_c}°C`;
            weatherConditions.appendChild(tempCels);
        }
        weatherConditions.appendChild(condIcon);
        weatherConditions.appendChild(condText);
        
        weatherCard.appendChild(weatherConditions);
        
        weatherCard.appendChild(currentTime);

        weatherCard.classList.add('flex-centered-col')
        switch (cityWeatherData.conditions.text){
            case "Overcast ":
                background.style.background = 'blue';
                break;
            
        }
    } catch (error) {
        console.log(error);
    }
}



  export {createWeatherCard}