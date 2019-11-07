//ES6: no function keyword necessary for object declaration of instance methods.
let car = {
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
let person = {
  name: 'Jack',
  age: 18,
  sex: 'male'
};
let student = {
  name: 'Bob',
  age: 20,
  xp: '2'
};
//Use a new object {} as the target and used two objects as sources. Parameters wirh same name will be overriden by the last object.
let newStudent = Object.assign({}, person, student);

console.log(`name: ${newStudent.name}`);    //Output: Bob
console.log(`age: ${newStudent.age}`);      //Output: 20
console.log(`sex: ${newStudent.sex}`);      //Output: male
console.log(`xp: ${newStudent.xp}`);        //Output: 2

//#####Avoiding mutations########
//In the following example, assignment is used to try to generate a new object.
//However, using = creates a reference to the base object.
//Because of this reference, changes intended for a new object mutate the original object:

let member = {
  name: 'Jack',
  age: 18
};

let newMember = member; //  newPerson references person
newMember.name = 'Bob';

console.log(member.name); // Bob
console.log(member.name); // Bob

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
