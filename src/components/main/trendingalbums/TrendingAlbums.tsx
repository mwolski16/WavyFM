import React, { useEffect, useState } from 'react'
import mockItems from '../../mockItems.json';
import './trendingAlbums.scss';
import '../mainApp.scss';
import { getTrendingAlbums } from '../SpotifyAPIWrapper';
import { TrendingAlbumApiHelper } from './TrendingAlbumApiHelper';

function TrendingAlbums() {

  const [trendingAlbumArt, setTrendingAlbumArt] = useState<string[]>([]);

  useEffect(() => {
    getTrendingAlbumArt();
  }, []);
  

    async function getTrendingAlbumArt() {
      const trendingAlbums = await getTrendingAlbums();
      const trendingAlbumsArray = new TrendingAlbumApiHelper(trendingAlbums);
      let albumArtArray: any[] = [];

      await trendingAlbumsArray.getItems().map((element: any, index: number) => {
        albumArtArray.push(trendingAlbumsArray.getPlaylistImage(index));
    })
      setTrendingAlbumArt(albumArtArray);
    }


   // console.log(trendingAlbums.map((album: any) => album.name))
 
  return (
    <div className='genres_main'>
        <div className='genres_text'>Trending</div>
        <div className='genres_coverScroll'>
            {trendingAlbumArt?.map((albumCoverUrl: string, index: number) => {
                return <div key={index} className='genres_coverGradient'><img className='genres_cover' key={index} src={albumCoverUrl}></img></div>
            })}
        </div>
       
    </div>
  )
}

export default TrendingAlbums