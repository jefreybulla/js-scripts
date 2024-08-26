/*
Given an integer x, return true if x is a palindrome(), and false otherwise.
Palindrome: an integer is a palindrome when it reads the same forward and backward.

Examples:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/

function palindrome(param){
    if(param < 0){
        return false
    }
    let reversed = ''
    let arrayParam = param.toString().split('')
    //console.log(arrayParam)
    n = arrayParam.length
    for(let i=n-1; i>=0;i--){
        reversed += arrayParam[i]
    }
    //console.log(reversed)
    if(reversed == param){
        return true
    }
    return false
}

//let input = 121
//let input = -121
//let input = 10
let input = 123321
let start = performance.now()
result = palindrome(input)
let finish = performance.now()
console.log(result)
console.log(`execution time: ${finish-start}`)



function palindrome2(param){
    if(param < 0){
        return false
    }
    let reversed = param.toString().split('').reverse().join('')
    if(reversed == param){
        return true
    }
    return false
}

//input = 121
//input = -121
//input = 10
input = 123321
start = performance.now()
result = palindrome2(input)
finish = performance.now()
console.log(result)
console.log(`execution time: ${finish-start}`)