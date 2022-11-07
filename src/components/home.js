
import '../App.css';

import { Button } from 'react-bootstrap'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

import { Routes, Route, useNavigate, Router, BrowserRouter, Link, createBrowserRouter, RouterProvider } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import RoadCondition from "./road_conditions";

import { useState } from 'react';
import { useEffect } from 'react';



function Home() {

  useEffect(() => {
    updateWeatherStates();
  }, []);

  async function updateWeatherStates() {
    const response = await fetch("https://api.weather.gov/gridpoints/OTX/60,144/forecast");
    const data = await response.json();
    const newTemp = Math.round((data.properties.periods[0].temperature - 32) * 5 / 9)
    setTemperature(String(newTemp).concat("°"));
    const newWeather = data.properties.periods[0].shortForecast
    setWeather(newWeather)
  }

  const [temperature, setTemperature] = useState("...");
  const [weather, setWeather] = useState();

  return (

    <div className="App bg-img">
      <header className="App-header">
        <div className="fg-content dimmed-fg-content">
          <div className="TempBackground">
            <h4 className="tempFont">
              {temperature}
            </h4> <br></br>
            <h4 className="weatherFont">{weather}</h4>
          </div>

          <p>
          </p>
          <Link to="/road_conditions">

            <Button className="road-conditions btn-test mb-2">
              Road Conditions
            </Button>
            <br></br>
            
          </Link>

            <a href="https://www.sfu.ca" target="_blank" rel="noreferrer">
              <Button className="about-sfu btn-test mb-2">About SFU</Button>
            </a>

            <br></br>


          <Link to="/sfu_twitter_feed">
            <Button className="twitter-feed btn-test mb-2">
              Twitter Feed
            </Button>
          </Link><br></br>

        </div>

      </header>

    </div>
  );

}

export default Home;