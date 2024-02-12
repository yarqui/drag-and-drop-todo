// Method and accessor decorators can return something too, that Typescript will not ignore.
function Autobind(
  _: any,
  _2: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this); // ❗ "this" refers to whatever that triggers this getter. In our case the concrete object (instance) that will have this method. Getter provides an extra layer between our function and an event listener, so this will refer to the instance.
      return boundFn;
    },
  };

  return adjustedDescriptor; // adjusted descriptor will overwrite the original descriptor of method that we attach our decorator to.
}

class Printer {
  message: string = "Pls, call me";

  @Autobind
  showMessage(): void {
    console.log(this.message);
  }
}

const p = new Printer();

const button = document.querySelector("button")!;
button.addEventListener("click", p.showMessage); // now it autobinds the context to the object correctly, and doesn't refer to the context of the addEventListener function
