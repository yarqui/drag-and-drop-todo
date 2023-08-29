abstract class Department {
  protected employees: string[] = [];
  static currentYear: string = "2023";

  constructor(protected id: string, public name: string) {}

  static createEmployee(name: string) {
    console.log("year in constructor", this.currentYear);
    return { name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  getEmployeeInfo(): void {
    console.log("employees count: ", this.employees.length);
    console.log("employees: ", this.employees);
  }
}

// ===============
// IT dep
// ===============
class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }

  describe(): void {
    console.log(`This IT Department - ID: ${this.id}`);
  }
}
const it = new ITDepartment("id1", ["Yar"]);
// it.describe();
// it.addEmployee("Mauritius");
// it.getEmployeeInfo();

// ===============
// Accounting dep
// ===============
class Accounting extends Department {
  private lastReport: string = "";
  private reports: string[] = [];
  private static instance: Accounting;

  private constructor(id: string) {
    super(id, "AccountingDep");
  }

  public get mostRecentReport(): string {
    if (!this.lastReport) {
      throw new Error("There are no reports");
    }
    return this.lastReport;
  }
  public set mostRecentReport(v: string) {
    if (!v) {
      throw new Error("Please, pass a value to set a report");
    }
    this.addReport(v);
  }

  static createInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new Accounting("id2");
    return this.instance;
  }

  describe(): void {
    console.log("This Accounting Department - ID: " + this.id);
  }

  addEmployee(employee: string): void {
    if (employee === "rus") {
      return;
    }
    this.employees.push(employee);
  }

  getEmployeeInfo(): void {
    console.log("accounting employees", this.employees);
  }

  addReport = (report: string) => {
    this.reports.push(report);
    this.lastReport = report;
  };

  printReports() {
    console.log("accounting reports: ", this.reports);
  }
}

const accounting = Accounting.createInstance();
const accounting2 = Accounting.createInstance();
console.log(accounting === accounting2);
// const accounting = new Accounting("id2acc");
// accounting.addEmployee("rus");
// accounting.addEmployee("Freddy");
// accounting.addReport("This is the report that we have to do");
// accounting.addReport("AAAnd another one to check");
// accounting.printReports();

accounting.mostRecentReport = "A new financial report";
accounting.describe();

// const employee1 = Department.createEmployee("Yarquiiii");
// console.log("employee1:", employee1);
