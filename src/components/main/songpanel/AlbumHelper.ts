import { convertMStoMinutes } from '../GeneralHelper';

export class AlbumHelper  {

    private items: any;

    public constructor(searchResult: any) {
         this.items = searchResult;
     }


     private checkIfItemsIsNull() {
         if (this.items.length === 0) {
            return true;
         }
         return false;
     }
     public getAlbumName() {
            return this.items.name;
     }
     
     public getTrackNames() {
            let trackNames = [];
            for (let i = 0; i < this.items.tracks.items; i++) {
                trackNames.push(this.items.tracks.items[i].name);
            }
            return trackNames;
     }

     public getAlbumArt() {
            return this.items.images[0].url;
     }

     public getTrackDuration(index: number) {
        let durationArray = [];
        for (let i = 0; i < this.getTrackNames().length; i++) {
            let minuteDuration = convertMStoMinutes(this.items.tracks.items[i].duration_ms);
            durationArray.push(minuteDuration);
        }
            
     }

     public getArtistName() {
            let artistsArray = [];
            for (let i = 0; i < this.items.artists.length; i++) {
                artistsArray.push(this.items.artists[i].name);
            }
            return artistsArray;
     }
} 
