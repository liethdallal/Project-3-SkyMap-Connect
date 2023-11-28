import React, { useEffect, useState } from 'react';
import './css/Result.css';
import CityPic from "./imgs/city.png"
import ConditionsPic from "./imgs/conditions.jpg"
import HumidityPic from"./imgs/humidity.png"
import TemperturePic from "./imgs/temperture.png"
import WindSpeedPic from "./imgs/windspeed.png"


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
          <br/>

          <div id='info-container'>

            <div id='cityname'>

              <div className="image-container">
                <img id='icons' src={CityPic} alt='City Name'/> 
                <div className="overlay-text">City, Country</div>
              </div>
               
               <br/> {weatherData.name}, {weatherData.sys.country}
               
            </div>


            <div id='conditions'> 

              <div className="image-container">
                <img id='icons' src={ConditionsPic} alt='Conditions'/> 
                <div className="overlay-text">Condition</div>
              </div>

              <br/>  {weatherData.weather[0].main}

            </div>


            <div id='temperture'> 

              <div className="image-container">
                <img id='icons' src={TemperturePic} alt='Temperture'/> 
                <div className="overlay-text">Temperture</div>
              </div>

              <br/>  {weatherData.main.temp} °F
            
            </div>


            <div id="humidity"> 

              <div className="image-container">
                  <img id='icons' src={HumidityPic} alt='Humidity'/> 
                  <div className="overlay-text">Humidity</div>
              </div>

              <br/> {weatherData.main.humidity}
            
            </div>


            <div id="windspeed"> 
            
              <div className="image-container">
                <img id='icons' src={WindSpeedPic} alt='WindSpeed'/> 
                <div className="overlay-text">WindSpeed</div>
              </div>

              <br/>  {weatherData.wind.speed} m/h
            
            </div>

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


