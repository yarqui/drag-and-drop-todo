import { Project } from "../models/project.js";
import { Draggable } from "../models/drag-drop.js";
import { Component } from "./base-component.js";
import { autobind } from "../decorators/autobind.js";

// Project Item class
export class ProjectItem
  extends Component<HTMLUListElement, HTMLLIElement>
  implements Draggable
{
  private project: Project;

  constructor(hostId: string, project: Project) {
    super("single-project", hostId, false, project.id);
    this.project = project;

    this.configure();
    this.renderContent();
  }

  @autobind
  dragStarHandler(event: DragEvent): void {
    event.dataTransfer!.setData("text/plain", this.project.id);
    event.dataTransfer!.effectAllowed = "move";
  }

  dragEndHandler(_: DragEvent): void {
    console.log("drag end");
  }

  get persons() {
    return this.project.people > 1
      ? `${this.project.people} persons`
      : "1 person";
  }

  configure() {
    this.element.addEventListener("dragstart", this.dragStarHandler);
    this.element.addEventListener("dragend", this.dragEndHandler);
  }

  renderContent(): void {
    this.element.setAttribute("draggable", "true");

    (this.element.querySelector("h2") as HTMLHeadingElement).textContent =
      this.project.title;

    (
      this.element.querySelector("h3") as HTMLHeadingElement
    ).textContent = `${this.persons} assigned`;

    (this.element.querySelector("p") as HTMLParagraphElement).textContent =
      this.project.description;
  }
}
