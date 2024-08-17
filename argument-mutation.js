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


// To avoid undesired mutations we can use Object.assign to clone the object

function firstElementSorted2 (myParameter2){
    paramCopy = Object.assign([], myParameter2)
    paramCopy.sort()
    return paramCopy[0]
}

console.log('avoiding unwated mutations ->')
myArgument2 = ['b', 'a']
console.log(myArgument2)     // b,a
result = firstElementSorted2(myArgument2)
console.log(`result: ${result}`)    // a
console.log(myArgument2)     // b, a  
