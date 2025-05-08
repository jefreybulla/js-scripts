/* # Move Zeros
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]
 

Constraints:
1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 

Follow up: Could you minimize the total number of operations done?
*/

// Approach: use two pointers: writePointer and readPointer
// writePointer stays where the left-most zero is
// readPointer moves until it finds a non-zero value. At that moment we swap values

const moveZeros = function(nums) {
    let length = nums.length
    if(length==0){
        return nums
    }
    let readPointer = 0
    let writePointer = 0

    while(readPointer < length - 1){
        let current = nums[readPointer]
        let next = nums[readPointer+1]
        if(current == 0){
            if(next != 0){
                nums[writePointer] = next
                nums[readPointer+1] = current
                writePointer++
            }
        }
        else {
            writePointer++
        }
        readPointer++
    }
    return nums
}

//let nums = [0,1,0,3,12]             // [1,3,12,0,0]
let nums = [0,0,0,0,1]              // [1,0,0,0,0]
let result = moveZeros(nums)
console.log(result)
// time complexity: O(n)
// space complexity: O(1)
