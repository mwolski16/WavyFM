import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import NavBar from '../../generic/NavBar';
import '../mainApp.scss'

function SongPanel() {
  const location = useLocation();
  // state: {mainTitle, secondaryTitle, pictureURL, type}
  let mainTitle = location.state.mainTitle;
  let secondaryTitle = location.state.secondaryTitle;
  let pictureURL = location.state.pictureURL;
  let type = location.state.type;
  // @Konrad tutaj tez jest css jak cos kc kc 
    return (
        <div style={{color: "white"}}>
          <img src={pictureURL} style={{width: "360px"}}></img>
          <div>{mainTitle}</div>
          <div>{secondaryTitle}</div>
          <div className="navbar">
                <NavBar></NavBar>
            </div>
        </div>
      )
}

export default SongPanel