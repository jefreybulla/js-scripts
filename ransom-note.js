/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
*/

/*
Examples

Input: ransomNote = "a", magazine = "b"
Output: false

Input: ransomNote = "aa", magazine = "ab"
Output: false

Input: ransomNote = "aa", magazine = "aab"
Output: true

*/



const canConstruct = function(ransomNote, magazine) {
    noteArray = ransomNote.split('')
    magazineArray = magazine.split('')
    //console.log(noteArray)
    for(let i=0; i<noteArray.length; i++){
        const indexOfChar = magazineArray.indexOf(noteArray[i]);
        if (indexOfChar > -1) { // splice array when item is found
            magazineArray.splice(indexOfChar, 1); // 2nd parameter means remove one item only
            //console.log(magazineArray)
        }
        else{
            return false
        }
    }
    return true
}

//const ransomNote = "az", magazine = "aab"      // false
const ransomNote = "ab", magazine = "aab"      // true
const result = canConstruct(ransomNote, magazine)
console.log(result)
// time complexity O(n)

