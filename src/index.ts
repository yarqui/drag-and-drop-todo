// function Logger(logString: string): Function {
//   console.log("LOGGER FACTORY"); // ❗1st

//   return function (constructor: Function): void {
//     console.log(logString); // ❗5th
//     console.log("constructor: ", constructor); // ❗6th
//   };
// }

// function LogProperty(target: any, propertyName: string | Symbol) {
//   console.log("Property decorator----------------------------");
//   console.log("target: ", target);
//   console.log("propertyName: ", propertyName);
// }

// function LogAccessor(
//   target: any,
//   name: string,
//   descriptor: PropertyDescriptor
// ) {
//   console.log("Accessor decorator----------------------------");
//   console.log("target: ", target);
//   console.log("name: ", name);
//   console.log("descriptor: ", descriptor);
// }

// // Method decorator is the same as a the Accessor decorator
// function LogMethod(
//   target: any,
//   name: string | Symbol,
//   descriptor: PropertyDescriptor
// ) {
//   console.log("Method decorator----------------------------");
//   console.log("target: ", target);
//   console.log("name: ", name);
//   console.log("descriptor: ", descriptor);
// }

// function LogParameter(
//   target: any,
//   methodName: string | Symbol,
//   position: number
// ) {
//   console.log("Parameter decorator----------------------------");
//   console.log("target: ", target);
//   console.log("methodName: ", methodName);
//   console.log("position: ", position);
// }

// class Product {
//   // @LogProperty
//   title: string;
//   private _price: number;

//   constructor(title: string, price: number) {
//     this.title = title;
//     this._price = price;
//   }

//   // @LogAccessor
//   set price(val: number) {
//     if (val > 0) {
//       this._price = val;
//     }
//   }

//   get price() {
//     return this._price;
//   }

//   // @LogMethod
//   getPriceWithTax(@LogParameter tax: number) {
//     return this._price * (1 + tax);
//   }
// }

function WithTemplate(template: string, elRef: string) {
  console.log("TEMPLATE FACTORY");

  // ❗specify that type T extends the object with  the "new" property (meaning that it will be a constructor, and can be instantiated). This constructor will accept any number of arguments, and this constructor will return an object with the property "name" to make sure that there will be such a property in the object.
  return function <T extends { new (...args: any[]): { name: string } }>(
    // The decorator function receives an original constructor of a class, that we added decorator to
    originalConstructor: T
  ) {
    // In a decorator function we return a new constructor, which replaces the original constructor (original class).
    // We also extend from the originalConstructor as we don't want to loose the properties of the originalConstructor
    return class extends originalConstructor {
      // pass to the new constructor any number of arguments
      constructor(..._: any[]) {
        super();

        // add our own new logic to the original class, therefore it will be run only when our class is instantiated
        console.log("Rendering template");
        const box = document.getElementById(elRef);

        if (box) {
          box.innerHTML = template;
          box.querySelector("h1")!.textContent = this.name; // add "this" to reference the instance of the class
        }
      }
    };
  };
}

// @Logger("LOGGING - PERSON...")
@WithTemplate("<h1></h1>", "#app")
class Person {
  public name: string = "Yar";

  constructor() {
    console.log(`Creating a person...`);
  }
}

const p = new Person();
