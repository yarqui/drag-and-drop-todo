const add = (n1: number, n2: number, showResult: boolean) => {
  console.log("typeof n1:", typeof n1);
  console.log("typeof n2:", typeof n2);
  console.log("typeof showResult:", typeof showResult);
  return n1 + n2;
};

let printRes = true;
let num1 = 5;
num1 = "stringyyy";

const result = add(num1, 10.2, printRes);

console.log("result:", result);
console.log("printRes:", printRes);
