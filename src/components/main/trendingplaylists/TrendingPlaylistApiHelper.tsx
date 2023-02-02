export class TrendingPlaylistApiHelper  {

    private items: any;

   public constructor(searchResult: any) {
        this.items = searchResult.playlists.items;
    }
    private checkIfItemsIsNull() {
        if (this.items.length === 0) {
           return true;
        }
        return false;
    }
    
    private getDescription(index: number) {
        if(this.checkIfItemsIsNull()) {
            return null;
        }
        return this.items[index].description;
    }

    public getItems() {
        return this.items;
    }


    public getPlaylistImage(index: number): string | null{
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

    public getPlaylistName(index: number) {
        if(this.checkIfItemsIsNull()) {
            return null;
        }
        return this.items[index].name;
    }

    public getPlaylistNameAndImage(index: number) {
        if(this.checkIfItemsIsNull()) {
            return null;
        }
        let image;
        let name;
        if(this.items[index].images.length === 0) {
            image = '/img/defaultImg.png'
        } else {
            image = this.items[index].images[0].url;
        }
        name = this.items[index].name;

        return [image, name];
    }

    public getSongList(index: number) {
        if(this.checkIfItemsIsNull()) {
            return null;
        }
        return this.items[index].tracks.href;
    }

    public getPlaylistId(index: number) {
        if(this.checkIfItemsIsNull()) {
            return null;
        }
        return this.items[index].id;
    }

    public getPlaylistOwner(index: number) {
        if(this.checkIfItemsIsNull()) {
            return null;
        }
        return this.items[index].owner.display_name;
    }

} 
