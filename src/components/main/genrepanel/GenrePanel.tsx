import React, { useEffect, useState } from 'react'
import './GenrePanel.scss'
import mockItems from '../../mockItems.json';
import { GenrePanelApiHelper } from './GenrePanelApiHelper';
import { getGenreAlbums } from '../SpotifyAPIWrapper';

interface GenrePanelProps {
  genre: string;
}

function GenrePanel({genre}: GenrePanelProps) {

  const [genreAlbumArt, setGenreAlbumArt] = useState<string[]>([]);

  useEffect(() => {
    getGenreAlbumArt();
  }, []);
  

    async function getGenreAlbumArt() {
      const newReleasesAlbums = await getGenreAlbums(genre);
      const newReleasesAlbumsArray = new GenrePanelApiHelper(newReleasesAlbums);
      let albumArtArray: any[] = [];

      await newReleasesAlbumsArray.getItems().map((element: any, index: number) => {
        albumArtArray.push(newReleasesAlbumsArray.getPlaylistImage(index));
      })
      setGenreAlbumArt(albumArtArray);
    }
  return (
    <div className='genres_main'>
    <div className='genres_text'>{genre}</div>
    <div className='genres_coverScroll'>
        {genreAlbumArt?.map((albumCoverUrl: string, index: number) => {
          return <div key={index} className='genres_coverGradient'><img className='genres_cover' key={index} src={albumCoverUrl}></img></div>
        })}
    </div>
   
</div>
  )
}

export default GenrePanel