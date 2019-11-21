//Template literals are a way to output variables in the string.
//use ${} inside backtip characters (``)
let name = "Jef";
console.log(`Welcome, ${name}`);

let a = 8;
let b = 34;
let msg = `The sum is ${a+b}`;
console.log(msg);

//Get the data type of a variable:
console.log(typeof a);
console.log(typeof msg);

console.log(Object.is(5,"5")); //false
console.log(Object.is(5,5));  //true
