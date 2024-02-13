async function getCurrentWeatherData(location) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=7a84c19e7f6245b7814141628240402&q=${location}&days=3&aqi=no&alerts=no`,
      { mode: "cors" },
    );
    const weatherData = await response.json();

    return weatherData;
  } catch (e) {
    console.log(e);
  }
}

function processWeatherData(weatherData) {
  try {
    const myWeatherData = {
      conditions: {
        icon: weatherData.current.condition.icon,
        text: weatherData.current.condition.text,
      },
      temp_c: weatherData.current.temp_c,
      feelslike_c: weatherData.current.feelslike_c,
      temp_f: weatherData.current.temp_f,
      feelslike_f: weatherData.current.feelslike_f,
      wind_speed: weatherData.current.wind_kph,
      cloud: weatherData.current.cloud,
      location: {
        country: weatherData.location.country,
        city: weatherData.location.name,
        time: weatherData.location.localtime,
      },
    };
    console.log(myWeatherData);
    return myWeatherData;
  } catch (e) {
    console.log(e);
  }
}

export { getCurrentWeatherData, processWeatherData };
