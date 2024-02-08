// We can create a decorator factory for more flexibility.
// Create a function that returns a decorator function
function Logger(logString: string): Function {
  return function (constructor: Function): void {
    console.log(logString);
    console.log("constructor", constructor);
  };
}

// Here we have to call this factory and pass the argument
@Logger("LOGGING - PERSON...")
class Person {
  constructor(public name: string) {
    console.log(`Creating a person... ${name}`);
  }
}

const yar = new Person("Yar");
