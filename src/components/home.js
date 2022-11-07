
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
    getTemperature();
  }, []);

async function getTemperature() {
  const response = await fetch("https://api.weather.gov/gridpoints/OTX/60,144/forecast");
  const data = await response.json();
  setTemperature((data.properties.periods[0].temperature-32).concat("°C"));
}
  const navigate = useNavigate();
  
  const [temperature, setTemperature] = useState("...");

  return (

    <div className="App bg-img">
      <header className="App-header">
        <div className="fg-content dimmed-fg-content">


          <div className="TempBackground">
            <h4 className="tempFont">
            {temperature}
            </h4>
          </div>

          <p>
          </p>
          <Link to="/road_conditions">  
           
            <Button  className="road-conditions btn-test">
              Road Conditions
          </Button>

          

          </Link><br></br>
          <Link to="/sfu_twitter_feed">
            <Button className="mb-2">
              Twitter Feed
            </Button>
          </Link><br></br>

          <a href="https://www.sfu.ca" target="_blank" rel="noreferrer">
            <Button className="mb-2">About Sfu</Button>
          </a>

          {/* <Link to="www.sfu.ca">
                <Button className="mb-2">
                  About SFU
                </Button>
              </Link> */}

          {/* <button>
              <img src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c53e.png" width="90" height="90" alt="submit" />
              </button> */}

        </div>

      </header>

    </div>
  );

}

export default Home;