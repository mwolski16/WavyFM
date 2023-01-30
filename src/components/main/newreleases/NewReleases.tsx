import React from 'react'
import './newReleases.scss';
import mockItems from '../../mockItems.json';
import '../mainApp.scss'

function NewReleases() {


  
  function getAlbumArt(items: any) {
    let albumsArray = items.map((item: any) => {
      return item.images[0].url;
  });

    return albumsArray;
  }
  return (
    <div className='genres_main'>
    <div className='genres_text'>Trending</div>
    <div className='genres_coverScroll'>
        {getAlbumArt(mockItems).map((albumCoverUrl: string, index: number) => {
          return <div key={index} className='genres_coverGradient'><img className='genres_cover' key={index} src={albumCoverUrl}></img></div>
        })}
    </div>
   
</div>
  )
}

export default NewReleases