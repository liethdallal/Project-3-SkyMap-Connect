import React, { useState, useEffect, useCallback } from 'react';
import Search from './components/Search';
import Result from './components/Result';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [searchString, setSearchString] = useState('');
  const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
  const [weatherData, setWeatherData] = useState(null);

  const fetchRandomWeather = useCallback(async () => {
    const places = ['New York', 'Los Angeles', 'London', 'Tokyo', 'Sydney'];
    const randomPlace = places[Math.floor(Math.random() * places.length)];

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${randomPlace}&appid=${REACT_APP_API_KEY}&units=imperial`);
    const data = await response.json();

    return data;
  }, [REACT_APP_API_KEY]);

  useEffect(() => {
    const getRandomWeather = async () => {
      const data = await fetchRandomWeather();
      setWeatherData(data);
    };

    getRandomWeather();
  }, [fetchRandomWeather]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const url = `${baseUrl}?q=${searchString}&appid=${REACT_APP_API_KEY}&units=imperial`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('no response');
      }

      const data = await response.json();
      console.log('info:', data);
      setWeatherData(data);
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
  };

  const handleChange = (event) => {
    setSearchString(event.target.value);
  };

  return (
    <>
      <Header />
      <Search handleChange={handleChange} searchString={searchString} handleFormSubmit={handleFormSubmit} />
      <Result weatherData={weatherData} />
      <Footer />
    </>
  );
}

export default App;


