/* # Find the Middle Index in Array
Given a 0-indexed integer array nums, find the leftmost middleIndex (i.e., the smallest amongst all the possible ones).

A middleIndex is an index where nums[0] + nums[1] + ... + nums[middleIndex-1] == nums[middleIndex+1] + nums[middleIndex+2] + ... + nums[nums.length-1].

If middleIndex == 0, the left side sum is considered to be 0. Similarly, if middleIndex == nums.length - 1, the right side sum is considered to be 0.

Return the leftmost middleIndex that satisfies the condition, or -1 if there is no such index.

 

Example 1:

Input: nums = [2,3,-1,8,4]
Output: 3
Explanation: The sum of the numbers before index 3 is: 2 + 3 + -1 = 4
The sum of the numbers after index 3 is: 4 = 4
Example 2:

Input: nums = [1,-1,4]
Output: 2
Explanation: The sum of the numbers before index 2 is: 1 + -1 = 0
The sum of the numbers after index 2 is: 0
Example 3:

Input: nums = [2,5]
Output: -1
Explanation: There is no valid middleIndex.


*/


// Aproach 1: go over each element and calculate leftSum and rightSum until I find the answer

const findMiddleIndex = function(nums) {
    let leftSum = 0
    let rightSum = 0
    for(let i=0;i<nums.length; i++){
        for(let j=0; j<i; j++){
            leftSum += nums[j]
        }
        for(let j=i+1; j<nums.length; j++){
            rightSum += nums[j]
        }

        //console.log(`index ${i} has leftSum = ${leftSum} and rightSum = ${rightSum}`)

        if(leftSum == rightSum ){
            return i
        }
        leftSum = 0
        rightSum = 0
    }
    return -1
}


//let input = [2,3,-1,8,4]  // 3
//let input = [1,-1,4]        // 2
//let input = [2,5]           // -1
let input = [6,1,5,9,4,2,2,-1,8,4,2,3,-1,8,4,2,3,-1,8,4,2,3,-1,8,4,2,3,-1,8,4,2,3,-1,8,4,2,3,-1,8,4,100,1000]  // 3
let start = performance.now()
let result = findMiddleIndex(input)
let finish = performance.now()
console.log(result)
console.log(`execution time: ${finish-start}`)
// time complexity:  O(n^2)
// space complexity: O(1). Note: for larger sums we may need to stora large numbers.


// Approach 2: Calculate totalSum using a loop. Use a second loop (not nested) to calculate leftSum and rightSum based on totalSum and current index 
const findMiddleIndex2 = function(nums) {
    let totalSum = 0
    for(let i=0;i<nums.length; i++){
        totalSum += nums[i]
    }

    let leftSum = 0
    let rightSum = totalSum

    for(let j=0;j<nums.length; j++){
        if(j==0 ){
            rightSum = totalSum - nums[j]
        }
        else{
            if(j== nums.length -1){
                leftSum = totalSum - nums[j]
                rightSum = 0
            }
            else{
                leftSum = leftSum + nums[j-1]
                rightSum = rightSum - nums[j]
            }
        }
        //console.log(`index ${j} has leftSum = ${leftSum} and rightSum = ${rightSum}`)

        if(leftSum == rightSum ){
            return j
        }
    }

    return -1
}

console.log('Approach 2 ->>')
start = performance.now()
let result12 = findMiddleIndex2(input)
finish = performance.now()
console.log(result12)
console.log(`execution time: ${finish-start}`)
// time complexity: O(2n) ~ O(n)  this solution is more efficent than approach 1
// space complexity: O(1)