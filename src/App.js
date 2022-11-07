import './App.css';

import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

import { Routes, Route, useNavigate, Router, BrowserRouter, Link, createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/home";
import RoadCondition from "./components/road_conditions";
import SFUTwitterFeed from './components/sfu_twitter_feed';
import aboutSFU from './components/about_sfu';

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home/>
  //   },
  //   {
  //     path: "/road_conditions",
  //     element: <RoadCondition/>
  //   }
  // ]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sfu_twitter_feed" element={<SFUTwitterFeed />} />
          <Route path="/road_conditions" element={<RoadCondition />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}


/*
  - Move all current app content into its own component (home.js)?
  - Render home.js in App like <Home /> 
  - App.js should only be rendering other components
  - Keep router code in App and should work :) 
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>
    },
    {
      path: "/road_conditions",
      element: <RoadCondition/>
    }
  ]);

  <RouterProvider router={router}/>  



*/
export default App;