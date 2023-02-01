import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import NavBar from '../../generic/NavBar';
import '../mainApp.scss'
import { getAlbum, getPlaylist } from '../SpotifyAPIWrapper';
import { AlbumHelper } from './AlbumHelper';
import { AlbumSong } from './AlbumSong';
import { PlaylistHelper } from './PlaylistHelper';
import { PlaylistSong } from './PlaylistSong';

interface SongPanelProps {
  mainTitle: string,
  secondaryTitle: string,
  art: string,
  tracklist?: PlaylistSong[] | AlbumSong[],

}

function SongPanel({mainTitle, secondaryTitle, art, tracklist}: SongPanelProps) {
    const location = useLocation();
   // console.log(location.state.mainTitle, location.state.secondaryTitle, location.state.art, location.state.tracklist)
  // @Konrad tutaj tez jest css jak cos kc kc 
    return (
        <div style={{color: "white"}}>
            <div>
                <img style={{ width: "30px"}}src={location.state.art} />
                <div>{location.state.mainTitle}</div>
                <div>{location.state.secondaryTitle}</div>
            </div>
            {location.state.tracklist && location.state.tracklist.map((song: PlaylistSong, index: number) => {
                return (
                    <div key={index}>
                        <div>{location.state.tracklist[index].songName}</div>
                        <div>{location.state.tracklist[index].songArtist}</div>
                        <div>{location.state.tracklist[index].songDuration}</div>
                    </div>
                )
            })
            }
          <div className="navbar">
                <NavBar></NavBar>
            </div>
        </div>
      )
}

export default SongPanel