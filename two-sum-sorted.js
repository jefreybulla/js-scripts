/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order. Assume input is sorted

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,3], target = 6
Output: [0,1]
*/


/*
Approach: 
1. Sort 
2. Use two pointers starting at each end
3. If sum result is greater than target move right pointer to the left
   If sum result is less than target move left pointer to the right
   If sum equals target return pointers
*/

// If the input is already sorted
const twoSumSimplified = function(nums, target) {
    n = nums.length
    pointerLeft = 0
    pointerRight = n-1
    let resultFound = false
    while(!resultFound){
        let localSum = nums[pointerLeft] + nums[pointerRight]
        if(localSum > target){
            pointerRight--
        }
        else if(localSum < target){
            pointerLeft++
        }
        else if(localSum == target){
            console.log('solution found!')
            resultFound = true
        }
    }
    return [pointerLeft, pointerRight ]
}

//nums = [2,7,11,15], target = 9
//Output: [0,1]

//nums = [3,3], target = 6
//Output: [0,1]

nums = [-5,-4,-3,-2,-1], target= -8
// Output: [0,2]

result = twoSumSimplified(nums, target)
console.log(result)