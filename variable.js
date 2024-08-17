//Three ways of declaring variables:
var a = 10;         //global scope
const b = 'hello';  //block scope and immutable
let c = true;       //block scope

//compare the following two function to see the implications of using variables with bloc scope:
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}

//const create immutable variables. They must be initialized on declaration.
//b = 'hi'; //generates an exception

//No redeclaration in the same block between var, let and const
var x = 10;
//let x = 15; //throw an error

//##Best practice is to use const by defaullt and use let only when we a variables's value need to change. 
