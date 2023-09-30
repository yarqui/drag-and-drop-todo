class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return `No such item ${item}`;
    }

    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Yar");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(37);
numberStorage.addItem(36);
numberStorage.addItem(33);
numberStorage.removeItem(3);
console.log(numberStorage.getItems());

const objectStorage = new DataStorage<object>();
objectStorage.addItem({ name: "Yar" });
objectStorage.addItem({ name: "Adam" });
objectStorage.removeItem({ name: "Yar" }); // ❌ reference to  a different object
console.log("objectStorage", objectStorage.getItems()); // ❌2 objects remain

// ✅ Will work this way
const otherObjectStorage = new DataStorage<object>();
const yarObject = { name: "Yar" };
otherObjectStorage.addItem(yarObject);
otherObjectStorage.addItem({ name: "Adam" });
otherObjectStorage.removeItem(yarObject); // ✅ the same reference to an object
console.log("otherObjectStorage", otherObjectStorage.getItems()); // ✅ only Adam object remains
