/*
Create a multiply and divice function without using * or /

*/

function multiply(param1, param2){
    let result = 0
    for(let i=1; i<=param2; i++){
        result = result + param1
    }
    return result
}

function divide(param1, param2){
    let resultSub = param1
    counter = 0
    while((resultSub - param2) >= 0){
        resultSub = resultSub - param2
        counter += 1
    }
    return counter
}

let inputA = 10
let inputB = 3
let result = multiply(inputA, inputB)
console.log(result)
result = divide(inputA, inputB)
console.log(result)

/*
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
Don'T use exponent operator **

Examples:
Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

*/

console.log('sqaure root ->')
function mySqrt(x){

    number = 0
    let exponentResult = 0
    while(exponentResult < x){
        number += 1
        exponentResult = number * number
        if(exponentResult>x){
            number -= 1
            break
        }
    }

    return number
}


//inputA = 4  // 2
//inputA = 16  // 4
//inputA = 8  //2
inputA = 0
result = mySqrt(inputA)
console.log(result)

// Create a factorial function n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.
console.log('factorial ->')

let value = 1
function factorial(x){
    if(x<= 1){
        return value
    }
    value = value * x * (x-1)
    return factorial(x-2)
}

//let input = 3   //6
let input = 4     //24
result = factorial(input)
console.log(result)

// factorial non-recursive approach
console.log('factorial non-recursive approach')
function factorial2(x){
    let value = x
    for(let i=1; i<x; i++){
        value = value * (x-i)
    }
    return value
}

//input = 3   //6
input = 4     //24
result = factorial2(input)
console.log(result)


/*
Implement pow(x, n), which calculates x raised to the power n 
Examples

Input: x = 2.00000, n = 10
Output: 1024.00000

Input: x = 2.10000, n = 3
Output: 9.26100

Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
*/

console.log('pow ->')
function pow(x, n){
    if(n>=0){
        let value = 1
        for(let i=1; i<=n; i++){
            value = value * x
        }
        return value
    }
    else{
        let value = 1
        for(let i=1; i<=Math.abs(n); i++){
            value = value / x
        }
        return value
    }
}

//input = 2.00000
//n = 10

//input = 2.10000
//n = 3

input = 2.00000
n = -2            //output: 0.25

//input = 0
//n = 10      

//input = 0
//n = 0

result = pow(input, n)
console.log(result)