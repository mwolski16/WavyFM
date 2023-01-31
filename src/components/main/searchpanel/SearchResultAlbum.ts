export class SearchResultAlbum  {

    private items: any;
    private type: string = 'album';

    public constructor(searchResult: any) {
         this.items = searchResult.albums.items;
     }


     private checkIfItemsIsNull() {
         if (this.items.length === 0) {
            return true;
         }
         return false;
     }
     
     private getAlbum(index: number) {
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
 
     public getAlbumsLength() {
        if(this.checkIfItemsIsNull()) {
            return null;
        }
         return this.items.length;
     }
 
     public getAlbumName(index: number) {
        if(this.checkIfItemsIsNull()) {
            return null;
        }
         return this.getAlbum(index).name;
     }
 
     public getAlbumImage(index: number) {
        if(this.checkIfItemsIsNull()) {
            return null;
        }
         return this.getAlbum(index).images[0].url;
     }
 
     public getAlbumArtistName(index: number) {
        if(this.checkIfItemsIsNull()) {
            return null;
        }
         let artistsArray = [];
         for (let i = 0; i < this.getAlbum(index).artists.length; i++) {
             artistsArray.push(this.getAlbum(index).artists[i].name);
         }
         return artistsArray.join(', ');
     }
} 
