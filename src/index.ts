// create a validator config to configure the storage of validators we work with
interface ValidatorConfig {
  // propName would be the class name
  [propName: string]: {
    // validatableProps - concrete properties of the class that have validators attached to them (ex. 'title', 'price')
    // Values would be the list of validators: ['required', 'positive']
    [validatableProp: string]: string[];
  };
}

// initialize registeredValidators with an empty object, as when the app is loaded, no validators has been registered yet
const registeredValidators: ValidatorConfig = {};

// in this property decorator we want to add values to the registry "registeredValidators"
function RequiredProp(target: any, propName: string) {
  // target.constructor.name - is the name of the class - prototype of the object that property sits in
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "required",
    ],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "positive",
    ],
  };
}

// validate function goes through all registered validators, and runs different logic based on which validators it finds
// retrieve the configuration of the object - "obj"
// for that we need to find out which constructor function the object is based on, and then get validation config
function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  console.log("objValidatorConfig:", objValidatorConfig);

  // if we don't find anything in objValidatorConfig, we return true, because the obj is valid and there is nothing to validate
  if (!objValidatorConfig) {
    return true;
  }

  let isValid: boolean = true;
  // but if we find something in the objValidatorConfig, we iterate through it to access all property names ('propName') for which we have validators
  for (const prop in objValidatorConfig) {
    //   then we go through all the validators of the propName. ex. title: ['positive', 'required']
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          //  if we encounter false once in our loop, then others "true" doesn't matter, and the form is not valid, as "false && true" === false;
          isValid = isValid && !!obj[prop];
          break;

        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }

  return isValid;
}

class Course {
  // don't use the shortcut definition deliberately to apply property decorators
  @RequiredProp
  public title: string;

  @RequiredProp
  @PositiveNumber
  public price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const form = document.querySelector("form")! as HTMLFormElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  const titleEl = document.getElementById("title")! as HTMLInputElement;
  const priceEl = document.getElementById("price")! as HTMLInputElement;

  const createdCourse = new Course(titleEl.value, +priceEl.value);
  console.log("createdCourse:", createdCourse);

  if (!validate(createdCourse)) {
    alert("The properties are not valid");
    return;
  }
});

console.log("registeredValidators:", registeredValidators);
