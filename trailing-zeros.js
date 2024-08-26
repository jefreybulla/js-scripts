
/*
Given an integer n, return the number of trailing zeroes in n!.

Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.

Examples

Input: n = 3
Output: 0
Explanation: 3! = 6, no trailing zero.

Input: n = 5
Output: 1
Explanation: 5! = 120, one trailing zero.

Input: n = 0
Output: 0
*/


// In JS for numbers larger than Number.MAX_SAFE_INTEGER (9007199254740991)
// we should use BigInt


function trailingZeroes(n) {
    if(n == 0){
        return 0
    }

    let numberOftrailingZeros = 0
    let result = BigInt(1)
    let nBig = BigInt(n)
    // calculate factorial
    const recursive = function(x){
        if(x<= 1){
            return result
        }
        result *= x * (x-BigInt(1))
        while(result%BigInt(10) == 0){
            numberOftrailingZeros += 1
            result = result/BigInt(10)
        }
        return recursive(x-BigInt(2))
    }
    recursive(nBig)
    console.log(result)
  
    return numberOftrailingZeros
}

//let input = 5 // 1
//let input = 3
//let input = 0
let input = 30  // 7 
//let input = 7371    // 1839
//let input = 8146
result = trailingZeroes(input)
console.log(result)
