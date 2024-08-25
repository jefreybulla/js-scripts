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
    if(lastDigit <= 9){
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
        return number.toString().split('')
    }


}

//let input = [1,2,3]    // [1,2,4]
//let input = [9]   // [1,0]
//let input = [3,9]   // [4,0]
//let input = [9,9]   // [1,0,0]
//let input = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]


//console.log(plusOne(input))



//Approach 2: check if digit is 9, turn to 0 and move left


function plusOne2(digits){
    n = digits.length
    //let carry
    let number
    for(i=n-1;n>=0;i--){
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

//let input2 = [1,2,3]
//let input2 = [9]   // [1,0]
//let input2 = [3,9]   // [4,0]
//let input2 = [9,9]   // [1,0,0]
let input2 = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]


console.log(plusOne2(input2))


// Approach 3 use for loop to form the decimal number. Increase multiplier by 10
// this approach should perform worse than approach 2 since we need to perform more calculations and transformations