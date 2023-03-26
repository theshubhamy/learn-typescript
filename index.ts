// String
let sname = "shubham";
let fname = sname.toUpperCase();
console.log(fname);

// Number
let age: number;
let dob = "12.3";

let result = parseInt(dob);
// console.log(result);

// boolean

let isvalid: boolean = false;
// console.log(isvalid);

// array

let empList: string[];

empList = ["shubham", "2"];

let numList: Array<number>;
numList = [1, 2, 3, 4];

// let newNum = numList[5];

let res = numList.filter((num) => num > 2);
// console.log(res);

let sum = numList.reduce((acc, num) => acc + num);
// console.log(sum);

// enum
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Red;
// console.log(c);
const enum Colors {
  Red,
  Green,
  Blue,
}

let colors: Colors = Colors.Green;
// console.log(colors);

// tuple
// using tuple swap two numbers
let swapNum: [number, number];
function swapNumbers(num1: number, num2: number): [number, number] {
  return [num2, num1];
}
swapNum = swapNumbers(10, 20);
swapNum[1];
// swapNum[4];

// Any
let department: any;
department = "it";
department = 10;
