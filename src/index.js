import { getCurrentWeatherData, processWeatherData } from "./api";

const userInput = document.querySelector(".input");
const searchBtn = document.querySelector(".searchBtn");

async function serchForWether(city) {
  const myData = await getCurrentWeatherData(city);
  console.log(myData);
  const parsedData = processWeatherData(myData);
  console.log(parsedData.cloud, parsedData.temp_c);
}

searchBtn.addEventListener("click", () => {
  serchForWether(userInput.value);
});
