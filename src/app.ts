// Autobind decorator
function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

// ProjectInput class
class ProjectInput {
  templateEl: HTMLTemplateElement;
  rootEl: HTMLDivElement;
  formEl: HTMLFormElement;
  titleInputEl: HTMLInputElement;
  descriptionInputEl: HTMLInputElement;
  peopleInputEl: HTMLInputElement;

  constructor() {
    this.templateEl = <HTMLTemplateElement>(
      document.getElementById("project-input")
    );
    this.rootEl = <HTMLDivElement>document.getElementById("app");

    const importedNode = document.importNode(this.templateEl.content, true);
    this.formEl = <HTMLFormElement>importedNode.firstElementChild;
    this.formEl.id = "user-input";

    this.titleInputEl = <HTMLInputElement>this.formEl.querySelector("#title");
    this.descriptionInputEl = <HTMLInputElement>(
      this.formEl.querySelector("#description")
    );
    this.peopleInputEl = <HTMLInputElement>this.formEl.querySelector("#people");

    this.configure();
    this.attach();
  }

  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputEl.value;
    const enteredDescription = this.descriptionInputEl.value;
    const enteredPeople = this.peopleInputEl.value;

    return [enteredTitle, enteredDescription, Number(enteredPeople)];
  }

  @autobind
  private submitHandler(e: Event) {
    e.preventDefault();
    console.log(this.titleInputEl.value);
    const userInput = this.gatherUserInput();

    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput;
      console.log(title, desc, people);
      this.formEchl.reset();
    }
  }

  private configure() {
    this.formEl.addEventListener("submit", this.submitHandler);
  }

  private attach() {
    this.rootEl.insertAdjacentElement("afterbegin", this.formEl);
  }
}

const projInput = new ProjectInput();
