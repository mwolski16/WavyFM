import React, { useState } from 'react'
import NavBar from '../../generic/NavBar'
import '../mainApp.scss'
import Input from '../../generic/Input';
import mockArtists from '../../mockArtist.json';
import SearchResultPanel from './SearchResultPanel';
import { any } from 'prop-types';
import { SearchResultArtist } from './SearchResultArtist';
import { SearchResultSong } from './SearchResultSong';
import { SearchResultAlbum } from './SearchResultAlbum';
import { SearchResultPlaylist } from './SearchResultPlaylist';
import { searchSpotify } from '../SpotifyAPIWrapper';

type QueryType = 'artist' | 'song' | 'album' | 'playlist';

function SearchPanel() {

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResultArtist | SearchResultSong | SearchResultAlbum | SearchResultPlaylist>();
  const [queryType, setQueryType] = useState<QueryType>('song');

  async function searchFunction(e: any) {
    e.preventDefault();
    setSearchResults(await getDataFromApi(search, queryType));
  }

  //This should be async
  async function getDataFromApi(query: string, type: QueryType): Promise<any> {

    let searchResult = await searchSpotify(query);
    if(type === 'artist') {
      return new SearchResultArtist(searchResult);
    } else if(type === 'song') {
      return new SearchResultSong(searchResult);
    } else if(type === 'album') {
      return new SearchResultAlbum(searchResult);
    } else if(type === 'playlist') {
      return new SearchResultPlaylist(searchResult);
    }

  }

  function createSearchResultPanel(element: any, index: number) {
    if (searchResults instanceof SearchResultArtist) {

      let artistName = searchResults.getArtistName(index);
      let pictureURL = searchResults.getArtistImage(index);

      return (<SearchResultPanel name={artistName} pictureURL={pictureURL} type='artist' key={index}/>)

    } else if (searchResults instanceof SearchResultSong) {

      let songName = searchResults.getSongName(index);
      let artistName = searchResults.getSongArtistName(index);
      let pictureURL = searchResults.getSongImage(index);
      
      return (<SearchResultPanel songName={songName} name={artistName} pictureURL={pictureURL} type='song' key={index}/>)

    } else if (searchResults instanceof SearchResultAlbum) {

      let albumName = searchResults.getAlbumName(index);
      let artistName = searchResults.getAlbumArtistName(index);
      let pictureURL = searchResults.getAlbumImage(index);

      return (<SearchResultPanel albumName={albumName} name={artistName} pictureURL={pictureURL} type='album' key={index}/>)

    } else if (searchResults instanceof SearchResultPlaylist) {

      let playlistName = searchResults.getPlaylistName(index);
      let pictureURL = searchResults.getPlaylistImage(index);

      return (<SearchResultPanel playlistName={playlistName} pictureURL={pictureURL} type='playlist' key={index}/>)
    }
  }


  return (
    <div className="main">
        <div className="searchPanel">
            <h1 className="panelHeader">Search</h1>
            <div className="searchbar">
              <div className='searchbar_container'>
                <form onSubmit={(e) => {searchFunction(e)}}>
                  <img className="searchIcon" src="src/components/icons/svg/loopa.svg" />
                  <Input cssClasses={["searchbar_input"]} placeHolderText="what do you want to find?" onChangeFunction={(e) => {setSearch(e.target.value)}}/>
                </form>
              </div>
              <div className="searchTypeWrapper">
                <div className={queryType=="song"? "checked" : ""}>
                  <span>Song</span>
                  <input type='radio' name="genre"  onClick={() => {setQueryType('song')}}></input>
                </div>
                <div className={queryType=="album"? "checked" : ""}>
                  <span>Album</span>
                  <input type='radio' name="genre"   onClick={() => {setQueryType('album')}}></input>
                </div>
                <div className={queryType=="artist"? "checked" : ""}>
                  <span>Artist</span>
                  <input type='radio' name="genre"   onClick={() => {setQueryType('artist')}}></input>
                </div>
                <div className={queryType=="playlist"? "checked" : ""}>
                  <span>Playlist</span>
                  <input type='radio' name="genre"   onClick={() => {setQueryType('playlist')}}></input>
                </div>
              </div>
            </div>
            {searchResults?.getItems().length !== 0 ? searchResults?.getItems().map((element: any, index: number) => {
              return createSearchResultPanel(element, index);
            })
            : <div className="searchResult"></div>
}
            <div className="navbar">
                <NavBar></NavBar>
            </div>
        </div>
    </div>
  )
}

export default SearchPanel