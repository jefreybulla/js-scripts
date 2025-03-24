/* # Implement strStr()

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example 2:
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.

Constraints:
1 <= haystack.length, needle.length <= 10^4
haystack and needle consist of only lowercase English characters.

*/

// Approach 1: two pointers left & right
// Left pointer moves when chars in haystack and needle are the same
// right & left pointer moves when chars are not the same
// return when left pointer catch up to right pointer
const strStr = function(haystack, needle) {
    lenHaystack = haystack.length
    lenNeedle = needle.length
    let haystackIndex = 0
    let needleIndex = 0
    while (haystackIndex < lenHaystack ){
        if(needle[needleIndex] != haystack[needleIndex+haystackIndex]){
            haystackIndex++
            needleIndex = 0
            continue
        }
        // last char of Needle
        if(needleIndex == lenNeedle - 1){
            return haystackIndex
        }
        needleIndex++
    }
    return -1
}

let haystack = "happybutsad", needle = "sad"          // 8
//let haystack = "sadbutsad", needle = "sad"          // 0
//let haystack = "leetcode", needle = "leeto"         // -1
let start = performance.now()
let result = strStr(haystack, needle)
let finish = performance.now()
console.log(result)
console.log(`Execution time: ${finish-start}`)
// time complexity: O(m*n)
// space complexity: O(1)


// Approach 2: use built-in indexOf

console.log('Approach 2 ->')
start = performance.now()
let result2 = haystack.indexOf(needle)
finish = performance.now()
console.log(`Execution time: ${finish-start}`)
console.log(result2)
// this approach is orders of magnitude faster thatn approach 1
// time complexity: worse case is O(m*n)
// However modern JS engines like V8 (Chrome, Node.js), SpiderMonkey (Firefox), and JavaScriptCore (Safari) may use smarter techniques for long strings.
// Space complexity O(1)

