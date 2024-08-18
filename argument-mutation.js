/* 
When using some methods such as .sort inside a function we have be careful 
not to mutate the argument used as input
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
    // In some cases Object.assign([], m) will mutate the solurce in the context of the function
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
