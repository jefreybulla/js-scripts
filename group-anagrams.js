/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

Input: strs = [""]
Output: [[""]]

Input: strs = ["a"]
Output: [["a"]]

Constraints:
1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
*/

const groupAnagrams = function(strs) {

    const isAnagram = function(s, t) {
        if(s.length !== t.length){
            return false
        }
        let sArray = s.split('')
        let tArray = t.split('')
    
        for(let item of sArray){
            const index = tArray.indexOf(item)
            if(index > -1){
                tArray.splice(index, 1)
                //console.log(tArray)
            }
            else{
                return false
            }
        }
    
        return true
        
    }

    let resultArray = []
    let n = strs.length
    let memory = {}
    for(let i=0; i<n ;i++ ){
        if(memory[strs[i]]){
            console.log(`skipping ${strs[i]}`)
            continue
        }
        let localResult = [strs[i]]
        memory[strs[i]] = true
        //console.log(memory)
        for(let j=0; j<n ;j++ ){
            if(i == j){
                continue
            }
            if(isAnagram(strs[i], strs[j])){
                localResult.push(strs[j])
                memory[strs[j]] = true
                //console.log(memory)
            }
        }
        resultArray.push(localResult)
    }
    return resultArray
}

const input = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

//const input = [""]
//Output: [[""]]

//const input = ["a"]
//Output: [["a"]]

let result = groupAnagrams(input)
console.log(result)
// time complexity: worse case O(n^2)