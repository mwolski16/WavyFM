import React, { useEffect, useState } from 'react'
import mockItems from '../../mockItems.json';
import './trendingPlaylists.scss';
import '../mainApp.scss';
import { getPlaylist, getTrendingPlaylists as getTrendingPlaylists } from '../SpotifyAPIWrapper';
import { TrendingPlaylistApiHelper as TrendingPlaylistApiHelper } from './TrendingPlaylistApiHelper';
import { useNavigate } from 'react-router-dom';
import { getAlbumTracks } from '../SpotifyAPIWrapper';
import { PlaylistSong } from '../songpanel/PlaylistSong';

function TrendingAlbums() {
  
  const navigator = useNavigate();
  const [trendingPlaylistArt, setTrendingPlaylistArt] = useState<string[]>([]);
  const [playlistsId, setPlaylistsId] = useState<string[]>([]);
  const [playlistNameAndArt, setPlaylistNameAndArt] = useState<string[]>([]);


  useEffect(() => {
    getTrendingPlaylistInfo();
  }, []);
  

    async function getTrendingPlaylistInfo() {
      const trendingPlaylists = await getTrendingPlaylists();
      const trendingPlaylistsObject = new TrendingPlaylistApiHelper(trendingPlaylists);
      let playlistArtArray: any[] = [];
      let playlistIdArray: any[] = [];
      let playlistNameAndArtArray: any[] = [];

      await trendingPlaylistsObject.getItems().map((element: any, index: number) => {
        playlistIdArray.push(trendingPlaylistsObject.getPlaylistId(index));
        playlistArtArray.push(trendingPlaylistsObject.getPlaylistImage(index));
        playlistNameAndArtArray.push(trendingPlaylistsObject.getPlaylistNameAndImage(index));
    })
      setTrendingPlaylistArt(playlistArtArray);
      setPlaylistsId(playlistIdArray);
      setPlaylistNameAndArt(playlistNameAndArtArray);
    }

   async function albumClick(e: any, index: number, playlistCoverUrl: string) {
      e.preventDefault();
      let playlistTracks: PlaylistSong[] = [];
      let playlistName: string = '';
      let playlistOwner: string = '';
      let playlistSongArt: string = '';
      getPlaylist(playlistsId[index]).then((playlist: any) => {
        playlistName = playlist.name
        playlistOwner = playlist.owner.display_name;
        playlist.tracks.items.map((track: any) => {
          playlistTracks.push(new PlaylistSong(track));
        })
        navigator({
          pathname: "/music",
          search: `?code=${playlistsId[index]}`,
        }, {state: {mainTitle: playlistName, secondaryTitle: playlistOwner, art: playlistCoverUrl, tracklist: playlistTracks, elementType:'playlist', elementId: playlistsId[index]}})
      })
      }

  return (
    <div className='genres_main'>
        <div className='genres_text'>Trending</div>
        <div className='genres_coverScroll'>
            {playlistNameAndArt?.map((data: string, index: number) => {
                return (
                    <div>
                        <div key={index}  className='genres_coverGradient' onClick={(e) => {albumClick(e, index, data[0])}}>
                            <img className='genres_cover' key={index} src={data[0]} alt='Playlist cover'></img>
                       </div>
                        <div className='genres_coverTitle'>
                            {data[1]}
                        </div>
                    </div>
            )})}
        </div>
       
    </div>
  )
}

export default TrendingAlbums;