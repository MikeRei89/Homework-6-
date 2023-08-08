const currentDisplayEl = document.getElementById("current-display");
const forecastDisplayEl = document.getElementById("weather-future");

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

const showWeatherInfo = () => {
    $(currentDisplayEl).show();
    $(forecastDisplayEl).show();
}

const hideWeatherInfo = () => {
    $(currentDisplayEl).hide();
    $(forecastDisplayEl).hide();
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
    currentDisplayEl.innerHTML = htmlResult;
}

const displayForecastInfo = (data) => {
    let forecastCardHTML = '';

    data.forEach(weather => {
        forecastCardHTML += `
    <div class="col-md five-day-card">
       <div class="card bg-primary h-100 text-white">
          <div class="card-body p-2">
            <h5 class="card-title">9/17/2023</h5>
            <p class="card-text">Temp: ${weather.main.temp} °F</p>
            <p class="card-text">Wind: ${weather.wind.speed} MPH</p>
            <p class="card-text">Humidity: ${weather.main.humidity} %</p>
          </div>
        </div>
    </div>                
        `
    })

    const displayResult = `
    <div class="col-12">
        <h4>5-Day Forecast:</h4>
    </div>
    ${forecastCardHTML}
    `
    forecastDisplayEl.innerHTML = displayResult
}

const processWeather = (search) => {
    hideWeatherInfo();
    displayLocationInfo(search,mockWeatherData.list[0])
    displayForecastInfo(mockWeatherData.list)
    showWeatherInfo();
}

const getSearchHistory = () => {
    return window.localStorage.getItem("weather-history") === null ? [] : JSON.parse(window.localStorage.getItem("weather-history"))
}

const updateSearchHistory = (search) => {
    const history = getSearchHistory();
    if (history.length >= 5) history.shift();
    history.push(search)
    window.localStorage.setItem("weather-history",JSON.stringify(history))
}

const displaySearchHistory = () => {
    const history = getSearchHistory()
    $("#weather-history").html("");
    history.forEach(weather => renderSearchButton(weather))
}

const renderSearchButton = (search) => {
    const btnHtml = `
    <button type="button" aria-controls="today forecast" class="history-btn btn-history" data-search="${search}">${search}</button>
    `
    $("#weather-history").append(btnHtml)
}

$("#form-weather").on("submit",(event) => {
    event.preventDefault();
    const weatherSearch = $("#search-input").val()
    if (weatherSearch === '') return;
    processWeather(weatherSearch)
    updateSearchHistory(weatherSearch)
    displaySearchHistory();
})

