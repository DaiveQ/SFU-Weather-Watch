import React from "react";

import { TwitterTimelineEmbed } from 'react-twitter-embed';

import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import Home from "./home"

function SFUTwitterFeed() {
  return (
    <div>
      <Link to="/">
        <Button className="mb-2">
          Return
        </Button>
      </Link><br></br>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="SFU"
        options={{ height: window.innerHeight - 50}}
      />
    </div>
  )
}

export default SFUTwitterFeed;