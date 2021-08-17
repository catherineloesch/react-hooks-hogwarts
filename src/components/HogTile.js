import React, { useState } from "react"
import HogDetails from "./HogDetails"

import { Card, Image } from 'semantic-ui-react'


function HogTile ({hog})  {
    const [clicked, setClicked] = useState(false)
    function handleClick(event) {
        setClicked(!clicked)
        console.log("clicked")
    }

    return (
  <Card onClick={handleClick} className="tile">
  
    <Image
        src={hog.image}
        wrapped ui={false}
        
        />
    <Card.Content>
      <Card.Header>{hog.name}</Card.Header>
      
      <Card.Description>
        {clicked ? <HogDetails hog={hog} /> : null}
      </Card.Description>
    </Card.Content>
  </Card>
)}

export default HogTile