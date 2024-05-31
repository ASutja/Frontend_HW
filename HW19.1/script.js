const apiKey = 'fb17096e97f8fb5ece0e1b6094c79a38'; 

document.getElementById('updateButton').addEventListener('click', updateWeather);

async function updateWeather() {
    const cityId = document.getElementById('citySelect').value;
    const weatherData = await fetchWeatherData(cityId);
    if (weatherData) {
        displayWeather(weatherData);
    }
}

async function fetchWeatherData(cityId) {
    const url = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=metric&lang=ru`;
    console.log(`Fetching weather data from URL: ${url}`);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error retrieving weather data: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error executing request:', error);
        alert('Error executing request');
        return null;
    }
}

function displayWeather(data) {
    document.getElementById('cityName').textContent = data.name;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
    document.getElementById('weatherDescription').textContent = data.weather[0].description;
}

updateWeather();
