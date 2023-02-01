export class GenrePanelApiHelper  {

    private items: any;

   public constructor(searchResult: any) {
       if (searchResult.playlists !== undefined) {
           this.items = searchResult.playlists.items;
       }
   }
    private checkIfItemsIsNull() {
        if (this.items.length === 0) {
           return true;
        }
        return false;
    }


    public getItems() {
        return this.items;
    }


    public getAlbumImage(index: number): string | null{
        if(this.checkIfItemsIsNull()) {
            return null;
        }
        let image; 
        if(this.items[index].images.length === 0) {
            image = '/img/defaultImg.png'
        } else {
            image = this.items[index].images[0].url;
        }
        return image;
    }

    public getAlbumId(index: number) {
        if(this.checkIfItemsIsNull()) {
            return null;
        }
        return this.items[index].id;
    }

    public getAlbumName(index: number) {
        if(this.checkIfItemsIsNull()) {
            return null;
        }
        return this.items[index].name;
    }


    public getSongList(index: number) {
        if(this.checkIfItemsIsNull()) {
            return null;
        }
        return this.items[index].tracks.href;
    }

} 
