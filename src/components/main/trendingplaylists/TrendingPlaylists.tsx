import React, { useEffect, useState } from 'react'
import mockItems from '../../mockItems.json';
import './trendingPlaylists.scss';
import '../mainApp.scss';
import { getPlaylist, getTrendingPlaylists as getTrendingPlaylists } from '../SpotifyAPIWrapper';
import { TrendingPlaylistApiHelper as TrendingPlaylistApiHelper } from './TrendingPlaylistApiHelper';
import { useNavigate } from 'react-router-dom';
import { getAlbumTracks } from '../SpotifyAPIWrapper';
import { Song } from '../songpanel/Song';

function TrendingAlbums() {
  
  const navigator = useNavigate();
  const [trendingPlaylistArt, setTrendingPlaylistArt] = useState<string[]>([]);
  const [playlistsId, setPlaylistsId] = useState<string[]>([]);


  useEffect(() => {
    getTrendingPlaylistInfo();
  }, []);
  

    async function getTrendingPlaylistInfo() {
      const trendingPlaylists = await getTrendingPlaylists();
      const trendingPlaylistsObject = new TrendingPlaylistApiHelper(trendingPlaylists);
      let playlistArtArray: any[] = [];
      let playlistIdArray: any[] = [];
     
      await trendingPlaylistsObject.getItems().map((element: any, index: number) => {
        playlistIdArray.push(trendingPlaylistsObject.getPlaylistId(index));
        playlistArtArray.push(trendingPlaylistsObject.getPlaylistImage(index));
    })
      setTrendingPlaylistArt(playlistArtArray);
      setPlaylistsId(playlistIdArray);
    }

   async function albumClick(e: any, index: number, playlistCoverUrl: string) {
      e.preventDefault();
      let playlistTracks: Song[] = [];
      let playlistName: string = '';
      let playlistOwner: string = '';
      getPlaylist(playlistsId[index]).then((playlist: any) => {
        playlistName = playlist.name
        playlistOwner = playlist.owner.display_name;
        playlist.tracks.items.map((track: any) => {
          playlistTracks.push(new Song(track));
        })
        //console.log({mainTitle: playlistName, secondaryTitle: playlistOwner, art: playlistCoverUrl, tracklist: playlistTracks})
        navigator({
          pathname: "/music",
          search: `?code=${playlistsId[index]}`,
        }, {state: {mainTitle: playlistName, secondaryTitle: playlistOwner, art: playlistCoverUrl, tracklist: playlistTracks}})
      })
      }


        
  
    
 
  return (
    <div className='genres_main'>
        <div className='genre5s_text'>Trending</div>
        <div className='genres_coverScroll'>
            {trendingPlaylistArt?.map((playlistCoverUrl: string, index: number) => {
                return (<div key={index} className='genres_coverGradient' onClick={(e) => {albumClick(e, index, playlistCoverUrl)}}>
                  <img className='genres_cover' key={index} src={playlistCoverUrl} alt='Playlist cover'></img>
                  </div>
            )})}
        </div>
       
    </div>
  )
}

export default TrendingAlbums;