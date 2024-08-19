/*
Implement the isBalanced() function to take a string containing only curly {}, square [], and round () parentheses. 
The function should tell us if all the parentheses in the string are balanced. This means that every opening parenthesis will have a closing one. 
For example, {[]} is balanced, but {[}] is not.
*/

function isBalanced(str){
    const n = str.length
    const pairs = {
        '{':'}',
        '[':']',
        '(':')'
    }
    //console.log(pairs['{'])
    let strCopy = structuredClone(str)
    for(let i=0; i<=n/2;i++){
        let inItem = strCopy[0]
        let outItem = strCopy[strCopy.length - 1]
        if(outItem == pairs[inItem]){
            strCopy = strCopy.slice(1,(strCopy.length-1))
        }
        else{
            return false
        }
    }
    return true
}


let input = '{[({})]}'  // true
//let input = '{[)}'  // false
let start = performance.now()
let result = isBalanced(input)
let finish = performance.now()
console.log(result)
console.log(`Execution time: ${finish - start}`)


// Approach 2 using a stack data structure 
const Stack = require('./Stack.js');

console.log('Approach 2 --->')

function isBalanced2(str){
    // for str[0] to str[n/2-1]: push mirroed items into stack
    // for str[n/2] to str[n]: check if top is the same as str[i] and pop it. Otherwise return false
    // check if empty and return true

    const n = str.length
    const stringStack = new Stack
    for(let i=0;i<(n/2);i++){
        if(str[i] == '{'){
            stringStack.push('}')
            continue
        }
        if(str[i] == '['){
            stringStack.push(']')
        }
        if(str[i] == '('){
            stringStack.push(')')
        }
    }
    //console.log(stringStack)
    for(let i=n/2;i<n;i++){
        if(str[i] == stringStack.top){
            stringStack.pop()
        }
        else{
            return false
        }
    }
    //console.log(stringStack)
    if(stringStack.isEmpty()){
        return true
    }
    else{
        return false
    }
    
}

let input2 = '{[({})]}'  // true
//let input2 = '{[)}'  // false

start = performance.now()
let result2 = isBalanced2(input2)
finish = performance.now()
console.log(result2)
console.log(`Execution time: ${finish - start}`)
// Approach 2 is slower than approach 1


/* 
Similar problem input are number instead we want to check balance
[2,1,1,2] will return true
[2,1,0,2] will return false
*/
console.log('Similar problem but with numbers')

function isBalanced3(str){
    const n = str.length
    const stringStack = new Stack
    for(let i=0;i<n/2;i++){
        stringStack.push(str[i])
    }
    //console.log(stringStack)
    for(let i=n/2;i<n;i++){
        if(str[i] == stringStack.top){
            stringStack.pop()
        }

    }
    if(stringStack.isEmpty()){
        return true
    }
    else{
        return false
    }
}

let input3 = '321123'  // true
//let input3 = '3213'  // false

start = performance.now()
let result3 = isBalanced3(input3)
finish = performance.now()
console.log(result3)
console.log(`Execution time: ${finish - start}`)
// For numbers we don't need to make additional checks 
// Given an input of same length, isBalanced3 faster than isBalanced2