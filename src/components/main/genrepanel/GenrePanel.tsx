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
  const [playlistNameAndArt, setPlaylistNameAndArt] = useState<string[]>([]);

  useEffect(() => {
    getGenreAlbumInfo();
  }, []);
  

    async function getGenreAlbumInfo() {
      const genrePlaylists = await getGenrePlaylists(genre);
      const genrePlaylistsArray = new GenrePanelApiHelper(genrePlaylists);
      let albumArtArray: any[] = [];
      let albumIdArray: any[] = [];
      let albumNameAndArtArray: any[] = [];

      await genrePlaylistsArray.getItems().map((element: any, index: number) => {
        albumArtArray.push(genrePlaylistsArray.getAlbumImage(index));
        albumIdArray.push(genrePlaylistsArray.getAlbumId(index));
        albumNameAndArtArray.push(genrePlaylistsArray.getPlaylistNameAndImage(index));
      })
      setGenrePlaylistArt(albumArtArray);
      setPlaylistId(albumIdArray);
      setPlaylistNameAndArt(albumNameAndArtArray);
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
        }, {state: {mainTitle: playlistName, secondaryTitle: playlistOwner, art: playlistCoverUrl, tracklist: playlistTracks, elementType:'playlist', elementId: playlistId[index]}})
      })
      }
  return (
    <div className='genres_main'>
    <div className='genres_text'>{genre}</div>
    <div className='genres_coverScroll'>
        {playlistNameAndArt?.map((data: string, index: number) => {
          return (
              <div className="genres_sectionWrapper">
                <div key={index}  className='genres_coverGradient' onClick={(e) => {albumClick(e, index, data[0])}}>
                  <img className='genres_cover' key={index} src={data[0]} alt='Playlist cover'></img>
                </div>
                <div className='genres_coverTitle'>
                  {data[1]}
                </div>
              </div>
          )
        })}
    </div>
   
</div>
  )
}

export default GenrePanel