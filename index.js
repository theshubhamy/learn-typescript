"use strict";
// String
let sname = "shubham";
let fname = sname.toUpperCase();
console.log(fname);
// Number
let age;
let dob = "12.3";
let result = parseInt(dob);
// console.log(result);
// boolean
let isvalid = false;
// console.log(isvalid);
// array
let empList;
empList = ["shubham", "2"];
let numList;
numList = [1, 2, 3, 4];
// let newNum = numList[5];
let res = numList.filter((num) => num > 2);
// console.log(res);
let sum = numList.reduce((acc, num) => acc + num);
// console.log(sum);
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Red;
let colors = 1 /* Colors.Green */;
// console.log(colors);
// tuple
// using tuple swap two numbers
let swapNum;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNum = swapNumbers(10, 20);
swapNum[1];
// swapNum[4];
// Any
let department;
department = "it";
department = 10;
