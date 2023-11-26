import React, { useEffect, useRef } from 'react';
import { Loader } from "@googlemaps/js-api-loader";
import "./MapDisplay.css"

const MapDisplay = ({ lat, lng, isFormSubmitted }) => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (isFormSubmitted) {
      const loader = new Loader({
        apiKey: process.env.REACT_APP_MAPS_API_KEY,
        version: 'weekly',
      });

      loader.load().then( () => {
          const mapOptions = {
            center: { lat, lng },
            zoom: 14,
          };

          const map = new window.google.maps.Map(mapContainerRef.current, mapOptions);

          new window.google.maps.Marker({
            position: { lat, lng },
            map: map,
            title: 'Searched City',
          });
        },
        (error) => {
          console.error('Error with creating the map:', error);
        }
      );
    }
  }, [lat, lng, isFormSubmitted]);

  return (
    <div id="map-container">
      <div ref={mapContainerRef} id='map'></div>
    </div>
  );
}

export default MapDisplay;


