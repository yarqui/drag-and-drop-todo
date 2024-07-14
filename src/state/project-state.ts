import { Project, ProjectStatus } from "../models/project.js";

type Listener<T> = (items: T[]) => void;

class State<T> {
  protected listeners: Listener<T>[] = [];

  addListener(listenerFn: Listener<T>) {
    this.listeners.push(listenerFn);
  }
}
export class ProjectState extends State<Project> {
  private projectsList: Project[] = [];
  private static instance: ProjectState;

  private constructor() {
    super();
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  moveProject(prjId: string, newStatus: ProjectStatus) {
    const proj = this.projectsList.find((proj) => proj.id === prjId);

    if (proj && proj.status !== newStatus) {
      proj.status = newStatus;
      this.updateListeners();
    }
  }

  addProject(title: string, description: string, numOfPeople: number) {
    const newProj = new Project(
      (Math.random() + Date.now()).toString(), // for demo
      title,
      description,
      numOfPeople,
      ProjectStatus.Active
    );

    this.projectsList.push(newProj);
    this.updateListeners();
  }

  updateListeners() {
    for (const listenerFn of this.listeners) {
      listenerFn(this.projectsList.slice());
    }
  }
}

export const projectState = ProjectState.getInstance();
