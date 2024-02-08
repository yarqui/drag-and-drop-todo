// We can create a decorator factory for more flexibility.
// Create a function that returns a decorator function
function Logger(logString: string): Function {
  return function (constructor: Function): void {
    console.log(logString);
    console.log("constructor", constructor);
  };
}

function WithTemplate(template: string, elRef: string): Function {
  return function (constructor: any): void {
    const box = document.getElementById(elRef);
    const person = new constructor();
    if (box) {
      box.innerHTML = template;
      box.querySelector("h1")!.textContent = person.name;
    }
  };
}

// Here we have to call this factory and pass the argument
// @Logger("LOGGING - PERSON...")
@WithTemplate("<h1></h1>", "app")
class Person {
  public name: string = "Yar";

  constructor() {
    console.log(`Creating a person... ${this.name}`);
  }
}

const yar = new Person();
