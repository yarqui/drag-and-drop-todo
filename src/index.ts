type Combinable = string | number;

type Numeric = boolean | number;

type Universal = Numeric & Combinable;

const adder = (a: Combinable, b: Combinable) => {
  // 📍 type guard 'typeof'
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
};

// ==========================
type Employee = {
  name: string;
};

type Admin = {
  name: string;
  privileges: string[];
};

type UnknownEmployee = Employee | Admin;

const printEmployeeInfo = (employee: UnknownEmployee) => {
  console.log(employee.name);
  // 📍 type guard 'in' to check if there is the property in the object
  if ("privileges" in employee) {
    console.log(employee.privileges);
  }
};

printEmployeeInfo({
  name: "Yar",
  privileges: ["hard work access", "perseverance"],
});
//  =========================

// 📍 type guard 'instance of' using classes
class Car {
  drive() {
    console.log("Driving a car");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(weight: number) {
    console.log(`Loading cargo ${weight}`);
  }
}

type Vehicle = Car | Truck;

const car = new Car();
const truck = new Truck();

const useVehicle = (vehicle: Vehicle): void => {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(500);
  }
};

useVehicle(car);
useVehicle(truck);
