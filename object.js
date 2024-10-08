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


//ES6: no function keyword necessary for object declaration of instance methods.
car = {
  color: "red",
  brand: "bmw",

  startEngine(){
    console.log("RRRRR");
  },

  changeColor(newColor){
    this.color = newColor
  }
}

console.log(car.color);
car.startEngine();
car.changeColor("blue");
console.log(car.color);

//Computed property names and values
console.log("--Computed property names and values--")
let prop = 'name';
let id = '1234';
let mobile = '08923';

let user = {
  [prop]: 'Jack',
  [`user_${id}`]: `${mobile}`
};
console.log(user.name);           //Output: Jack
console.log(user.user_1234);      //Output: 08923

//Object assign to combine objects
console.log("-Object assign-")
person = {
  name: 'Jack',
  age: 18,
  sex: 'male'
};
let student = {
  name: 'Bob',
  age: 20,
  xp: '2'
};
//Use a new object {} as the target and use two objects as sources. Parameters wirh same name will be overriden by the last object.
let newStudent = Object.assign({}, person, student);

console.log(`name: ${newStudent.name}`);    //Output: Bob
console.log(`age: ${newStudent.age}`);      //Output: 20
console.log(`sex: ${newStudent.sex}`);      //Output: male
console.log(`xp: ${newStudent.xp}`);        //Output: 2

//#####Avoiding mutations########
//In the following example, assignment is used to try to generate a new object.
//However, using = creates a reference to the base object.
//Because of this reference, changes intended for a new object mutate the original object:
console.log("-mutation issues-")

let member = {
  name: 'Jack',
  age: 18
};

let newMember = member; //  newMember references member
newMember.name = 'Bob';

console.log(newMember.name); // Bob
console.log(member.name); // It changed the name of member to Bob!

//To avoid this (mutations), use Object.assign()

let client = {
  name: 'Jack',
  age: 18
};

let newClient = Object.assign({}, client);
newClient.name = 'Bob';

console.log(client.name); // Jack
console.log(newClient.name); // Bob


//Assign a value to an object property in the Object.assign() statement.
let stakeholder = {
  name: 'Jack',
  age: 18
};

let newStakeholder = Object.assign({}, person, {name: 'Bob'});
console.log(newStakeholder.name);

//using const to create an object
console.log("-using const to create an object-")
pet = {
  name: "Tony",
  type: "dog"
}
console.log(pet.type);
pet.type = "cat";       //It's possible to change properties of a const object.
console.log(pet.type);

/* It is not possible to modify the binding. The following will prodice an error.
pet ={
  color: "brown"
}
*/

//iterating over elements of an object with 'for in'
console.log('loop an object')
for(let key in pet){
  console.log(key)
  console.log(pet[key])
}


const myObject = {
  a: 1,
  b: 'Two',
  c: [3,3,3]
}

console.log('get values in an array')
let values = Object.values(myObject)
console.log(values)
console.log('get keys in an array')
let keys = Object.keys(myObject)
console.log(keys)

console.log('convert object to array')
// Convert object to array. Each value in the returned array is a sub-array containing the name (index 0) and value (index 1)

const entries = Object.entries(myObject);
console.log(entries)