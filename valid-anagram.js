/*
Given two strings s and t, return true if t is an 
anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.

Examples
Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "rat", t = "car"
Output: false
*/


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



const input1 = "anagram", input2 = "nagaram"
const result = isAnagram(input1, input2)
console.log(result)
// time complexity O(n)