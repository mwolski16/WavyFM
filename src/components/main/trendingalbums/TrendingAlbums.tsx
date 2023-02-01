import React, { useEffect, useState } from 'react'
import mockItems from '../../mockItems.json';
import './trendingAlbums.scss';
import '../mainApp.scss';
import { getTrendingAlbums } from '../SpotifyAPIWrapper';
import { TrendingAlbumApiHelper } from './TrendingAlbumApiHelper';
import { useNavigate } from 'react-router-dom';
import { getAlbumTracks } from '../SpotifyAPIWrapper';

function TrendingAlbums() {
  
  const navigator = useNavigate();
  const [trendingAlbumArt, setTrendingAlbumArt] = useState<string[]>([]);
  const [albumsId, setAlbumsId] = useState<string[]>([]);

  useEffect(() => {
    getTrendingAlbumInfo();
  }, []);
  

    async function getTrendingAlbumInfo() {
      const trendingAlbums = await getTrendingAlbums();
      const trendingAlbumsArray = new TrendingAlbumApiHelper(trendingAlbums);
      let albumArtArray: any[] = [];
      let albumIdArray: any[] = [];

      await trendingAlbumsArray.getItems().map((element: any, index: number) => {
        albumIdArray.push(trendingAlbumsArray.getAlbumId(index));
        albumArtArray.push(trendingAlbumsArray.getPlaylistImage(index));
    })
      setTrendingAlbumArt(albumArtArray);
      setAlbumsId(albumIdArray);
    }


   // console.log(trendingAlbums.map((album: any) => album.name))
 
  return (
    <div className='genres_main'>
        <div className='genres_text'>Trending</div>
        <div className='genres_coverScroll'>
            {trendingAlbumArt?.map((albumCoverUrl: string, index: number) => {
                return <div key={index} className='genres_coverGradient' onClick={(e) => {
                    navigator({
                        pathname: "/music",
                        search: `?code=${albumsId[index]}`,
                      }, {state: {albumId: albumsId[index], isAlbum: 'playlist'}})
                }}><img className='genres_cover' key={index} src={albumCoverUrl}></img></div>
            })}
        </div>
       
    </div>
  )
}

export default TrendingAlbums