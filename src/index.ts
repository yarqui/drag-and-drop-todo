// Factories run as the regular JS code: top to bottom, but the decorator functions run bottom to top.

function Logger(logString: string): Function {
  console.log("LOGGER FACTORY"); // ❗1st

  return function (constructor: Function): void {
    console.log(logString); // ❗5th
    console.log("constructor", constructor); // ❗6th
  };
}

function WithTemplate(template: string, elRef: string): Function {
  console.log("TEMPLATE FACTORY"); // ❗2nd

  return function (constructor: any): void {
    console.log("Rendering template"); // ❗3rd

    const box = document.getElementById(elRef);
    const person = new constructor();

    if (box) {
      box.innerHTML = template;
      box.querySelector("h1")!.textContent = person.name;
    }
  };
}

@Logger("LOGGING - PERSON...")
@WithTemplate("<h1></h1>", "app")
class Person {
  public name: string = "Yar";

  constructor() {
    console.log(`Creating a person...`); //❗ 4th
  }
}
