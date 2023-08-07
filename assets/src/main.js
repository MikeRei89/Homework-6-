const currentDisplayEl = document.getElementById("current-display");

const openWeatherBaseURL = `http://api.openweathermap.org`;
const weatherAPI = `API HERE`;

const getLocationCoords = (search) => {
    const url = `${openWeatherBaseURL}/geo/1.0/direct?appid=${weatherAPI}&q=${search}&limit=1`;
    return mockGeoLocationData[0]; //Mock data for now..    
}

const getWeatherDataByCoords = (lat, lon) => {
    const url = `${openWeatherBaseURL}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${weatherAPI}`
    return mockWeatherData;
}

const displayLocationInfo = (city, data) => {
    const htmlResult = `
    <div class="card">
        <div class="card-body">
        <h2 class="h3 card-title">${city} (9/16/2023)</h2>
        <p class="card-text">Temp: ${data.main.temp}°F</p>
        <p class="card-text">Wind: ${data.wind.speed} MPH</p>
        <p class="card-text">Humidity: ${data.main.humidity} %</p>
        </div>
    </div>   
    `
    console.log(data)
    currentDisplayEl.innerHTML = htmlResult;
}