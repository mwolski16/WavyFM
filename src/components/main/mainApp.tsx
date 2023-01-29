import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import GenrePanel from './genrepanel/GenrePanel';
import './mainApp.scss';
import NewReleases from './newreleases/NewReleases';

import TrendingAlbums from './trendingalbums/TrendingAlbums';

import mockGenres from '../mockGenres.json';


function MainApp() {
  const location = useLocation();
  //let isAdminLoggedIn = location?.state.isAdminLoggedIn || false;
  
 // const [isAdmin, setIsAdmin] = useState(isAdminLoggedIn);
  
  function getGenres(items: any) {
    let genresArray = items.map((item: any) => {
      return item.name;
  });

    return genresArray;
  }

    return ( 
      <div className='main'>
        <TrendingAlbums></TrendingAlbums>
        <NewReleases></NewReleases>
        {getGenres(mockGenres).map((genre: string, index: number) => {
          return <GenrePanel key={index} genre={genre}></GenrePanel>
        })
        }
      </div>
  )
}

export default MainApp