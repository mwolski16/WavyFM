import React, { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
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
  releaseYear?: string,
  tracklist?: PlaylistSong[] | AlbumSong[],
  elementType: 'album' | 'playlist' | 'song';
  elementId: string;
  songImageUrl?: string;

}

function SongPanel({mainTitle, secondaryTitle, art, releaseYear, tracklist, elementType, elementId, songImageUrl}: SongPanelProps) {
    const location = useLocation();
    const navigator = useNavigate();

    if (!location.state.tracklist) {
        return (
            <div className="main songPanelWrapper">
                <div className="songPanelDetailsWrapper">
                    <img src={location.state.songImageUrl || "src/components/icons/svg/placeholder.svg"} className="songImage"/>
                    <div className="songPanelTitle">{location.state.mainTitle}</div>
                    <div className="songPanelAuthor">{location.state.secondaryTitle}</div>
                    <div className="songPanelYear">{location.state.releaseYear}</div>
                    <div className="songPanelListen">Listen on:</div>
                    <ButtonWithImage
                        cssClasses={["songScreenBtn mediumBtn spotifyBtn"]}
                        value='Spotify'
                        onClick={(e) => {
                            window.open('https://open.spotify.com/search/'+location.state.mainTitle, "_blank");
                        }}
                        svgName='spotify.svg'
                    />

                    <ButtonWithImage
                        cssClasses={["songScreenBtn mediumBtn lyricsBtn"]}
                        value='Show lyrics'
                        onClick={(e) => {
                            window.open("https://genius.com/search?q="+location.state.secondaryTitle+" "+location.state.mainTitle, "_blank")
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
                    let state = {mainTitle:location.state.tracklist[index].songName, secondaryTitle:location.state.tracklist[index].songArtist, art: location.state.tracklist[index].songImageUrl, songImageUrl: location.state.tracklist[index].songImageUrl};
                    return (
                        <div key={index} onClick={(e) => {
                          navigator({
                            pathname: "/music",
                            search: `?code=${song.getSongName}`,
                          }, {state: state}) 
                        }}>
                            <AlbumSongCard
                                number={index}
                                imgUrl={location.state.tracklist[index].songImageUrl || location.state.art || "src/components/icons/svg/placeholder.svg"}
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