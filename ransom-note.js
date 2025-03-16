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

// Approach 1: take each char of the note and check if the char exist in magazine

const canConstruct = function(ransomNote, magazine) {
    noteArray = ransomNote.split('')
    magazineArray = magazine.split('')
    //console.log(noteArray)
    for(let i=0; i<noteArray.length; i++){
        const indexOfChar = magazineArray.indexOf(noteArray[i]);
        if (indexOfChar > -1) { // splice array when item is found
            magazineArray.splice(indexOfChar, 1); // remove used element magazine
            //console.log(magazineArray)
        }
        else{
            return false
        }
    }
    return true
}

const ransomNote = "az", magazine = "aab"      // false
//const ransomNote = "ab", magazine = "aab"      // true
const result = canConstruct(ransomNote, magazine)
console.log(result)
// time complexity O(n)
// Space complexity O(n+m)


// Approach 2: Use an object to store recurrence of letters. Then check note for matches. 
const canConstruct2 = function(ransomNote, magazine) {
    let magazineIndex = {}

    // Finding recurrence of letters
    for(let i=0; i<magazine.length; i++){
        if(magazineIndex[magazine[i]] == undefined){
            magazineIndex[magazine[i]] = 1
        }
        else{
            magazineIndex[magazine[i]] += 1
        }
    }

    // Check matches to build letter 
    for(let j=0;j<ransomNote.length;j++){
        if(magazineIndex[ransomNote[j]] == undefined || magazineIndex[ransomNote[j]] < 1 ){
            return false
        }
        magazineIndex[ransomNote[j]] -= 1        // remove used letter
    }
    return true
}

const result2 = canConstruct2(ransomNote, magazine)
console.log(result2)
// Time complexity: O(n + m)
// Space complexity: O(1)
