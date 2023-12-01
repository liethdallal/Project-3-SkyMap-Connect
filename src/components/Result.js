import React, { useEffect, useState } from 'react';
import './css/Result.css';
import CityPic from "./imgs/city.png"
import ConditionsPic from "./imgs/conditions.jpg"
import HumidityPic from"./imgs/humidity.png"
import TemperturePic from "./imgs/temperture.png"
import WindSpeedPic from "./imgs/windspeed.png"
import CoordinatesPic from "./imgs/coordinates.png"
import SunrisePic from "./imgs/sunrise.jpg"
import SunsetPics from "./imgs/sunset.jpg"
import HighestTempPic from "./imgs/hightemp.png"
import LowestTempPic from "./imgs/images.png"
import FeelsLikePic from "./imgs/feelslike.jpg"
import PersonSittingInRainPic from "./imgs/sad-boy-with-rain-sad.gif"

function Result({ weatherData }) {
  const [reload, setReload] = useState(0);

  const convertUnixTimestamp = (timestamp) => {
    const dateObject = new Date(timestamp * 1000); 
    return dateObject.toLocaleString();
  };

  useEffect(() => {
    setReload(prevReload => prevReload + 1);
  }, [weatherData]);

  return (
    <div id='datacontainer' key={reload}>
      {weatherData ? (
        <div className='scale-up-center'>

          <h2 id='title'>Location Information</h2>
          <br/>

          <div id='info-container'>

            <div className='logo-text'>

              <div className="image-container">
                <img className='icons' src={CityPic} alt='City Name'/> 
                <div className="overlay-text">City, Country</div>
              </div>
               
               <br/> <h1 className="text">{weatherData.name}, {weatherData.sys.country}</h1>
               
            </div>


            <div className='logo-text'> 

              <div className="image-container">
                <img className='icons' src={ConditionsPic} alt='Conditions'/> 
                <div className="overlay-text">Current <br/> Condition</div>
              </div>


              <br/> <h1 className="text">{weatherData.weather[0].description}</h1>

            </div>


            <div className='logo-text'> 

              <div className="image-container">
                <img className='icons' src={TemperturePic} alt='Current Temperture'/> 
                <div className="overlay-text">Current <br/> Temperture</div>
              </div>

              <br/> <h1 className="text"> {weatherData.main.temp} °F </h1>
            
            </div>


            <div className='logo-text'> 

              <div className="image-container">
                <img className='icons' src={FeelsLikePic} alt='Temperture Feels Like'/> 
                <div className="overlay-text"> Feels like</div>
              </div>

               <br/>  <h1 className="text">{weatherData.main.feels_like} °F </h1>

            </div>


            <div className='logo-text'> 

              <div className="image-container">
                <img className='icons' src={HighestTempPic} alt='Highest Temperture'/> 
                <div className="overlay-text">  Highest <br/> temperture</div>
              </div>

             <br/>  <h1 className="text">{weatherData.main.temp_max} °F </h1>

            </div>

            <div className='logo-text'> 

              <div className="image-container">
                <img className='icons' src={LowestTempPic} alt='Lowest Temperture'/> 
                <div className="overlay-text">  Lowest <br/> temperture</div>
              </div>

              <br/> <h1 className="text"> {weatherData.main.temp_min} °F </h1>

            </div>


            <div className='logo-text'> 

              <div className="image-container">
                <img className='icons' src={CoordinatesPic} alt='Coordinates'/> 
                <div className="overlay-text">lon, lat</div>
              </div>

              <br/>  <h1 className="text">{weatherData.coord.lon} 
              <br/>      {weatherData.coord.lat}
                     </h1>
            
            </div>

            <div className='logo-text'> 

              <div className="image-container">
                  <img className='icons' src={HumidityPic} alt='Humidity'/> 
                  <div className="overlay-text">Humidity</div>
              </div>

              <br/> <h1 className="text"> {weatherData.main.humidity} </h1>
            
            </div>

            <div className='logo-text'> 
            
              <div className="image-container">
                <img className='icons' src={WindSpeedPic} alt='WindSpeed'/> 
                <div className="overlay-text">WindSpeed <br/> (meters/second)</div>
              </div>

              <br/> <h1 className="text">  {weatherData.wind.speed} m/s </h1>
            
            </div>

            <div className='logo-text'> 

            <div className="image-container">
              <img className='icons' src={SunrisePic} alt='Sunrise'/> 
              <div className="overlay-text">Date, Sunrise Time</div>
            </div>

            <br/> <h1 className="text"> {convertUnixTimestamp(weatherData.sys.sunrise)} </h1>

           </div>

           <div className='logo-text'> 

            <div className="image-container">
              <img className='icons' src={SunsetPics} alt='Sunset'/> 
              <div className="overlay-text">Date, Sunset Time</div>
            </div>

            <br/> <h1 className="text"> {convertUnixTimestamp(weatherData.sys.sunset)} </h1>

          </div>

          </div>

        </div>
      ) : (
        <div>
          <p className='scale-up-center' id='noresults'>No Information Found!
          <br/>
          <img id='noinfo' src={PersonSittingInRainPic} alt='No Results'/> 
          </p>

        </div>
      )}
    </div>
  );
}

export default Result;


