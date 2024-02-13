// add webpack, linter, prettier and so on

async function getCurrentWeatherData(location) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=7a84c19e7f6245b7814141628240402&q=${location}`,
    );
    const weatherData = await response.json();
    // const weatherDatas = weatherData.current.temp_c;
    //  console.log(weatherDatas)
    // console.log(weatherData)
    return weatherData;
  } catch (e) {
    console.log(e);
  }
}

function processWeatherData(weatherData) {
  const myWeatherData = {
    cloud: weatherData.current.cloud,
  };
  console.log(myWeatherData);
  return myWeatherData;
}

async function getD() {
  const myData = await getCurrentWeatherData("kyiv");
  console.log(myData);
  const parsedData = processWeatherData(myData);
  console.log(parsedData.cloud);
}
getD();
