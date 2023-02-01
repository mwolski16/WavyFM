import { convertMStoMinutes } from '../GeneralHelper';

export class PlaylistHelper  {

    private items: any;

    public constructor(searchResult: any) {
         this.items = searchResult;
     }


     private checkIfItemsIsNull() {
         if (!this.items) {
            return true;
         }
         return false;
     }
     public getPlaylistName() {
        if(this.checkIfItemsIsNull()) {
            return null;
        }
            return this.items.name;
     }
     
     public getTrackNames() {
        if(this.checkIfItemsIsNull()) {
            return null;
        }
            let trackNames = [];
            for (let i = 0; i < this.items.tracks.items; i++) {
                trackNames.push(this.items.tracks.items[i].name);
            }
            return trackNames;
     }

     public getPlaylistArt() {
        if(this.checkIfItemsIsNull()) {
            return null;
        }
            return this.items.images[0].url;
     }

     public getTrackDuration(index: number) {
        if(this.checkIfItemsIsNull() || !this.getTrackNames()) {
            return null;
        }
        let durationArray = [];
        for (let i = 0; i < this.getTrackNames()!.length; i++) {
            let minuteDuration = convertMStoMinutes(this.items.tracks.items[i].duration_ms);
            durationArray.push(minuteDuration);
        }
            
     }

     public getOwnersName() {
        if(this.checkIfItemsIsNull()) {
            return null;
        }
            return this.items.owner.display_name;
     }
} 
