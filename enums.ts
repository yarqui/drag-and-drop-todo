enum Role {
  ADMIN = 3,
  MANAGER = 10,
  SLACKER,
}

const person = {
  name: "Yar",
  age: 36,
  hobbies: ["sports", 1, false],
  role: Role.MANAGER,
};

console.log(person.role);

if (person.role === Role.MANAGER) {
  console.log("is manager");
}
