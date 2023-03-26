"use strict";
// functions
// named function
// with optional parameter
function add(a, b, c) {
    return c ? a + b + c : a + b;
}
// console.log(add(2, 3));
// console.log(add(2, 3, 4));
// arrow function with required parameter
const sub = (a, b, c = 0) => a - b - c;
console.log(sub(5, 1));
console.log(sub(5, 1, 2));
// other way
const mult = function (a, b) {
    return a * b;
};
// console.log(mult(2, 3));
// function with rest parameters
function sums(a, b, ...c) {
    return a + b + c.reduce((a, b) => a + b, 0);
}
console.log(sums(2, 3, ...[1, 2, 3]));
console.log(sums(2, 3, 4, 5, 6, 7, 8, 9));
// genric function
function getItems(item) {
    return new Array().concat(item);
}
console.log(getItems([1, 2, 3, 4, 5, 5]));
console.log(getItems(["1", "2", "3", "4", "5", "a", "b", "c"]));
