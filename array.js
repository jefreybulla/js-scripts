var a = new Array("one","two","three");
console.log(a);
console.log(a[2]);

//othe way to create array
var b = new Array(2);
b[0] = "1";
b[1] = "2";
console.log(b);

//cretae array of any size
var c = new Array();
c[0] = "hi"
c[1] = "Hello"
console.log(c)

// initialize values 
console.log('initializing array with default values')
let arr = Array(3).fill(0);
console.log(arr)

//create array with literal sintax
var d = [99,90,80];
console.log(d)

//concatanate two arrays
var c1 = ["HTML", "CSS"];
var c2 = ["JS", "C++"];
var courses = c1.concat(c2);

const a1 = Array.of(1)    // [1]
const a2 = Array.of(1,2)   //[1,2]

console.log(a2);

// add a new element at end of array
arr = [1,2,3]
arr.push(4)   //[1,2,3,4]
// remove last element of array
arr.pop()     //[1,2,3]
// remove first element 
arr.shift()   // [2,3]
// add element at the beginning
arr.unshift(1)  // [1,2,3]
// select a portion of array slice(start, end(non-inclusive))
arr.slice(1,3)  //[2,3]

/* Splice sintax to modified array
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, additem1)
splice(start, deleteCount, additem1, additem2)
*/

// remove specific element from array
const array = [2, 5, 9];
console.log(array);
const index = array.indexOf(5);
if (index > -1) { // only splice array when item is found
  array.splice(index, 1); // 2nd parameter means remove one item only
}
// array = [2, 9]
console.log(array);

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]


// Iterate over array elements
a2.forEach( e => console.log(e))

// Find an elements and its index based on conditions.
const numbers = [25,30,35,40,45]
console.log(numbers.find(n => n > 33))     //35
console.log(numbers.indexOf(45))  //4
console.log(numbers.indexOf(100))  // -1 because 100 is not found
console.log(numbers.findIndex(n=> n> 33))  //2

const chars = ["h","o","l","a"]
console.log(chars.findIndex(n => n == "a"))

// map returns a new array after computing each element with the callback function
const numbers2 = numbers.map( e => e*10 ) //[ 250, 300, 350, 400, 450 ]
console.log(numbers2)   

// filter returns a new array with elements for which the callback function is true
const a3 = [1, 'a', 2, 'b', 1]
const a4 = a3.filter( e => typeof e === 'number')  // [ 1, 2 ]
console.log(a4)
const a5 = a3.filter( e => e === 1 )
console.log(a5)

// reduce returns a single value 
const aggregate = numbers.reduce( (accumulator, currentValue) => accumulator + currentValue ) // 175
console.log(aggregate)


console.log('iterating with for(i of)')
const myArray = [2,3,4];

for(i of myArray){
  console.log(i*2);
}


// map vs forEach
const officers = [
  { id: 20, name: 'Captain Piett' },
  { id: 24, name: 'General Veers' },
  { id: 56, name: 'Admiral Ozzel' },
  { id: 88, name: 'Commander Jerjerrod' }
];

console.log(officers);
console.log(officers[0])
console.log(officers[0].name)

// Goal: get the ids only [20, 24, 56, 88]

//option 1: each
const officersIds = [];
officers.forEach(function (officer) {
  officersIds.push(officer.id);
});
console.log(officersIds);

//option 2: .map does not require to create an empy array
const officersIds2 = officers.map(officer => officer.id);
console.log(officersIds2);

console.log('using .map with index')
officers.map((item, index) =>{
  console.log(item)
  console.log(index)
})

a = [1,2,3];
b = a.map(number => number*3);
console.log(b);
