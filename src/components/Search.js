import React, { useState } from 'react';
import './Search.css';
import Result from './Result';

function Search({ handleChange, searchString }) {
  const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
  const [weatherData, setWeatherData] = useState(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchString || searchString.trim() === '') {
      console.log('Search string is empty or undefined');
      return;
    }

    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const url = `${baseUrl}?q=${searchString}&appid=${REACT_APP_API_KEY}&units=imperial`;

    try {
      console.log('Fetching weather data...');
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Weather data:', data);
      setWeatherData(data); 
    } catch (error) {
      console.error('Error fetching weather data:', error.message);
    }
  };

  return (
    <>
      <h1 id="searchtitle">💨⛈️ Search Here To See the Weather Where You Are ❄️☀️</h1>
      <form onSubmit={handleFormSubmit} id="searchform">
        <input
          className='inputs'
          type="text"
          placeholder="City"
          required
          onChange={handleChange}
          value={searchString}
        />
        <button id='searchbutton' type="submit">Search</button>
      </form>

      {weatherData && <Result weatherData={weatherData} />}
    </>
  );
}

export default Search;





