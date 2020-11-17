const a1 = Array.of(1)    // [1]
const a2 = Array.of(1,2)   //[1,2]

console.log(a2);

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