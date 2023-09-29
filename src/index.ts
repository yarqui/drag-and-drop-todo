const merge = <T extends object, V extends object>(objA: T, objB: V) =>
  Object.assign(objA, objB);

const mergedObject = merge(
  { nameId: "132", hobbies: ["sports", "english", "JS"] },
  { age: 30 }
);
console.log("mergedObject:", mergedObject);

interface Lengthy {
  length: number;
}
const countAndDescribe = <T extends Lengthy>(element: T): [T, string] => {
  let descriptionText = "No value here";

  if (element.length === 1) {
    descriptionText = `Got 1 element.`;
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements.`;
  }

  return [element, descriptionText];
};

console.log("countAndDescribe:", countAndDescribe("We get there soon"));
console.log("countAndDescribe:", countAndDescribe(["Gym", "Library"]));
console.log([]);
