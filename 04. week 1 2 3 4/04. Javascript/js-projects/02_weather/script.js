document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");  //Grabbing it so that we can hide/unhide the below elements when needed or when there is error by using the toggle class
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-messag");

  const API_KEY = "cb960aa26387b41f74659e5e789f5903"; //env variables

  getWeatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return;    // OR we can also use if(city.length === 0) return; OR if(city === "") return;

  
    //2 things that should must remember while using API or making a request to server
    // it may throw an error ie u don't always get the data you want. Hence make safe zone & use try catch
    // server/database is always in another continent  //So it will take time hence use async await

    try {
      const weatherData = await fetchWeatherData(city);  //As we are using await, then we have to use async keyword in the func await is used & we also have to use it in the function where we are using await ie fetchWeatherData(city)
      displayWeatherData(weatherData);
    } catch (error) {
      showError();
    }
  });


// Always create diff. func. for different tasks. eg: one for fetch, one for display & one for error.


  async function fetchWeatherData(city) {
    //gets the data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;  //In url, we also have to fill some variables like API_KEY in this one.

    const response = await fetch(url);   
    console.log(typeof response);  //response is an object, which contains the data we want
    console.log("RESPONSE", response);  //response may be in pending state due to promise which we are handling using await with fetch() in above line, however we can also use .then() to handle the promise

    if (!response.ok) {   //.ok is a method that returns a boolean value. If the response is ok, then it will return true, otherwise it will return false. But as we are using !, so if !response.ok is true, then it will throw an error. which actuslly means that respone is not ok.
      throw new Error(" City Not found");
    }
    const data = await response.json();  //executes if response is ok & response will be in json format
    return data;   //returns the data to the function fetchWeatherData(city). Note: Func. only need to do one job if this func. is for fetch then it is for fetch only we shouldn't use displayWeatherData() in this func. ie this func. is for fetch only & should not display the data.
  }

  function displayWeatherData(data) {
    console.log(data);  //It tells us what data we are getting from the server. And every developer spends 2 days to understand the data or response from the server of the API they are using.
    const { name, main, weather } = data;
    cityNameDisplay.textContent = name;
    temperatureDisplay.textContent = `Temperature : ${main.temp}`;
    descriptionDisplay.textContent = `Weather : ${weather[0].description}`;

    //unlock the display
    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }

  function showError() {
    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }
});


//Used OpenWeather API
//Don't code mindlessly. Make a blueprint first, about what's going to happen after what. Make a list of plan of actions
//JS alone can't make fetch request it uses the environment like node/deno/bun or window env. of browser etc to make fetch request. We use fetch() method to make fetch request.
// In fetch(), we don't need to use json.stringify() as it provides json standalone. hence it gets converted to json automatically
//