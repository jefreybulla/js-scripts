/*
Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2^x.

Examples

Input: n = 1
Output: true
Explanation: 2^0 = 1

Input: n = 16
Output: true
Explanation: 2^4 = 16           2*2*2*2

Input: n = 3
Output: false
 

Constraints:

-231 <= n <= 231 - 1
 

Follow up: Could you solve it without loops/recursion?

*/


function isPowerOfTwo(n){
    if(n <= 0){
        return false
    }
    if(n == 1){
        return true
    }
    let num = structuredClone(n)
    while(num > 1){
        if(num%2 == 0){
            num = num/2
        }
        else{
            return false
        }
    }
    return true
}
// time complexity O(log(n)) since on each iteration we divide by 2




function isPowerOfTwo2(n){
    if(n <= 0){
        return false
    }
    if(n == 1 || n == 2 ){
        return true
    }
    if(n%2 == 0){
        return isPowerOfTwo2(n/2)
    }
    else{
        return false
    }
}
// time complexity O(log(n)) since on each iteration we divide by 2

/*
stack



*/


//let input = 16      // true
//let input = -16      // false
let input = 42      // false

start = performance.now()
result = isPowerOfTwo(input)
finish = performance.now()
console.log(result)
console.log(`execution time: ${finish - start}`)


console.log('Recursion approach -->')
start = performance.now()
result = isPowerOfTwo2(input)
finish = performance.now()
console.log(result)
console.log(`execution time: ${finish - start}`)
