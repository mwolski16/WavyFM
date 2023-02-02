import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import SongPanel from '../songpanel/SongPanel';

interface SearchResultPanelProps {
    name?: string | null,
    songName?: string | null,
    albumName?: string | null,
    playlistName?: string | null,
    pictureURL?: string | null,
    releaseYear?: string | null,
    type: 'playlist' | 'song' | 'album' | 'artist';
    elementId?: string | null,
    songImageUrl?: string;
}

function SearchResultPanel({name: artistName, songName: songName, albumName: albumName, playlistName: playlistName, pictureURL: pictureURL, releaseYear: releaseYear, type: type, elementId, songImageUrl}: SearchResultPanelProps) {

    let mainTitle: any;
    let secondaryTitle: any;
    let state;


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

  return (
    <div className="searchSingleResultWrapper" onClick={(e) => {
        navigate({
            pathname: "/music",
            search: `?code=${mainTitle}_${secondaryTitle}`,
          }, {state: {mainTitle: mainTitle, secondaryTitle: secondaryTitle, art: pictureURL, releaseYear: releaseYear, elementId: elementId, elementType: type, songImageUrl: songImageUrl}});
    }}>
        <img src={pictureURL ? pictureURL : ""} style={{width: "40px"}}></img>
        <div className="searchSingleDetailsWrapper">
            <div className="searchSingleCardTitle">{mainTitle ? mainTitle : ""}</div>
            <div className="searchSingleCardAuthor">{secondaryTitle ? secondaryTitle : ""}</div>
        </div>
    </div>
  )
}

export default SearchResultPanel