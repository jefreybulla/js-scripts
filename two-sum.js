/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/


/*
Approach: 
1. Use a dictionary to store the numbers in the list as keys and their indices as values. 
2. For each number, you can check if the difference between the target and the current number is already in the dictionary. 
    If it is, result is found. 
*/

console.log('using dictionary ->')
// If the input is already sorted
const twoSumDictionary = function(nums, target) {
    n = nums.length
    let dictionary = {}
    for(let i=0; i<n; i++){
        dictionary[nums[i]] = i
    }
    //console.log(dictionary)
    for(let i=0; i<n; i++){
        let temp = target - nums[i]
        if(dictionary[temp] && dictionary[temp] != i){
            //console.log('solution found')
            return [i, dictionary[temp]]
        }
    }
}

let nums3 = [11,15,56, 81,-10, 199, 299, 399, 499, 599, 699, 799, 899, 999, 7, 2], target3 = 9
//Output: [0,1]

//let nums3 = [2,7,11,15], target3 = 9
//Output: [0,1]

//let nums3 = [3,3], target3 = 6
//Output: [0,1]

//let nums3 = [-1,-2,-3,-4,-5], target3= -8
// Output: [2,4]

//let nums3 = [1,3,4,2], target3 = 6 
// Output: [2,3]

start = performance.now()
result = twoSumDictionary(nums3, target3)
end = performance.now()
console.log(result)
console.log(`execution time: ${end-start}`)
// time complexity O(n)

/*
Approach: 
1. Nested loop to try all combinations until solution is found
*/

console.log('using 2 loops ->')
// If the input is already sorted
const twoSumLoops = function(nums, target) {
    n = nums.length
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(i != j){
                let localSum = nums[i] + nums[j]
                if(localSum == target){
                    //console.log('solution found!')
                    return [i,j]
                }
            }
        }
    }
}
let nums2 = [11,15,56, 81,-10, 199, 299, 399, 499, 599, 699, 799, 899, 999, 7, 2], target2 = 9
// Output: [3,4]

//let nums2 = [2,7,11,15], target2 = 9
//Output: [0,1]

//let nums2 = [3,3], target2 = 6
//Output: [0,1]

//let nums2 = [-1,-2,-3,-4,-5], target2= -8
// Output: [2,4]

start = performance.now()
result = twoSumLoops(nums2, target2)
end = performance.now()
console.log(result)
console.log(`execution time: ${end-start}`)


/*
Approach: 
1. Sort 
2. Use two pointers starting at each end
3. If sum result is greater than target move right pointer to the left
   If sum result is less than target move left pointer to the right
   If sum equals target return pointers
*/

const twoSum = function(nums, target) {
    n = nums.length
    pointerLeft = 0
    pointerRight = n-1

    function comparison(a,b){
        return a - b
    }
    let sortedNums = nums.toSorted(comparison)
    //console.log(sortedNums)
    let resultFound = false
    while(!resultFound){
        let localSum = sortedNums[pointerLeft] + sortedNums[pointerRight]
        if(localSum > target){
            pointerRight--
        }
        else if(localSum < target){
            pointerLeft++
        }
        else if(localSum == target){
            //console.log('solution found!')
            resultFound = true
        }
    }
    result1 = nums.findIndex(e => e == sortedNums[pointerLeft])
    // set nums[result] to a non-relevant value for cases when sortedNums[pointerLeft] == sortedNums[pointerRight]
    nums[result1] = 'x'
    result2 = nums.findIndex(e => e == sortedNums[pointerRight])
    return [result1, result2]
}

let nums = [11,15,56, 81,-10, 199, 299, 399, 499, 599, 699, 799, 899, 999, 7, 2], target = 9
// Output: [3,4]

//let nums = [2,7,11,15], target = 9
//Output: [0,1]

//let nums = [3,3], target = 6
//Output: [0,1]

//let nums = [-1,-2,-3,-4,-5], target= -8
// Output: [2,4]

console.log('using pointers')
start = performance.now()
result = twoSum(nums, target)
end = performance.now()
console.log(result)
console.log(`execution time: ${end-start}`)
// time complexity O(n)
