import React, { useEffect, useState } from 'react'
import './GenrePanel.scss'
import mockItems from '../../mockItems.json';
import { GenrePanelApiHelper } from './GenrePanelApiHelper';
import { getAlbum, getGenrePlaylists, getPlaylist } from '../SpotifyAPIWrapper';
import { AlbumSong } from '../songpanel/AlbumSong';
import { useNavigate } from 'react-router-dom';
import { PlaylistSong } from '../songpanel/PlaylistSong';

interface GenrePanelProps {
  genre: string;
}

function GenrePanel({genre}: GenrePanelProps) {

  const navigator = useNavigate();

  const [genrePlaylistArt, setGenrePlaylistArt] = useState<string[]>([]);
  const [playlistId, setPlaylistId] = useState<string[]>([]);

  useEffect(() => {
    getGenreAlbumInfo();
  }, []);
  

    async function getGenreAlbumInfo() {
      const genrePlaylists = await getGenrePlaylists(genre);
      const genrePlaylistsArray = new GenrePanelApiHelper(genrePlaylists);
      let albumArtArray: any[] = [];
      let albumIdArray: any[] = [];

      await genrePlaylistsArray.getItems().map((element: any, index: number) => {
        albumArtArray.push(genrePlaylistsArray.getAlbumImage(index));
        albumIdArray.push(genrePlaylistsArray.getAlbumId(index));
      })
      setGenrePlaylistArt(albumArtArray);
      setPlaylistId(albumIdArray);
    }

    async function albumClick(e: any, index: number, playlistCoverUrl: string) {
      e.preventDefault();
      let playlistTracks: PlaylistSong[] = [];
      let playlistName: string = '';
      let playlistOwner: string = '';
      getPlaylist(playlistId[index]).then((playlist: any) => {
        playlistName = playlist.name
        playlistOwner = playlist.owner.display_name;
        console.log(playlist)
        playlist.tracks.items.map((track: any) => {
          playlistTracks.push(new PlaylistSong(track));
        })
        navigator({
          pathname: "/music",
          search: `?code=${playlistId[index]}`,
        }, {state: {mainTitle: playlistName, secondaryTitle: playlistOwner, art: playlistCoverUrl, tracklist: playlistTracks}})
      })
      }
  return (
    <div className='genres_main'>
    <div className='genres_text'>{genre}</div>
    <div className='genres_coverScroll'>
        {genrePlaylistArt?.map((albumCoverUrl: string, index: number) => {
          return <div key={index} className='genres_coverGradient' onClick={(e) => {albumClick(e, index, albumCoverUrl)}}><img className='genres_cover' key={index} src={albumCoverUrl}></img></div>
        })}
    </div>
   
</div>
  )
}

export default GenrePanel