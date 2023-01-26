import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import GenrePanel from './genrepanel/GenrePanel';
import './mainApp.scss';
import NewReleases from './newreleases/NewReleases';

import TrendingAlbums from './trendingalbums/TrendingAlbums';


function MainApp() {
  const location = useLocation();
  //let isAdminLoggedIn = location?.state.isAdminLoggedIn || false;
  
 // const [isAdmin, setIsAdmin] = useState(isAdminLoggedIn);
  

    return ( 
      <div className='main'>
        <TrendingAlbums></TrendingAlbums>
        <NewReleases></NewReleases>
        <GenrePanel></GenrePanel>
      </div>
  )
}

export default MainApp