function mf(){
  console.log("you called me!");
}

mf();

//Functions with parmeters
//msg is the parameter. The value of the parameter is the argument. In this case "hola" is the argument.
function print(msg){
  console.log(msg);
}
print("hola");

///function with multiple parameters
function sum(a,b){
  console.log(a+b);
}
sum(2,6);


//using a default argument
console.log("-using a default oargument-")
function sum(a,b=3){
  return a+b;
}
console.log(sum(2))


function add(x, y=4) {
  var sum = x+y;
  console.log(sum);
}
//ES6 alternative sintax: Arrow function
const newAdd = (x,y=4) => {
  let sum = x+y;
  console.log(sum);
}
newAdd(3,6);   //9
newAdd(3);   //7

//arrow function with one argument
let reflect1 = value => value;
//equivalent to
let reflect2 = value => {
  return value;
}
//equivalent to
let reflect3 = function(value){
  return value;
}
console.log(`reflect1: ${reflect1("juju")}`);
console.log(`reflect2: ${reflect2("juju")}`);
console.log(`reflect3: ${reflect3("juju")}`);

//arrow function with no parameters
let printName = () => "Name: Jef";
console.log(printName());

//short form of a simple function that returnes a simple value:
const greet = x => `Welcome, ${x}`;
console.log(greet("Jef"));

//Default value for parameters
const test = (a, b = 3, c = 42) => {
  return a + b + c;
}
console.log(test(5)); //50
