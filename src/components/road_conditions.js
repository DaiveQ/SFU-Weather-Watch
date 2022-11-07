import React from "react";

import { Button } from 'react-bootstrap'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

import { Routes, Route, useNavigate, Router, BrowserRouter, Link, createBrowserRouter, RouterProvider } from 'react-router-dom';

function RoadCondition() {
  return (
    <div className="App bg-img">
      <Link to="/">
        <Button className="mb-2">
          Return
        </Button>
        </Link>
        <header className="App-header">

        </header>
    </div>

  )
}

export default RoadCondition;