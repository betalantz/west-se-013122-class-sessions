import React from 'react'
import defaultVinyl from '../assets/vinyl_PNG111.png'

function Track() {
  return (
    <tr className="table-row">
        <td className="row-image">
            {/* you can use the default image if no image is given */}
            <img src={defaultVinyl} alt="title" />
        </td>
        <td className="row-title">TITLE</td>
        <td>ARTIST</td>
        <td>BPM</td>
    </tr>
  )
}

export default Track