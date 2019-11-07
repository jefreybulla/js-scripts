//for in loop to iterate over the keys of an object. Don't use with arrays!
let obj = {
  p1: 1,
  p2: 2,
  p3: 3
}

console.log(obj.p2)

for (let i in obj){
  console.log(i);
}
//ouput: p1 p2 p3

//for of loop lets you iterate over the elements of an array or string
let list = ["e1","e2","e3"]

for (let i of list){
  console.log(i);
}
//output e1 e2 e3

let myString = "Home";
for (i of myString){
  console.log(i);
}
//Output: H o m e
