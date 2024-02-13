let getCurrentWeatherData = (location) => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=7a84c19e7f6245b7814141628240402&q=${location}`
    )
    .then(function(response){
        return response.json();
    })
    .then(function(response) {
        return response;
      })
    .catch(e=>{console.log(e)})
}

function processWeatherData(data) {

}

getCurrentWeatherData('kyiv')