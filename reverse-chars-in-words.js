/* Reverse Words in a String III

Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Example 2:
Input: s = "Mr Ding"
Output: "rM gniD"
 
Constraints:
1 <= s.length <= 5 * 10^4
s contains printable ASCII characters.
s does not contain any leading or trailing spaces.
There is at least one word in s.
All the words in s are separated by a single space.
*/

// Approach:
// split, iteratate over each word and reverse then join
const reverseWords = function(s) {
    let splitInput = s.split(' ')
    console.log(splitInput)
    for(let i=0; i<splitInput.length; i++){
        let splitWord = splitInput[i].split('')
        //console.log(splitWord)
        splitInput[i] = splitWord.reverse().join('')
    }
    return splitInput.join(' ')
}

let s = "Let's take LeetCode contest"           // "s'teL ekat edoCteeL tsetnoc"
const result = reverseWords(s)
console.log(result)
// time complexity: O(n)
// space complexity: O(n)
