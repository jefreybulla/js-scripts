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

//const create immutable variables. Next line generates an exception
//b = 'hi';
