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
