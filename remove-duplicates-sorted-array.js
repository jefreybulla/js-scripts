/* # Remove Duplicates from Sorted Array

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.

Example 1:
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Constraints:
1 <= nums.length <= 3 * 10^4
-100 <= nums[i] <= 100
nums is sorted in non-decreasing order.
*/

// Approach: overwrite data 
// Use a writePointer that start at 1 since first element is unique 
// save in a memory items seen 
// iterate over each element. Only if item is new write to writePointer and move writePointer
// return writePointer

const removeDuplicates = function(nums) {
    let memory = new Set()
    memory.add(nums[0])
    let writePointer = 1
    //[1,2]
    // i = 1, 
    //
    for(let i=1; i<nums.length; i++){
        if(!memory.has(nums[i])){
            nums[writePointer] = nums[i]
            memory.add(nums[i])
            writePointer++
        }
    }
    return writePointer   
}

//let nums = [1,1,2]              // 2, nums = [1,2,_]
//let nums = [0,0,1,1,1,2,2,3,3,4]            // 5
let nums = [1,2]                            // [1,2]
let result = removeDuplicates(nums)
console.log(result)
// time complexity: O(n)
// space complexity: O(k) where k are uniques

// Approach 2: instead of using Set to save uniques, just check previous element

function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let writePointer = 1; // start at second position

    for (let readPointer = 1; readPointer < nums.length; readPointer++) {
        if (nums[readPointer] !== nums[readPointer - 1]) {
            // Found a new unique value
            nums[writePointer] = nums[readPointer];
            writePointer++;
        }
    }

    return writePointer; // this is the length of the deduplicated array
}

// time complexity: O(n)
// space complexity: O(1)
