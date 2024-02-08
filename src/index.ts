// A decorator is just a function.
// Decorators should have arguments and are executed when the class is defined, not instantiated
function Logger(constructor: Function): void {
  console.log("Logging...");
  console.log("constructor", constructor);
}

// To add a decorator we use @ symbol and right after it we should point to a function.
@Logger
class Person {
  constructor(public name: string) {
    console.log(`Creating a person... ${name}`);
  }
}

// const yar = new Person("Yar");
