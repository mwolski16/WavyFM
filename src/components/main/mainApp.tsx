import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import GenrePanel from './genrepanel/GenrePanel';
import './mainApp.scss';
import NewReleases from './newreleases/NewReleases';

import TrendingPlaylists from './trendingplaylists/TrendingPlaylists';

import mockGenres from '../mockGenres.json';
import ButtonWithImage from '../generic/ButtonWithImage';
import SettingsGear from './settingspanel/SettingsGear';
import { useNavigate } from "react-router-dom";
import NavBar from '../generic/NavBar';
import ProfilePicture from './profilepanel/ProfilePicture';


function MainApp() {
  const location = useLocation();
  const navigate = useNavigate();
  
  function getGenres(items: any) {
    
    let genresArray = items.slice(2,7).map((item: any) => {
      return item.name;
  });

    return genresArray;
  }
  // @Konrad dodac zeby ostanti album bylo widac (powiekszyc troche diva)
    return ( 
      <div className="main">
        <div className="navbar">
           <NavBar></NavBar>
        </div>
        <div className="main_headerWrapper">
          <SettingsGear></SettingsGear>
          <ProfilePicture imgSize="45px"/>
        </div>
        <div className="headerInfo">
            <span>Welcome, [name]</span>
        </div>
        <TrendingPlaylists></TrendingPlaylists>
        <NewReleases></NewReleases>
        {getGenres(mockGenres).map((genre: string, index: number) => {
          return <GenrePanel key={index} genre={genre}></GenrePanel>
        })
        }
      </div>
  )
}

export default MainApp