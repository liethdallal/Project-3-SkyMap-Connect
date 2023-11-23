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
          <p id='temperture'>Temperature: {weatherData.main.temp} °F</p>
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


