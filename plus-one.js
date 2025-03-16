/*
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

Examples

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
*/

function plusOne(digits){
    n = digits.length
    let lastDigit = digits[n-1]
    if(lastDigit < 9){
        let number = digits.pop()
        number += 1
        digits.push(number)
        return digits
    }
    else{
        // for large strings parsing to integer DOES not work
        // for example '6145390195186705543' parse as 6145390195186705000
        // it's problably too large for JS to handle
        // same retuls if using parseInt()
        let number = Number(digits.join(''))
        //console.log('number ' + number)
        number += 1
        const resultInStrings = number.toString().split('')
        return resultInStrings.map(element => Number(element))
    }
}

//let input = [1,2,3]    // [1,2,4]
//let input = [9]   // [1,0]
//let input = [3,9]   // [4,0]
//let input = [9,9]   // [1,0,0]
let input = [3,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
//let input = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]

let start = performance.now()
let result = plusOne(input)
let finish = performance.now()
console.log(result)
console.log(`execution time: ${finish-start}`)
// Time complexity: O(3n) ~ O(n). However due to costly conversions this solution is not efficient. Approach 2 is an improvement. 
// Space complexity: O(n)

//Approach 2: from right to left check if digit is 9, turn it to 0 and move left. Repeat until the whole array is covered.
function plusOne2(digits){
    n = digits.length
    let number
    for(i=n-1;i>=0;i--){
        number = digits[i]
        if( number < 9){
            number +=1
            digits[i] = number
            return digits            
        }
        else{
            digits[i]=0
            if(i == 0){
                digits.unshift(1)
                return digits
            }
        }
    }
}

start = performance.now()
let result2 = plusOne2(input)
finish = performance.now()
console.log(result2)
console.log(`execution time: ${finish-start}`)
// Time complexity: O(n). This appoach is ~2X faster than approach 1 for some tested cases
// Space complexity: O(1)

// Approach 3 use for loop to form the decimal number. Increase multiplier by 10
// this approach should perform worse than approach 2 since we need to perform more calculations and transformations