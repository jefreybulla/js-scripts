//Prior to ES6, a JavaScript function was defined like this:
function add(x, y) {
  var sum = x+y;
  console.log(sum);
}
//ES6 sintax:
const newAdd = (x,y) => {
  let sum = x+y;
  console.log(sum);
}
newAdd(3,6)

//short form of a simple function thart returnes a value:
const greet = x => `Welcome, ${x}`;
console.log(greet("Jef"));

const myArray = [2,3,4];

for(i of myArray){
  console.log(i*2);
}

//Default value for parameters
const test = (a, b = 3, c = 42) => {
  return a + b + c;
}
console.log(test(5)); //50 
