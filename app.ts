// functions

// named function
// with optional parameter
function add(a: number, b: number, c?: number) {
  return c ? a + b + c : a + b;
}

// console.log(add(2, 3));
// console.log(add(2, 3, 4));

// arrow function with required parameter

const sub = (a: number, b: number, c = 0): number => a - b - c;

console.log(sub(5, 1));
console.log(sub(5, 1, 2));

// other way

const mult = function (a: number, b: number): number {
  return a * b;
};

// console.log(mult(2, 3));

// function with rest parameters

function sums(a: number, b: number, ...c: number[]): number {
  return a + b + c.reduce((a, b) => a + b, 0);
}
console.log(sums(2, 3, ...[1, 2, 3]));
console.log(sums(2, 3, 4, 5, 6, 7, 8, 9));
// genric function

function getItems<Type>(item: Type[]): Type[] {
  return new Array<Type>().concat(item);
}

console.log(getItems<number>([1, 2, 3, 4, 5, 5]));
console.log(getItems<string>(["1", "2", "3", "4", "5", "a", "b", "c"]));
