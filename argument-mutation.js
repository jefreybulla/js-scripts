/*
When using primmitive types as arguments (string, number, boolean. etc), the original value is not mutated when passed to a function.
*/

function simpleStringChange(myParam){
    myParam = myParam + 'c'
    return myParam
}

myArgument = 'ab'
console.log(myArgument)     // ab
result = simpleStringChange(myArgument)
console.log(`result: ${result}`)    // a
console.log(myArgument)     // ab

/* 
When passing arguments of non-primitive type (objects, arrays) to a function we have be careful 
not to mutate the argument within the function.
*/

function firstElementSorted (myParameter){
    myParameter.sort()
    return myParameter[0]
}

myArgument = ['b', 'a']
console.log(myArgument)     // [b,a]
result = firstElementSorted(myArgument)
console.log(`result: ${result}`)    // a
console.log(myArgument)     // [a,b]  We may not want this!!


// To avoid undesired mutations we can use structureClone or Object.assign to clone the object

function firstElementSorted2 (myParameter2){
    // In some cases Object.assign([], m) will mutate the source in the context of the function
    // So a safer alternative is using deep cloning with structuredClone()
    // see flipping-matrix.js for an example of that situation
    let paramCopy = structuredClone(myParameter2)
    //paramCopy = Object.assign([], myParameter2)
    paramCopy.sort()
    return paramCopy[0]
}

console.log('avoiding unwated mutations ->')
let myArgument2 = ['b', 'a']
console.log(myArgument2)     // b,a
result = firstElementSorted2(myArgument2)
console.log(`result: ${result}`)    // a
console.log(myArgument2)     // b, a  
