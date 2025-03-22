/* # Find All Numbers Disappeared in an Array
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

Example 1:
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

Example 2:
Input: nums = [1,1]
Output: [2]

Constraints:
n == nums.length
1 <= n <= 10^5
1 <= nums[i] <= n

Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

*/


// Approach 1: use a Set to store numbers from 1 to length
// remove items from Set as I see them
// retun items left in Set
const findDisappearedNumbers = function(nums) {
    const length = nums.length
    const uniques = new Set
    for(let i=1; i<= length; i++){
        uniques.add(i)
    }
    for(let i=0; i< length; i++){
        if(uniques.has(nums[i])){
            uniques.delete(nums[i])
        }
    }
    let resultArray = []
    for(let key of uniques){
        resultArray.push(key)
    }
    return resultArray
}

let nums = [4,3,2,7,8,2,3,1]            //  [5,6]
let result = findDisappearedNumbers(nums)
console.log(result)
// time complexity: O(n)
// space complexity: O(n)


// Approach 2: avoid using extra memory by turning numbers negative to indicate an index has been visited

const findDisappearedNumbersOptimized = function(nums) {
    let length = nums.length
    for (let i = 0; i < length; i++) {
        let index = Math.abs(nums[i]) - 1 // Get correct index
        if (nums[index] > 0) {
            nums[index] = -nums[index] // Mark as visited
        }
    }

    // Step 2: Collect missing numbers (indices that remain positive)
    let result = [];
    for (let i = 0; i < length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1)
        }
    }

    return result;
}


console.log('Approach 2 -->')
let result2 = findDisappearedNumbers(nums)
console.log(result2)
// time complexity O(n)  for large inputs Appproach 1 is slightly faster because modifying the array in-place involves more memory accesses.
// space complexity: O(1)
