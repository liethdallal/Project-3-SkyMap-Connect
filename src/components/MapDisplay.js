import React, { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'
import './css/MapDisplay.css'

const MapDisplay = ({ lat, lng, isFormSubmitted }) => { //Props taken in from App.js
  const mapContainerRef = useRef(null) 

  useEffect(() => {
    if (isFormSubmitted) {  // Creates and displays the map when the form is submitted
      const loader = new Loader({ //loads google maps API
        apiKey: process.env.REACT_APP_MAPS_API_KEY,
        version: 'weekly',
      })

      loader.load().then( () => {
          const mapOptions = { //uses the cordinates to give the map a location to display
            center: { lat, lng },
            zoom: 14,
          }

          const map = new window.google.maps.Map(mapContainerRef.current, mapOptions) //creates the map

          new window.google.maps.Marker({ //creates the red marker on the map
            position: { lat, lng },
            map: map,
            title: 'Searched City',
          })
        },
        (error) => {
          console.error('Error with creating the map:', error)
        }
      )
    }
  }, [lat, lng, isFormSubmitted])

  return (
    <div id='map-container'>
      <div ref={mapContainerRef} id='map'></div> {/* useRef used to display the map */}
    </div>
  )
}

export default MapDisplay


