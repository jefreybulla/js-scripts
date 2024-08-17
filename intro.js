console.log("Hello, world");

//single-line comment
/*
multi-line comment
*/

var x = 5;
console.log(x);

//A variable declared without a value will have the value undefined.
var y;
console.log(y);
y = 3;
console.log(y);

//changing the data type
let a = 2;
console.log(a);
a = "two";
console.log(a);

//JavaScript numbers are always stored as double precision floating point numbers.
num = 3.5;
console.log(num);

//creating a new line
console.log("line one \n line two");

//evaluating a string expression
console.log(eval("8+10"));

//concatenation
console.log("one"+"two");

//returns NaN (not a number)
console.log("one"*10);

// evaluate if equal: ===
console.log('difference between ==  and ===')
let b = 3
let c = "3"
console.log(b == c)
// evaluate if identical (value and type are the same) with ===
console.log(b === c)

//Template literals are a way to output variables in the string.
//use ${} inside backtip characters (``)
let myName = "Jef";
console.log(`Welcome, ${myName}`);

a = 8;
b = 34;
let msg = `The sum is ${a+b}`;
console.log(msg);

//Get the data type of a variable:
console.log(typeof a);
console.log(typeof msg);

console.log(Object.is(5,"5")); //false
console.log(Object.is(5,5));  //true
