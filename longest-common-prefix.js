/* Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 
Constraints:
1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters if it is non-empty.
*/


// Approach: 
// Take first word and loop over each char
// check for char matches looping over each other word 
const longestCommonPrefix = function(strs) {
    if(strs.length == 1){
        return strs[0]
    }
    let result = ''
    let firstWord = strs[0]
    let isEnd = false
    for(let charIndex =0; charIndex<firstWord.length; charIndex++){
        for(let wordIndex =1; wordIndex<strs.length; wordIndex++){
            if(strs[wordIndex][charIndex] != undefined && firstWord[charIndex] == strs[wordIndex][charIndex]){
                // If this is last word -> save match
                if(wordIndex >= strs.length -1){
                    result += firstWord[charIndex]
                }
            }
            else{
                isEnd = true
                break
            }
        }
        if(isEnd){
            return result
        }
    }
    return result    
}

//let strs = ["flower","flow","flight"]           // "fl"
//let strs = ["dog","racecar","car"]              // ""
let strs = ["aaa","aa","aaa"]                       // "aa"
let result = longestCommonPrefix(strs)
console.log(result)
// time complexity: O(*n) where m is number of words and n is the length of the shortest word
// space complexity O(1)
