import React from 'react';
import "./Result.css"

function Result({ weatherData }) {
  if (!weatherData) {
    return null; 
  }
  return (
    
    <div>
      <hr/>
      <h2 id='title'>Weather Results</h2>
      <p id='cityname'>City: {weatherData.name }, {weatherData.sys.country}</p>
      <p id='temperture'>Temperature: {weatherData.main.temp} °F</p>
    </div>
  );
}


export default Result;