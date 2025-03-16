/*  # Number of Steps to Reduce a Number to Zero
Given an integer num, return the number of steps to reduce it to zero.
In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

## Example 1:
Input: num = 14
Output: 6
Explanation: 
Step 1) 14 is even; divide by 2 and obtain 7. 
Step 2) 7 is odd; subtract 1 and obtain 6.
Step 3) 6 is even; divide by 2 and obtain 3. 
Step 4) 3 is odd; subtract 1 and obtain 2. 
Step 5) 2 is even; divide by 2 and obtain 1. 
Step 6) 1 is odd; subtract 1 and obtain 0.

## Example 2:
Input: num = 8
Output: 4
Explanation: 
Step 1) 8 is even; divide by 2 and obtain 4. 
Step 2) 4 is even; divide by 2 and obtain 2. 
Step 3) 2 is even; divide by 2 and obtain 1. 
Step 4) 1 is odd; subtract 1 and obtain 0.

## Example 3:
Input: num = 123
Output: 12

*/

// Approach 1: using recursion
const numberOfSteps = function(num) {
    if(num == 0){
        return 0
    }
    let steps = 0
    let n = num

    const reduction = (n) => {
        if(n%2 == 0){
            n = n/2
            steps += 1
            reduction(n)        
        }
        else{
            n = n - 1
            steps += 1
            if(n < 1){
                return
            }
            reduction(n)
        }
    }
    reduction(n)
    return steps
}

let input = 123
let result = numberOfSteps(input)
console.log(result)
// Time complexity: O(log(n)) since the input size is roughly reduced by size on each iteration
// Space complexity: O(1) since we only use one variable to store the number of steps


// Approach 2: using a while loop

const numberOfSteps2 = function(num) {
    let steps = 0
    while(num>0){
        if(num%2 == 0){
            num /= 2
            steps++
        }
        else{
            num--
            steps++
        }
    }
    return steps
}

console.log('Approach 2')
let result2 = numberOfSteps2(input)
console.log(result2)
// Time complexity: O(log(n)) since the input size is roughly reduced by size on each iteration
// Space complexity: O(1) since we only use one variable to store the number of steps
