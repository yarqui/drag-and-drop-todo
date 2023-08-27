class Department {
  // private name: string;
  private employees: string[] = [];

  constructor(private id: string, public name: string) {}

  describe(this: Department) {
    console.log(`Department: ${this.name} with id: ${this.id}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  getEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const sales = new Department("id1", "Sales");
sales.describe();

const salesCopy = { id: "ds2", name: "Yar", describe: sales.describe };
