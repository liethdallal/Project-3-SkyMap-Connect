import React from 'react';
import './Result.css';

function Result({ weatherData }) {
  return (
    <>
    <div id='datacontainer'>

  
      {weatherData ? (
        <div>
          <h2 id='title'>Weather Results</h2>
          <p id='cityname'>City: {weatherData.name}, {weatherData.sys.country}</p>
          <p>Conditions: {weatherData.weather[0].main}</p>
          <p id='temperture'>Temperature: {weatherData.main.temp} °F</p>
          <p id="humidity">Humidity: {weatherData.main.humidity}</p>
          <p id="windspeed">Wind Speed: {weatherData.wind.speed} miles/hour</p>
        </div>
      ) : (
        <div id="no-results">
          <p>No results found for the entered city.</p>
        </div>
      )}
        </div>
    </>
  );
}

export default Result;


