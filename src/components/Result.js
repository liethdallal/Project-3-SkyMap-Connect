import React, { useEffect, useState } from 'react';
import './Result.css';
import CityPic from "./city.png"
import ConditionsPic from "./conditions.jpg"
import HumidityPic from"./humidity.png"
import TemperturePic from "./temperture.png"
import WindSpeed from "./windspeed.png"


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
            <p id='cityname'><img id='icons' src={CityPic} alt='City Name'/> <br/> {weatherData.name}, {weatherData.sys.country}</p>
            <p id='conditions'><img id='icons' src={ConditionsPic} alt='Conditions'/> <br/>  {weatherData.weather[0].main}</p>
            <p id='temperture'><img id='icons' src={TemperturePic} alt='Temperture'/> <br/>  {weatherData.main.temp} °F</p>
            <p id="humidity"><img id='icons' src={HumidityPic} alt='Humidity'/> <br/> {weatherData.main.humidity}</p>
            <p id="windspeed"><img id='icons' src={WindSpeed} alt='WindSpeed'/> <br/>  {weatherData.wind.speed} m/h</p>
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


