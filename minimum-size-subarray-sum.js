/* # Minimum Size Subarray Sum
Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

Example 1:
Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

Example 2:
Input: target = 4, nums = [1,4,4]
Output: 1

Example 3:
Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
 
Constraints:
1 <= target <= 10^9
1 <= nums.length <= 10^5
1 <= nums[i] <= 10^4
 
Follow up: If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log(n)).
*/



//

// [2,3,1,2,4,3]
// [1,2,2,3,3,4]



function minSubArrayLen(target, nums) {
    let minLength = Infinity;   // Stores the minimum length found
    let start = 0;              // Left boundary of the window
    let sum = 0;                // Current window sum

    for (let end = 0; end < nums.length; end++) {
        sum += nums[end];  // Expand the window to the right

        // Try to shrink the window from the left as long as the sum is valid
        while (sum >= target) {
            minLength = Math.min(minLength, end - start + 1);  // Update min length
            sum -= nums[start];  // Shrink the window from the left
            start++;
        }
    }

    // If no valid subarray was found, return 0
    return minLength === Infinity ? 0 : minLength;
}

//let target = 7, nums = [2,3,1,2,4,3]            // 2
//let target = 4, nums = [1,4,4]                  // 1
//let target = 11, nums = [1,1,1,1,1,1,1,1]           // 0
let target = 15, nums = [1,2,3,4,5]                 // 5
//let target=213, nums= [12,28,83,4,25,26,25,2,25,25,25,12]        // 8
let start = performance.now()
let result = minSubArrayLen(target, nums)
let finish = performance.now()
console.log(result)
console.log(`Execution time: ${finish-start}`)
// time complexity: O(2n) ~ O(n) 
// space comlexity: O(1)



// If the problem speficies that element don't have to be contiguos:
// Approach 2: sort and use iterate from the back

const minSubArrayLen2 = function(target, nums) {
    let len = nums.length
    nums.sort((a,b)=> a-b)
    console.log(nums)
    let sum = 0
    let numberOfElements = 0
    // target = 15, nums = [1,2,3,4,5]                 // 5
    // i =
    for(let i=len-1; i>=0; i--){
        if(sum < target){
            sum += nums[i]
            console.log(sum)
            numberOfElements++
            if(i == 0 && sum < target){
                return 0
            }
        }
        else{
            return numberOfElements
        }
    }
    return numberOfElements
}

start = performance.now()
let result2 = minSubArrayLen2(target, nums)
finish = performance.now()
console.log(result2)
console.log(`Execution time: ${finish-start}`)

// time complexity: O(n*log(n)) due to sorting. Approach 1 is better
// space complexity: O(1)

