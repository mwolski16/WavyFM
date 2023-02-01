import { convertMStoMinutes } from "../GeneralHelper";

export class PlaylistSong {

    private song: any;
    private songName: string = ''
    private songDuration: string = '';
    private songArtist: string = '';

    //pass "items" array from search result
    constructor(items: any) {
        this.song = items;
        this.setSongName();
        this.setSongDuration();
        this.setSongArtist();
    }

    setSongName(): void {
        //console.log(this.song)
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

    public getSongName(): string {
        return this.songName;
    }

    public getSongDuration(): string {
        return this.songDuration;
    }
    public getSongArtist(): string {
        return this.songArtist;
    }

}