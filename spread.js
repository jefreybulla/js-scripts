//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

//use arrays as arguments

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

//using spread operator
console.log(sum(...numbers));
// expected output: 6

//instead of
console.log(sum(numbers[0], numbers[1], numbers[2]));
// expected output: 6
