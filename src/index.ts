interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age?: number;

  constructor(n: string, age?: number) {
    this.name = n;

    if (age) {
      this.age = age;
    }
  }

  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}. Your age is: ${this.age}`);
  }
}

let user1: Greetable;

user1 = new Person("Yar");
console.log("user1:", user1);
