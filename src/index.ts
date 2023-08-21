import concatenation from "./concatenation";

const button = document.querySelector("button");
const input = document.querySelector("input");

if (button && input) {
  button.addEventListener("click", () => {
    concatenation(input.value, "Hi!");
  });
}

let matrix: number[][][];

matrix = [
  [
    [1, 6],
    [3, 5],
  ],
  [
    [8, 1],
    [9, 2],
  ],
  [],
];

console.log(matrix[1][0][0]);

let users: { name: string; age: number }[][];

users = [
  [
    { name: "Yar", age: 37 },
    { name: "Ira", age: 36 },
  ],
];
