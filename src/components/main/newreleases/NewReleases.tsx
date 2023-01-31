import React, { useEffect, useState } from 'react'
import './newReleases.scss';
import mockItems from '../../mockItems.json';
import '../mainApp.scss'
import { getNewReleases } from '../SpotifyAPIWrapper';
import { NewReleasesApiHelper } from './NewReleasesApiHelper';

function NewReleases() {


  const [newReleasesAlbumArt, setNewReleasesAlbumArt] = useState<string[]>([]);

  useEffect(() => {
    getNewReleasesAlbumArt();
  }, []);
  

    async function getNewReleasesAlbumArt() {
      const newReleasesAlbums = await getNewReleases();
      const newReleasesAlbumsArray = new NewReleasesApiHelper(newReleasesAlbums);
      let albumArtArray: any[] = [];

      await newReleasesAlbumsArray.getItems().map((element: any, index: number) => {
        albumArtArray.push(newReleasesAlbumsArray.getPlaylistImage(index));
      })
    setNewReleasesAlbumArt(albumArtArray);
    }
  return (
    <div className='genres_main'>
    <div className='genres_text'>New Releases</div>
    <div className='genres_coverScroll'>
        {newReleasesAlbumArt?.map((albumCoverUrl: string, index: number) => {
          return <div key={index} className='genres_coverGradient'><img className='genres_cover' key={index} src={albumCoverUrl}></img></div>
        })}
    </div>
   
</div>
  )
}

export default NewReleases