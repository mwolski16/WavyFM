export class SearchResultPlaylist  {

    private items: any;
    private type: string = 'playlist';

   public constructor(searchResult: any) {
        this.items = searchResult.playlists.items;
    }
    private checkIfItemsIsNull() {
        if (this.items.length === 0) {
           return true;
        }
        return false;
    }
    
    
    private getPlaylist(index: number) {
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

    public getPlaylistName(index: number) {
        if(this.checkIfItemsIsNull()) {
            return null;
        }
        return this.getPlaylist(index).name;
    }

    public getPlaylistImage(index: number) {
        if(this.checkIfItemsIsNull()) {
            return null;
        }
        return this.getPlaylist(index).images[0].url;
    }

    public getPlaylistCreator(index: number) {
        if(this.checkIfItemsIsNull()) {
            return null;
        }
        return this.getPlaylist(index).owner.display_name;
    }
}