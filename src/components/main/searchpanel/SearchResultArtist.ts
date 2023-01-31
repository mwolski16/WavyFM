export class SearchResultArtist  {

    private items: any;
    private type: string = 'artist';

   public constructor(searchResult: any) {
        this.items = searchResult.artists.items;
    }
    private checkIfItemsIsNull() {
        if (this.items.length === 0) {
           return true;
        }
        return false;
    }
    
    private getArtist(index: number) {
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

    public getArtistName(index: number) {
        if(this.checkIfItemsIsNull()) {
            return null;
        }
        return this.getArtist(index).name;
    }

    public getArtistImage(index: number) {
        if(this.checkIfItemsIsNull()) {
            return null;
        }
        let image; 
        if(this.getArtist(index).images.length === 0) {
            image = '/img/defaultImg.png'
        } else {
            image = this.getArtist(index).images[0].url;
        }
        return image;
    }
} 
