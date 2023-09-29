const merge = <T extends {}, V>(objA: T, objB: V) => Object.assign(objA, objB);

const mergedObject = merge(
  { nameId: "132", hobbies: ["sports", "english", "JS"] },
  { age: 32 }
);
console.log("mergedObject:", mergedObject.hobbies);
