import React, { useState, useEffect, useCallback } from 'react';
import Search from './components/Search';
import Result from './components/Result';
import Header from './components/Header';
import Footer from './components/Footer';
import MapDisplay from './components/MapDisplay';


function App() {
  const [searchString, setSearchString] = useState('');
  const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const [weatherData, setWeatherData] = useState(null);
  const [coordinates, setCoordinates] = useState({ lat: 0, lon: 0 });

  const fetchRandomWeather = useCallback(async () => {
    const cities = ['Chicago', 'Aurora', 'Rockford', 'Joliet', 'Naperville', 'Springfield', 'Peoria', 'Elgin', 'Waukegan', 'Champaign'];
    const randomCity = cities[Math.floor(Math.random() * cities.length)];

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${randomCity}&appid=${WEATHER_API_KEY}&units=imperial`);
    const data = await response.json();

    return data;
  }, [WEATHER_API_KEY]);

  useEffect(() => {
    const getRandomWeather = async () => {
      const data = await fetchRandomWeather();
      setWeatherData(data);

      if (data && data.coord) {
        setCoordinates({ lat: data.coord.lat, lon: data.coord.lon });
      }
    };

    getRandomWeather();
  }, [fetchRandomWeather]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const url = `${baseUrl}?q=${searchString}&appid=${WEATHER_API_KEY}&units=imperial`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('no response');
      }

      const data = await response.json();
      console.log('info:', data);
      setWeatherData(data);

      if (data && data.coord) {
        setCoordinates({ lat: data.coord.lat, lon: data.coord.lon });
      }
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
      <MapDisplay lat={coordinates.lat} lng={coordinates.lon} isFormSubmitted={!!weatherData} />
      <Result weatherData={weatherData} />
      <Footer />
    </>
  );
}

export default App;
//testing 2

