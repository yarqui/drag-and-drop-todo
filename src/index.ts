class Department {
  private employees: string[] = [];

  constructor(private id: string, public name: string) {}

  describe(this: Department) {
    console.log(`Department: ${this.name} with id: ${this.id}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  getEmployeeInfo(): void {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
}

const it = new ITDepartment("id1", ["Yar"]);
it.addEmployee("Mauritius");
it.addEmployee("Valentine");
it.describe();
console.log("it:", it);

class Accounting extends Department {
  private reports: string[] = [];

  constructor(id: string) {
    super(id, "AccountingDep");
  }

  addReport = (report: string) => {
    this.reports.push(report);
  };

  printReport() {
    console.log(this.reports);
  }
}

const accounting = new Accounting("iddee");
accounting.printReport();
accounting.addReport("This is the report that we have to do");
accounting.printReport();
