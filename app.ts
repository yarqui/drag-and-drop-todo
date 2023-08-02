type Combinable = string | number;
type ConversionDescriptor = "as-number" | "as-string";

const combine = (
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) => {
  let result;

  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if (resultConversion === "as-number") {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
};

const combinedAges = combine(36, 37, "as-number");
console.log("combinedAges:", combinedAges);

const combinedStringAges = combine("36", "37", "as-number");
console.log("combinedStringAges:", combinedStringAges);

const combinedNames = combine("Yar", "Ira", "as-string");
console.log("combinedNames:", combinedNames);
