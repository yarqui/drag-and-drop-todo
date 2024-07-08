class ProjectInput {
  templateEl: HTMLTemplateElement;
  rootEl: HTMLDivElement;
  element: HTMLFormElement;

  constructor() {
    this.templateEl = <HTMLTemplateElement>(
      document.getElementById("project-input")
    );
    this.rootEl = <HTMLDivElement>document.getElementById("app");

    const importedNode = document.importNode(this.templateEl.content, true);
    this.element = <HTMLFormElement>importedNode.firstElementChild;
    this.attach();
  }

  private attach() {
    this.rootEl.insertAdjacentElement("afterbegin", this.element);
  }
}

const projInput = new ProjectInput();
