document.addEventListener('DOMContentLoaded', () => {

    let inputCity = document.getElementById('city-input');
    let getWeatherBtn = document.getElementById('get-weather-btn');
    let displayWeatherInfo = document.getElementById('weather-info');
    let displayCityName = document.getElementById('city-name');
    let displayTemperature = document.getElementById('temperature')
    let displayDescription = document.getElementById('description')
    let displayError = document.getElementById('error-message');

    const API_KEY = 'a8e7dd774109ab7f64ae78defad223f4'


    getWeatherBtn.addEventListener('click',async () => {
        const city = inputCity.value.trim();
        if(!city) return;

        try {

            const fetchedData = await fetchWeatherData(city);
            displayWeatherData(fetchedData)   //data fetched is generally in object format.
            
        } catch (error) {

            showErrors();
            
        }





    })


    async function fetchWeatherData(city){

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`

        let Response = await fetch(url);

        if(!Response.ok) showErrors()
        
        let someData = await Response.json()  //Made a mistake by writing it as .JSON only instead of .json() & also not used await as .json() is also a asynchronous function. due to which page was not loading.
        return someData;

    }

    function displayWeatherData(data){
        console.log(data);
        
        let {name, main, weather} = data;  //assigning these values from data object

        displayCityName.textContent = name;
        displayTemperature.textContent = `Temperoture: ${main.temp}`  //forgot this
        displayDescription.textContent = `Wether: ${weather[0].description }`  //forgot this too

        displayError.classList.add('hidden')
        displayWeatherInfo.classList.remove('hidden')
        

    }

    function showErrors(){
        displayError.classList.remove('hidden')
        displayWeatherInfo.classList.add('hidden')


    }





})