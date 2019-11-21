const a1 = Array.of(1);     // [1]
const a2 = Array.of(1,2);   //[1,2]

console.log(a2);

//Find an elements and its index based on conditions.
const numbers = [25,30,35,40,45];
console.log(numbers.find(n => n > 33));     //35
console.log(numbers.findIndex(n=> n> 33));  //2

const chars = ["h","o","l","a"];
console.log(chars.findIndex(n => n == "a"));
