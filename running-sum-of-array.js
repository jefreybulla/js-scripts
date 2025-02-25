/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.
*/


// Aproach 1: using an additional variable

const runningSum = function(nums) {
    resultArray = [nums[0]]
    for(i=1; i<nums.length; +i++){
        resultArray.push(resultArray[i-1]+nums[i])
    }
    return resultArray
}

// Aproach 2: reusing variable
const runningSum2 = function(nums) {
    for(i=1; i<nums.length; +i++){
        nums[i]= nums[i-1]+nums[i]
    }
    return nums
}


nums = [1,2,3,4]
console.log(runningSum(nums))
console.log(runningSum2(nums))
console.log(nums)         // [ 1, 3, 6, 10 ]. We may not want this. 

// Time complexity O(n)
// Space complexity O(1) since we don't include input or outputs arrays in this analysis