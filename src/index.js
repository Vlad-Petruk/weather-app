import { getCurrentWeatherData, processWeatherData } from "./api";

async function getD() {
  const myData = await getCurrentWeatherData("kyiv");
  console.log(myData);
  const parsedData = processWeatherData(myData);
  console.log(parsedData.cloud);
}
getD();
