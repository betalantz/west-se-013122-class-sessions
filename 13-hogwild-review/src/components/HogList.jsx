import React from 'react'
import HogTile from './HogTile'

function HogList({hogs}) {
    const pigPen = hogs.map(hog => (
        <HogTile 
            key={hog.name + hog.weight}
            hog={hog}
        />
    ))
  return (
    <div className="ui three stackable cards">{pigPen}</div>
  )
}

export default HogList