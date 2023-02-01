export async function getSpotifyAPIToken() {
    const authParameters = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=client_credentials&client_id=' + import.meta.env.VITE_SPOTIFY_CLIENTID + '&client_secret=' + import.meta.env.VITE_SPOTIFY_SECRET
      }
      fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(result => result.json())
      .then(data => {
        console.log(data);
        return (data.access_token)
      })
      .catch(error => {
        console.log(error);
      });
}

export async function searchSpotify(query: string) {
  //write a spotify web api request for the search query and return the result as a json object
  const encodedToken = encodeURIComponent(import.meta.env.VITE_SPOTIFY_ACCESS_TOKEN);
  const searchParameters: any = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${encodedToken}`
    }
  }
    const searchResult = await fetch('https://api.spotify.com/v1/search?q=' + query + '&type=album%2Cartist%2Cplaylist%2Ctrack%2Cshow%2Cepisode%2Caudiobook&limit=10', searchParameters)
    .then((result) => result.json())
    .then((data) => {
      return data;
    })
    return searchResult;
}

export async function getTrendingPlaylists() {
  const encodedToken = encodeURIComponent(import.meta.env.VITE_SPOTIFY_ACCESS_TOKEN);
  const searchParameters: any = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${encodedToken}`
    }
  }

  const searchResult = await fetch('https://api.spotify.com/v1/browse/featured-playlists?country=PL&locale=pl_PL&limit=10', searchParameters)
  .then((result) => result.json())
  .then((data) => {
    return data;
  })
  return searchResult;
}

export async function getNewReleases() {

  const encodedToken = encodeURIComponent(import.meta.env.VITE_SPOTIFY_ACCESS_TOKEN);
  const searchParameters: any = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${encodedToken}`
    }
  }

  const searchResult = await fetch('https://api.spotify.com/v1/browse/new-releases?country=PL&limit=10', searchParameters)
  .then((result) => result.json())
  .then((data) => {
    return data;
  })
  return searchResult;

}

export async function getGenrePlaylists(genre: string) {
  
  const encodedToken = encodeURIComponent(import.meta.env.VITE_SPOTIFY_ACCESS_TOKEN);
  const searchParameters: any = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${encodedToken}`
    }
  }

  const searchResult = await fetch(`https://api.spotify.com/v1/browse/categories/${genre.toLowerCase()}/playlists?country=PL&limit=10`, searchParameters)
  .then((result) => result.json())
  .then((data) => {
    return data;
  })
  return searchResult;

}

export async function getAlbumTracks(albumId: string) {
  const encodedToken = encodeURIComponent(import.meta.env.VITE_SPOTIFY_ACCESS_TOKEN);
  const searchParameters: any = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${encodedToken}`
    }
  }

  const searchResult = await fetch(`https://api.spotify.com/v1/albums/${albumId}/tracks?market=PL&limit=50`, searchParameters)
  .then((result) => result.json())
  .then((data) => {
    return data;
  })
  return searchResult;


}

export async function getAlbum(albumId: string) {
  const encodedToken = encodeURIComponent(import.meta.env.VITE_SPOTIFY_ACCESS_TOKEN);
  const searchParameters: any = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${encodedToken}`
    }
  }

  const searchResult = await fetch(`https://api.spotify.com/v1/albums/${albumId}?market=PL`, searchParameters)
  .then((result) => result.json())
  .then((data) => {
    return data;
  })
  return searchResult;

}

export async function getPlaylist(playlistId: string) {
  const encodedToken = encodeURIComponent(import.meta.env.VITE_SPOTIFY_ACCESS_TOKEN);
  const searchParameters: any = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${encodedToken}`
    }
  }

  const searchResult = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}?market=PL`, searchParameters)
  .then((result) => result.json())
  .then((data) => {
    return data;
  })
  return searchResult;


}
