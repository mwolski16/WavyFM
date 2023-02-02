import React, { useEffect, useState } from 'react'
import './newReleases.scss';
import mockItems from '../../mockItems.json';
import '../mainApp.scss'
import { getAlbum, getNewReleases, getPlaylist } from '../SpotifyAPIWrapper';
import { NewReleasesApiHelper } from './NewReleasesApiHelper';
import { AlbumSong } from '../songpanel/AlbumSong';
import { useNavigate } from 'react-router-dom';

function NewReleases() {
  const navigator = useNavigate();

  const [newReleasesAlbumArt, setNewReleasesAlbumArt] = useState<string[]>([]);
  const [newReleasesAlbumNameAndArt, setnewReleasesAlbumNameAndArtt] = useState<string[]>([]);
  const [albumsId, setAlbumsId] = useState<string[]>([]);

  useEffect(() => {
    getNewReleasesAlbumInfo();
  }, []);
  

    async function getNewReleasesAlbumInfo() {
      const newReleasesAlbums = await getNewReleases();
      const newReleasesAlbumsArray = new NewReleasesApiHelper(newReleasesAlbums);
      let albumArtArray: any[] = [];
      let albumIdArray: any[] = [];
      let albumNameAndArtArray: any[] = [];

      await newReleasesAlbumsArray.getItems().map((element: any, index: number) => {
        albumArtArray.push(newReleasesAlbumsArray.getAlbumImage(index));
        albumIdArray.push(newReleasesAlbumsArray.getAlbumId(index));
        albumNameAndArtArray.push(newReleasesAlbumsArray.getPlaylistNameAndImage(index));
      })
      setNewReleasesAlbumArt(albumArtArray);
      setAlbumsId(albumIdArray);
      setnewReleasesAlbumNameAndArtt(albumNameAndArtArray);
    }

    async function albumClick(e: any, index: number, albumCoverUrl: string) {
      e.preventDefault();
      let albumTracks: AlbumSong[] = [];
      let albumName: string = '';
      let albumCreator: string = '';
      getAlbum(albumsId[index]).then((album: any) => {
        albumName = album.name
        albumCreator = album.artists[0].name;
        album.tracks.items.map((track: any) => {
          albumTracks.push(new AlbumSong(track));
        })
        navigator({
          pathname: "/music",
          search: `?code=${albumsId[index]}`,
        }, {state: {mainTitle: albumName, secondaryTitle: albumCreator, art: albumCoverUrl, tracklist: albumTracks}})
      })
      }
  return (
    <div className='genres_main'>
    <div className='genres_text'>New Releases</div>
    <div className='genres_coverScroll'>
          {newReleasesAlbumNameAndArt?.map((data: string, index: number) => {
            return (
                <div>
                  <div key={index}  className='genres_coverGradient' onClick={(e) => {albumClick(e, index, data[0])}}>
                    <img className='genres_cover' key={index} src={data[0]} alt='Playlist cover'></img>
                  </div>
                  <div className='genres_coverTitle'>
                    {data[1]}
                  </div>
                </div>
            )})}
    </div>
   
</div>
  )
}

export default NewReleases