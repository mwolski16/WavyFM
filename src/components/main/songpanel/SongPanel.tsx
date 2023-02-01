import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import NavBar from '../../generic/NavBar';
import '../mainApp.scss'
import { getAlbum, getPlaylist } from '../SpotifyAPIWrapper';
import { AlbumHelper } from './AlbumHelper';
import { AlbumSong } from './AlbumSong';
import { PlaylistHelper } from './PlaylistHelper';
import { PlaylistSong } from './PlaylistSong';
import ButtonWithImage from "../../generic/ButtonWithImage";
import AlbumSongCard from "../../generic/AlbumSongCard";

interface SongPanelProps {
  mainTitle: string,
  secondaryTitle: string,
  art: string,
  tracklist?: PlaylistSong[] | AlbumSong[],

}

function SongPanel({mainTitle, secondaryTitle, art, tracklist}: SongPanelProps) {
    const location = useLocation();

    if (!location.state.tracklist) {
        return (
            <div className="main songPanelWrapper">
                <div className="songPanelDetailsWrapper">
                    <img src={location.state.art || "src/components/icons/svg/placeholder.svg"} className="songImage"/>
                    <div className="songPanelTitle">{location.state.mainTitle}</div>
                    <div className="songPanelAuthor">{location.state.secondaryTitle}</div>
                    <div className="songPanelYear">rok wydania</div>
                    <div className="songPanelListen">Listen on:</div>
                    <ButtonWithImage
                        cssClasses={["songScreenBtn mediumBtn spotifyBtn"]}
                        value='Spotify'
                        onClick={(e) => {
                            return;
                        }}
                        svgName='spotify.svg'
                    />

                    <ButtonWithImage
                        cssClasses={["songScreenBtn mediumBtn lyricsBtn"]}
                        value='Show lyrics'
                        onClick={(e) => {
                            return;
                        }}
                        svgName='genius.svg'
                    />
                </div>
                <div className="navbar">
                    <NavBar></NavBar>
                </div>
            </div>
        )
    } else {
        return (

            <div className="main albumPanelWrapper">
                <div className="albumPanelTopWrapper"
                     style={{background: `linear-gradient(0deg, rgba(35, 25, 50, 0.9) 0%, rgba(35, 25, 50, 0) 100%), url("` + (location.state.art || "src/components/icons/svg/placeholder.svg") + `")`}}>
                    <div className="albumPanelTitle">{location.state.mainTitle}</div>
                    <div className="albumPanelAuthor">{location.state.secondaryTitle}</div>
                </div>
                {location.state.tracklist && location.state.tracklist.map((song: PlaylistSong, index: number) => {
                    return (
                        <div key={index}>
                            <AlbumSongCard
                                number={index}
                                imgUrl={location.state.art}
                                author={location.state.tracklist[index].songArtist}
                                title={location.state.tracklist[index].songName}
                            />
                        </div>
                    )
                })
                }
                <div className="spaceHolder" style={{height: 75}}/>
                <div className="navbar">
                    <NavBar></NavBar>
                </div>
            </div>
        )
    }
}

export default SongPanel