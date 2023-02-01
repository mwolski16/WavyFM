import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import NavBar from '../../generic/NavBar';
import '../mainApp.scss'
import { getAlbum, getPlaylist } from '../SpotifyAPIWrapper';
import { AlbumHelper } from './AlbumHelper';
import { PlaylistHelper } from './PlaylistHelper';

function SongPanel() {

  const [albumInfo, setAlbumInfo] = React.useState();
  const [playlistInfo, setPlaylistInfo] = React.useState();
  const [isUndefined , setIsUndefined] = React.useState(false);
  const [displayPlaylist, setDisplayPlaylist] = React.useState(false);
  const [display, setDisplay] = React.useState({mainTitle: '', secondaryTitle: '', pictureURL: ''});
  const location = useLocation();
  // state: {mainTitle, secondaryTitle, pictureURL, type, albumId?, isAlbum?}
  let songDisplay = <div></div>;
  let albumDisplay = <div></div>;
  let playlistDisplay = <div></div>;

  useEffect(() => {
    if(location.state.isAlbum === 'playlist' ) {
      getPlaylistInfo();
    } else {
      getAlbumInfo();
    }
    checkIfAlbumAndPrepare();
   
  }, []);


  async function getAlbumInfo() {
    setAlbumInfo(await getAlbum(location.state.albumId));
  }

  async function getPlaylistInfo() {
    setPlaylistInfo(await getPlaylist(location.state.albumId));
  }

  async function checkIfAlbumAndPrepare() {
    if(location.state.isAlbum && location.state.albumId) {
      if(location.state.isAlbum === 'playlist') {
        if (playlistInfo) {
          const playlist = new PlaylistHelper(playlistInfo);
          let mainTitle = playlist.getPlaylistName();
          let secondaryTitle = playlist.getOwnersName();
          console.log("Setdisplayplaylit to true")
          setDisplayPlaylist(true);
          setDisplay({mainTitle: mainTitle, secondaryTitle: secondaryTitle, pictureURL: playlist.getPlaylistArt()})
        }
      } else {
        const album = new AlbumHelper(albumInfo);
        console.log(album);
        let mainTitle = album.getAlbumName();
        let secondaryTitle = album.getArtistName().join(', ');
        setDisplay({mainTitle: mainTitle, secondaryTitle: secondaryTitle, pictureURL: album.getAlbumArt()})
      }
  
    } else {
      let mainTitle = location.state.mainTitle;
      let secondaryTitle = location.state.secondaryTitle;
      let pictureURL = location.state.pictureURL;
      let type = location.state.type;
      songDisplay = (<div>
        <img src={pictureURL} style={{width: "360px"}}></img>
            <div>{mainTitle}</div>
            <div>{secondaryTitle}</div>
      </div>)
    }
  }

  function displayFunction() {
    if(displayPlaylist) {
      console.log("playlist should be displayed")
      return (<div>
        <img src={display.pictureURL} style={{width: "360px"}}></img>
        <div>{display.mainTitle}</div>
        <div>{display.secondaryTitle}</div>
      </div>)
    } else if(!playlistInfo) {
      console.log("Loading")
      return <div>Loading...</div>
    } else {
      console.log("album should be displayed");
      console.log("displayPlalist: " + displayPlaylist, playlistInfo)
      return (<div>
        <img src={display.pictureURL} style={{width: "360px"}}></img>
            <div>{display.mainTitle}</div>
            <div>{display.secondaryTitle}</div>
      </div>) }
    
  }
  let toDisplay = displayFunction();
  
  // @Konrad tutaj tez jest css jak cos kc kc 
    return (
        <div style={{color: "white"}}>
            <div>{songDisplay}</div>
             { playlistInfo !== undefined ? toDisplay : <div>Loading...</div> }
          <div className="navbar">
                <NavBar></NavBar>
            </div>
        </div>
      )
}

export default SongPanel