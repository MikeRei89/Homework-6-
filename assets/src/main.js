const openWeatherBaseURL = `http://api.openweathermap.org`;
const weatherAPI = `API HERE`;

const getLocationCoords = (search) => {
    const url = `${openWeatherBaseURL}/geo/1.0/direct?appid=${weatherAPI}&q=${search}&limit=5`;
    return {};
}

const getWeatherDataByCoords = (lat, lon) => {
    const url = `${openWeatherBaseURL}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${weatherAPI}`    
    return {};
}