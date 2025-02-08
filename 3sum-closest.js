/*
Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
Return the sum of the three integers.
You may assume that each input would have exactly one solution.

Examples

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

*/

// Approach: loop over each elements uwsing sliding window approach

var threeSumClosest = function(nums, target) {
    function compareNumbers(a,b){
        return a - b
    }
    let sortedNums = nums.toSorted(compareNumbers)
    console.log(sortedNums)

    const len = nums.length
    //const thirdElementIndex = 0
    let leftPointer = 1
    let rightPointer = len - 1
    // k is the third element ourside of sliding window
    let k = 0
    let closestToTarget = Infinity
    while(k < len){
        const localTarget = target - sortedNums[k]
        while(leftPointer < rightPointer){
            if(leftPointer != k || rightPointer != k){
                const localTwoSum = sortedNums[leftPointer] + sortedNums[rightPointer]
                if(localTwoSum == localTarget){
                    return target
                }
                console.log(`k: ${k}, left: ${leftPointer}, right: ${rightPointer}`)
                const localThreeSum = localTwoSum + sortedNums[k]
                console.log(`localThreeSum: ${localThreeSum}`)

                if( Math.abs(target - localThreeSum) < Math.abs(target - closestToTarget) ){
                    closestToTarget = localThreeSum
                    console.log(`new closest to target: ${localThreeSum}`)
                }
                if(localThreeSum < target){
                    console.log('moving leftPointer')
                    leftPointer++
                }
                else{
                    console.log('moving rightPointer')
                    rightPointer--
                }
            }
            else break
        }
        k++
        leftPointer = k + 1
        rightPointer = len - 1
        
    }
    return closestToTarget

}


const nums = [-1,2,1,-4], target = 1       // 2
//const nums = [0,0,0], target = 1       // 0
//const nums = [4,0,5,-5,3,3,0,-4,-5], target = -2       // -2
//const nums = [1,1,1,0], target = -100     //2



result = threeSumClosest(nums, target)
console.log('result -->>')
console.log(result)

// Time complexity O(n^2)

