import React, { useEffect, useState } from 'react'
import mockItems from '../../mockItems.json';
import './trendingAlbums.scss';
import '../mainApp.scss';


function TrendingAlbums() {

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
      .then(data => setToken(data.access_token))
      .catch(error => {
        console.log(error);
      });
}

    async function getTrendingAlbums() {

      const trendingParameters = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      };

      //console.log(trendingParameters);
        
      const getTrendingAlbums = await fetch('https://api.spotify.com/v1/browse/new-releases?country=US&limit=10', trendingParameters)
      .then(result => result.json())
      .then((data) => {
        setTrendingAlbums(data.items)
        console.log(data.items)
      })
      .catch(error => {
        console.log(error);
      });


    }

    
    useEffect(() => {
      //refreshToken();
      //getTrendingAlbums();
    },[]);

    function getAlbumArt(items: any) {
      let albumsArray = items.map((item: any) => {
        return item.images[0].url;
    });

      return albumsArray;
    }


   // console.log(trendingAlbums.map((album: any) => album.name))
 
  return (
    <div className='genres_main'>
        <div className='genres_text'>Trending</div>
        <div className='genres_coverScroll'>
            {getAlbumArt(mockItems).map((albumCoverUrl: string, index: number) => {
                return <div className='genres_coverGradient'><img className='genres_cover' key={index} src={albumCoverUrl}></img></div>
            })}
        </div>
       
    </div>
  )
}

export default TrendingAlbums