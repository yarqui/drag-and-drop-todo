interface Named {
  readonly name: string;
}

interface Greetable extends Named {
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
