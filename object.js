//Definition of an object
var person = {
  name: "Cam",
  age: 29,
  favMovie: "Batman",
}

//Two ways to access the properties of the object
console.log(person.age);
console.log(person["name"]);

//Object constructor function
console.log("-object constructor function-")

function pet(name,age){
  this.name = name;
  this.age = age;
}
//create a new object using 'new'
var a = new pet("Rolfo",3);
var b = new pet("Jil",2);
console.log(a.name)

//Instance method
console.log("-Instance method-");

function car(brand,color){
  this.brand = brand;
  this.color = color;

  this.changeColor = function(color){
    this.color = color;
  }
}

c1 = new car("tesla","red");
console.log(c1.color);
c1.changeColor("blue");
console.log(c1.color);
