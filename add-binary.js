/* #  Add Binary

Given two binary strings a and b, return their sum as a binary string.

Example 1:
Input: a = "11", b = "1"
Output: "100"

Example 2:
Input: a = "1010", b = "1011"
Output: "10101"
 
Constraints:

1 <= a.length, b.length <= 10^4
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.

*/

// Approach: split, add and join
const addBinary = function(a, b) {
    const splitA = a.split('')
    const splitB = b.split('')

    const largestInput = Math.max(a.length, b.length)
    if(a.length > b.length){
        for(let i=0; i< largestInput - b.length; i++){
            splitB.unshift(0)
        }
    }
    if(a.length < b.length){
        for(let i=0; i< largestInput - a.length; i++){
            splitA.unshift('0')
        }
    }
    // Binary addition implementation
    let resultArray = []
    let carry = false
    for(let i=largestInput - 1; i>=0; i--){
        if(carry){
            if( splitA[i] == '0' && splitB[i] == '0'){
                resultArray.unshift('1')
                carry = false
                continue
            }
            if( splitA[i] == '1' && splitB[i] == '0' || splitA[i] == '0' && splitB[i] == '1'){
                resultArray.unshift('0')
                carry = true
                continue
            }
            resultArray.unshift('1')
            carry = true
        }
        else{
            if( splitA[i] == '0' && splitB[i] == '0'){
                resultArray.unshift('0')
                carry = false
                continue
            }
            if( splitA[i] == '1' && splitB[i] == '0' || splitA[i] == '0' && splitB[i] == '1'){
                resultArray.unshift('1')
                carry = false
                continue
            }
            resultArray.unshift('0')
            carry = true
        }
    }
    if(carry){
        resultArray.unshift('1')
    }
    return resultArray.join('')
}

//let a = "11", b = "1"               // "100"
let a = "1010", b = "1011"          // "10101"
let start = performance.now()
let result = addBinary(a,b)
let finish = performance.now()
console.log(result)
console.log(`Execution time: ${finish-start}`)
// time complexity: O(n)
// space complexity:  O(n)


// Approach2: split, add and join. 
// For binary addition use push instead of unshif and then reserve once
const addBinary2 = function(a, b) {
    const splitA = a.split('')
    const splitB = b.split('')

    const largestInput = Math.max(a.length, b.length)
    if(a.length > b.length){
        for(let i=0; i< largestInput - b.length; i++){
            splitB.unshift(0)
        }
    }
    if(a.length < b.length){
        for(let i=0; i< largestInput - a.length; i++){
            splitA.unshift('0')
        }
    }
    // Binary addition implementation
    let resultArray = []
    let carry = false
    for(let i=largestInput - 1; i>=0; i--){
        if(carry){
            if( splitA[i] == '0' && splitB[i] == '0'){
                resultArray.push('1')
                carry = false
                continue
            }
            if( splitA[i] == '1' && splitB[i] == '0' || splitA[i] == '0' && splitB[i] == '1'){
                resultArray.push('0')
                carry = true
                continue
            }
            resultArray.push('1')
            carry = true
        }
        else{
            if( splitA[i] == '0' && splitB[i] == '0'){
                resultArray.push('0')
                carry = false
                continue
            }
            if( splitA[i] == '1' && splitB[i] == '0' || splitA[i] == '0' && splitB[i] == '1'){
                resultArray.push('1')
                carry = false
                continue
            }
            resultArray.push('0')
            carry = true
        }
    }
    if(carry){
        resultArray.push('1')
    }

    return resultArray.reverse().join('')
}

console.log('Approach 2 ->')
start = performance.now()
let result2 = addBinary2(a,b)
finish = performance.now()
console.log(result2)
console.log(`Execution time: ${finish-start}`)
// time complexity O(n)
// space complexity O(n)
