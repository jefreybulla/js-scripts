/* # Merge Sorted Array

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
Merge nums1 and nums2 into a single array sorted in non-decreasing order.
The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example 1:
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Example 2:
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

Example 3:
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 
Constraints:

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-10^9 <= nums1[i], nums2[j] <= 10^9
 

Follow up: Can you come up with an algorithm that runs in O(m + n) time?

*/

// Approach 1: merge and sort
const merge = function(nums1, m, nums2, n) {
    nums1.splice(m,n,...nums2)
    const comparison = (a,b) => {
        return a - b
    }
    nums1.sort(comparison)
}

let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3        // [1,2,2,3,5,6]
//let nums1 = [1], m = 1, nums2 = [], n = 0                       // [1]
//let nums1 = [0], m = 0, nums2 = [1], n = 1                      // [1]
//let nums1 =[2,0], m = 1, nums2 = [1], n = 1                         // [1,2]
let start = performance.now()
merge(nums1, m, nums2, n)
let finish = performance.now()
console.log('result ->')
console.log(nums1)
console.log(`Execution time: ${finish - start}`)
// time complexity:  O((m + n)*log(m + n))
// space complexity: O(1)



// Approach 2: two pointers. Fill in result in nums1 from right to left
const merge2 = function(nums1, m, nums2, n) {

    if(n == 0){
        return
    }
    let mPointer = m -1
    let nPointer = n -1

    for(let i=(m+n-1); i>=0; i--){
        if(nums1[mPointer] >= nums2[nPointer]){
            nums1.splice(i,1,nums1[mPointer])
            mPointer--
        }
        else{
            nums1.splice(i,1,nums2[nPointer])
            nPointer--
            if(nPointer<0){
                return
            }
        }
    }
}

nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3        // [1,2,2,3,5,6]
start = performance.now()
merge2(nums1, m, nums2, n)
finish = performance.now()
console.log('Approach 2 result ->')
console.log(nums1)
console.log(`Execution time: ${finish - start}`)
// Time complexity: O(n+m)
// Space complexity: O(1)


// Approach 3: two pointers but using a while loop
const mergeOptimized = function(nums1, m, nums2, n) {
    let i = m - 1;  // Pointer for nums1's last valid element
    let j = n - 1;  // Pointer for nums2's last element
    let k = m + n - 1;  // Pointer for merged position in nums1

    // Merge from the end to the beginning
    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];  // Place larger element at the end
        } else {
            nums1[k--] = nums2[j--];  // Place nums2 element at the end
        }
    }
}
// time complexity: O(m+n)
// space complexity: O(1)