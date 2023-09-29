const merge = <T extends object, V extends object>(objA: T, objB: V) =>
  Object.assign(objA, objB);

const mergedObject = merge(
  { nameId: "132", hobbies: ["sports", "english", "JS"] },
  { age: 30 }
);
console.log("mergedObject:", mergedObject);
