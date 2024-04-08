import { useState } from 'react'
import './App.css'
import Input from './Input.jsx'

// https://api.weatherapi.com/v1/current.json?key=14be6af200c2423789f164103240204&q=dfdfdf
function App() {
  fetch('', {mode : 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    process(response);
  })
  .catch(function(err) {
    console.log("try something else");
  })

  function process(res) {
    const cityRegion = res.location.name + ", " + res.location.region;
    const time = new Date(res.location.localtime).toLocaleTimeString();
    const condition = res.current.condition;
    const tempC = res.current.temp_c + " °C";
    const tempF = res.current.temp_f + " °F";
    const feelsLikeC = "Feels like: " + res.current.feelslike_c + " °C";
    const feelsLikeF = "Feels like: " + res.current.feelslike_f + " °F";
    const windKph = "Wind: " + res.current.wind_kph + " kph";
    const windMph = "Wind: " + res.current.wind_mph + " mph";
  }
}

export default App