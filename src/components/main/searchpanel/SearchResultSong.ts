export class SearchResultSong  {

    private items: any;
    private type: string = 'song';

   public constructor(searchResult: any) {
        this.items = searchResult.tracks.items;
    }
    private checkIfItemsIsNull() {
        if (this.items.length === 0) {
           return true;
        }
        return false;
    }
    
    private getSong(index: number) {
         if(this.checkIfItemsIsNull()) {
            return null;
        }
        return this.items[index];
    }

    public getType() {
        return this.type;
    }

    public getItems() {
        return this.items;
    }

    public getSongName(index: number) {
         if(this.checkIfItemsIsNull()) {
            return null;
        }
        return this.getSong(index).name;
    }

    public getSongImage(index: number) {
         if(this.checkIfItemsIsNull()) {
            return null;
        }
        return this.getSong(index).album.images[0].url;
    }

    public getSongArtistName(index: number) {
         if(this.checkIfItemsIsNull()) {
            return null;
        }
         let artistsArray = [];
         for (let i = 0; i < this.getSong(index).artists.length; i++) {
             artistsArray.push(this.getSong(index).artists[i].name);
         }
         return artistsArray.join(', ');
     }

     public getSongReleaseYear(index: number) {
         if(this.checkIfItemsIsNull()) {
            return null;
        }
        return this.getSong(index).album.release_date.split('-')[0];
    } 
}