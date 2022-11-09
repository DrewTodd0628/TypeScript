
class Playlist {

  static list: string[] = [];

  public static addSong(song: string): void {
    Playlist.list.push(song);
  }

  public static getSongs(): string[] {
    return Playlist.list;
  }
}

Playlist.addSong('The Waves of Sound');
console.log(Playlist.getSongs());



interface Item {
  name: string,
  description: string
}

class Warehouse{

  constructor(private stock: Item[] = []) {
    this.stock = stock;
  }

  getAll(): Item[] {
    return this.stock;
  }

  getItem(item: Item): Item {
    return this.stock.find(o => o.name === item.name)!;
  }

  setItem(item: Item): void {
    this.stock.push(item);
  }
}

const itemOne: Item = {
  name: "Cola",
  description: "20oz bottle"
}
const itemTwo: Item = {
  name: "Cake",
  description: "Double layered"
}

const warehouse = new Warehouse();
warehouse.setItem(itemOne);
warehouse.setItem(itemTwo);
console.log(warehouse.getAll());
console.log(warehouse.getItem(itemOne));

