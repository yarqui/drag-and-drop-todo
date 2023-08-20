const add = (n1: number, n2: number): number => {
  return n1 + n2;
};

const printResult = (num: number): void => {
  console.log("Result is: ", num);
};

printResult(add(3, 5));

let combineValues: (a: number, b: number) => number;
combineValues = add;

const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2;
  cb(result);
};

addAndHandle(4, 5, (result) => {
  console.log("addAndHandle res: ", result);
});
