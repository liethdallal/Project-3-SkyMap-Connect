import React, { useEffect, useState } from 'react';
import './Result.css';

function Result({ weatherData }) {
  const [reload, setReload] = useState(0);

  useEffect(() => {
    setReload(prevReload => prevReload + 1);
  }, [weatherData]);

  return (
    <div id='datacontainer' key={reload}>
      {weatherData ? (
        <div className='scale-up-center'>
          <h2 id='title'>Weather Information</h2>
          <div id='info-container'>
            <p id='cityname'>City: {weatherData.name}, {weatherData.sys.country}</p>
            <p id='conditions'>Conditions: {weatherData.weather[0].main}</p>
            <p id='temperture'>Temperature: {weatherData.main.temp} °F</p>
            <p id="humidity">Humidity: {weatherData.main.humidity}</p>
            <p id="windspeed">Wind Speed: {weatherData.wind.speed} miles/hour</p>
          </div>
        </div>
      ) : (
        <div>
          <p className='scale-up-center' id='noresults'>No results found!</p>
        </div>
      )}
    </div>
  );
}

export default Result;


