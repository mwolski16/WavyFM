import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import SongPanel from '../songpanel/SongPanel';

interface SearchResultPanelProps {
    name?: string | null,
    songName?: string | null,
    albumName?: string | null,
    playlistName?: string | null,
    pictureURL?: string | null,
    type: string,
}

function SearchResultPanel({name: artistName, songName, albumName, playlistName, pictureURL, type}: SearchResultPanelProps) {

    let mainTitle: any;
    let secondaryTitle: any;

    if(type === 'song') {
        mainTitle = songName;
        secondaryTitle = artistName;
    } else if(type === 'album') {
        mainTitle = albumName;
        secondaryTitle = artistName;
    } else if(type === 'playlist') {
        mainTitle = playlistName;
        secondaryTitle = 'Playlist';
    } else if(type === 'artist') {
        mainTitle = artistName;
        secondaryTitle = 'Artist';
    }

    const navigate = useNavigate();

    // @Konrad - usun ten inline style i dodaj klase do scss
  return (
    <div onClick={(e) => {
        navigate({
            pathname: "/music",
            search: `?code=${mainTitle}_${secondaryTitle}`,
          }, {state: {mainTitle, secondaryTitle, pictureURL, type}});
    }}>
        <img src={pictureURL ? pictureURL : ""} style={{width: "40px"}}></img>
        <div>
            <div>{mainTitle ? mainTitle : ""}</div>
            <div>{secondaryTitle ? secondaryTitle : ""}</div>
        </div>
    </div>
  )
}

export default SearchResultPanel