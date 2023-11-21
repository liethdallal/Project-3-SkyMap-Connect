import React from 'react';

function Result({ weatherData }) {
  if (!weatherData) {
    return <h1>None</h1>; 
  }

  return (
    <div>
      <h2>Weather Results</h2>
      <p>City: {weatherData.name}</p>
      <p>Temperature: {weatherData.main.temp}</p>
    </div>
  );
}

export default Result;