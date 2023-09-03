interface Greetable {
  readonly name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;

  constructor(n: string, public age: number) {
    this.name = n;
  }

  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}. Your age is: ${this.age}`);
  }
}

let user1: Greetable;

user1 = new Person("Yar", 37);

// ❌ user1.name = "Coco"; //Cannot assign to name because it is a read-only property.
console.log("user1.name:", user1.name);
