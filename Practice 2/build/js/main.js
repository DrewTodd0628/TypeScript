"use strict";
class Playlist {
    static addSong(song) {
        Playlist.list.push(song);
    }
    static getSongs() {
        return Playlist.list;
    }
}
Playlist.list = [];
Playlist.addSong('The Waves of Sound');
console.log(Playlist.getSongs());
class Warehouse {
    constructor(stock = []) {
        this.stock = stock;
        this.stock = stock;
    }
    getAll() {
        return this.stock;
    }
    getItem(item) {
        return this.stock.find(o => o.name === item.name);
    }
    setItem(item) {
        this.stock.push(item);
    }
}
const itemOne = {
    name: "Cola",
    description: "20oz bottle"
};
const itemTwo = {
    name: "Cake",
    description: "Double layered"
};
const warehouse = new Warehouse();
warehouse.setItem(itemOne);
warehouse.setItem(itemTwo);
console.log(warehouse.getAll());
console.log(warehouse.getItem(itemOne));
