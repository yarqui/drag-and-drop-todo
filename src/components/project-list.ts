/// <reference path="../components/base-component.ts"/>
/// <reference path="../decorators/autobind.ts"/>
/// <reference path="../state/project-state.ts"/>
/// <reference path="../models/drag-drop.ts"/>
/// <reference path="../models/project.ts"/>

namespace App {
  // ProjectList Class
  export class ProjectList
    extends Component<HTMLDivElement, HTMLElement>
    implements DragTarget
  {
    assignedProjects: Project[];

    constructor(private type: "active" | "finished") {
      super("project-list", "app", false, `${type}-projects`);
      this.assignedProjects = [];

      this.configure();
      this.renderContent();
    }

    @autobind
    dragOverHandler(event: DragEvent): void {
      if (event.dataTransfer?.types[0] === "text/plain") {
        event.preventDefault();
        const listEl = this.element.querySelector("ul") as HTMLUListElement;
        listEl.classList.add("droppable");
      }
    }

    @autobind
    dragLeaveHandler(_: DragEvent): void {
      const listEl = this.element.querySelector("ul") as HTMLUListElement;
      listEl.classList.remove("droppable");
    }

    @autobind
    dropHandler(event: DragEvent): void {
      const prjId = event.dataTransfer?.getData("text/plain");
      if (prjId) {
        projectState.moveProject(
          prjId,
          this.type === "active" ? ProjectStatus.Active : ProjectStatus.Finished
        );
      }
    }

    configure() {
      this.element.addEventListener("dragover", this.dragOverHandler);
      this.element.addEventListener("dragleave", this.dragLeaveHandler);
      this.element.addEventListener("drop", this.dropHandler);

      projectState.addListener((projects: Project[]) => {
        const relevantProjects = projects.filter((proj) => {
          if (this.type === "active") {
            return proj.status === ProjectStatus.Active;
          }
          return proj.status === ProjectStatus.Finished;
        });

        this.assignedProjects = relevantProjects;
        this.renderProjects();
      });
    }

    renderContent() {
      const listId = `${this.type}-projects-list`;
      (this.element.querySelector("ul") as HTMLUListElement).id = listId;
      (
        this.element.querySelector("h2") as HTMLHeadElement
      ).textContent = `${this.type.toUpperCase()} PROJECTS`;
    }

    private renderProjects() {
      const listEl = document.getElementById(
        `${this.type}-projects-list`
      ) as HTMLUListElement;
      listEl.innerHTML = "";

      for (const prjItem of this.assignedProjects) {
        new ProjectItem(
          (this.element.querySelector("ul") as HTMLUListElement).id,
          prjItem
        );
      }
    }
  }
}
