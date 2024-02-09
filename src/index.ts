// // Factories run as the regular JS code: top to bottom, but the decorator functions run bottom to top.

// function Logger(logString: string): Function {
//   console.log("LOGGER FACTORY"); // ❗1st

//   return function (constructor: Function): void {
//     console.log(logString); // ❗5th
//     console.log("constructor: ", constructor); // ❗6th
//   };
// }

// function WithTemplate(template: string, elRef: string): Function {
//   console.log("TEMPLATE FACTORY"); // ❗2nd

//   return function (constructor: any): void {
//     console.log("Rendering template"); // ❗3rd

//     const box = document.getElementById(elRef);
//     const person = new constructor();

//     if (box) {
//       box.innerHTML = template;
//       box.querySelector("h1")!.textContent = person.name;
//     }
//   };
// }

// // @Logger("LOGGING - PERSON...")
// @WithTemplate("<h1></h1>", "app")
// class Person {
//   public name: string = "Yar";

//   constructor() {
//     console.log(`Creating a person...`); //❗ 4th
//   }
// }

function LogProperty(target: any, propertyName: string | Symbol) {
  console.log("Property decorator----------------------------");
  console.log("target: ", target);
  console.log("propertyName: ", propertyName);
}

function LogAccessor(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  console.log("Accessor decorator----------------------------");
  console.log("target: ", target);
  console.log("name: ", name);
  console.log("descriptor: ", descriptor);
}

// Method decorator is the same as a the Accessor decorator
function LogMethod(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator----------------------------");
  console.log("target: ", target);
  console.log("name: ", name);
  console.log("descriptor: ", descriptor);
}

function LogParameter(
  target: any,
  methodName: string | Symbol,
  position: number
) {
  console.log("Parameter decorator----------------------------");
  console.log("target: ", target);
  console.log("methodName: ", methodName);
  console.log("position: ", position);
}

class Product {
  @LogProperty
  title: string;
  private _price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  @LogAccessor
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    }
  }

  get price() {
    return this._price;
  }

  @LogMethod
  getPriceWithTax(@LogParameter tax: number) {
    return this._price * (1 + tax);
  }
}

// const p = new Product("Mercedes", 10);
// console.log(p.getPriceWithTax(10));
// console.log((p.price = 5));
// console.log(p.getPriceWithTax(10));
