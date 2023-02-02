import { convertMStoMinutes } from "../GeneralHelper";

export class PlaylistSong {

    private song: any;
    private songName: string = ''
    private songDuration: string = '';
    private songArtist: string = '';
    private songImageUrl: string = '';
    private songImageUrlForAlbum = '';

    //pass "items" array from search result
    constructor(items: any) {
        this.song = items;
        this.setSongName();
        this.setSongDuration();
        this.setSongArtist();
        this.setSongImageUrl();
        this.setSongImageUrlForAlbum();
    }

    setSongName(): void {
        this.songName = this.song.track.name;
    }
    
    setSongDuration(): void {
        this.songDuration = convertMStoMinutes(this.song.track.duration_ms);
    }

    setSongArtist(): void {
        let artistsArray = [];
        for (let i = 0; i < this.song.track.artists.length; i++) {
            artistsArray.push(this.song.track.artists[i].name);
        }
        this.songArtist = artistsArray.join(", ");
    }

    setSongImageUrl(): void {
        if(this.song.track.album.images.length === 0) {
            this.songImageUrl = '/img/defaultImg.png';
        } else {
            this.songImageUrl = this.song.track.album.images[0].url;
        }
    }

    setSongImageUrlForAlbum(): void {
        
        if(this.song.track.album.images.length === 0) {
            this.songImageUrlForAlbum = '/img/defaultImg.png';
        } else {
            this.songImageUrlForAlbum = this.song.track.album.images[0].url;
        }
    }

    public getSongName(): string {
        return this.songName;
    }

    public getSongDuration(): string {
        return this.songDuration;
    }
    public getSongArtist(): string {
        return this.songArtist;
    }

    public getSongImageUrl(): string {
        return this.songImageUrl;
    }

}