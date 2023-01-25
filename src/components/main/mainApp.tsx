import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import './mainApp.scss';


function MainApp() {
  const location = useLocation();
  let isAdminLoggedIn = location?.state.isAdminLoggedIn || false;
  
  const [isAdmin, setIsAdmin] = useState(isAdminLoggedIn);
  const [token, setToken] = useState('');
 

  const [trendingAlbums, setTrendingAlbums] = useState([]);

function refreshToken() {
      const authParameters = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=client_credentials&client_id=' + import.meta.env.VITE_SPOTIFY_CLIENT_ID + '&client_secret=' + import.meta.env.VITE_SPOTIFY_SECRET
      }
      fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(result => result.json())
      .then(data => setToken(data.access_token));
}
    useEffect(() => {
      refreshToken();
    },[]);

    async function getTrendingAlbums() {

      refreshToken();

      const trendingParameters = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      };

      //console.log(trendingParameters);
        
      const trendingAlbums = await fetch('https://api.spotify.com/v1/browse/new-releases?country=US&limit=10', trendingParameters)
      .then(result => result.json())
      .then(data => setTrendingAlbums(data.items));


    }

    getTrendingAlbums();

   // console.log(trendingAlbums.map((album: any) => album.name))
   console.log(trendingAlbums);


    return ( 
      <div className='main'>sddasdsa</div>
  )
}

export default MainApp