import React from 'react'
import { useLocation, useParams } from 'react-router-dom';

function SongPanel() {
  const location = useLocation();
  // state: {mainTitle, secondaryTitle, pictureURL, type}
    return (
        <div>
          <h3>Song Panel</h3>
          <p>Artist Name: {location.state.mainTitle}</p>
          <p>Song Name: {location.state.secondaryTitle}</p>
        </div>
      )
}

export default SongPanel