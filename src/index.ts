interface Greetable {
  name: string;
  greet(phrase: string): void;
}

class Person implements Greetable {
  constructor(public name: string, public age: number) {}

  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}. Your age is: ${this.age}`);
  }
}

let user1: Person;

user1 = new Person("Yar", 37);

user1.greet("Welcome");
