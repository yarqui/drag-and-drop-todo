// interface Named {
//   readonly name: string;
// }

// interface Greetable extends Named {
//   greet(phrase: string): void;
// }

// class Person implements Greetable {
//   name: string;

//   constructor(n: string, public age: number) {
//     this.name = n;
//   }

//   greet(phrase: string): void {
//     console.log(`${phrase} ${this.name}. Your age is: ${this.age}`);
//   }
// }

// let user1: Greetable;

// user1 = new Person("Yar", 37);

// you also can use types for it
// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn = (a, b) => {
  console.log(a + b);
  return a + b;
};

add(5, 6);
