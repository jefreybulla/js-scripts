/*
Write a function that takes a string of 1s 0 and return longest substring of consecutive zeros, allowed to flip k 1's to 0
Example:
input: "10001011001", k = 2
output: 6
*/
    
// Best case is flippling a 1 when it's sorounded by two 0s
// Strategy: find k 1s with two zeros on each side and flip it. Otherwise flip any 1
    
function consecutiveZeros(str, k){
    let splitInput = str.split('')
    let oneCounter = 0
    let zeroCounter = 0 // 2
    let maxConsecutiveZeros = 0 // 1
    let isPreviousItemZero = false
    let isP01 = false
    let goodFlips = 0 
    let j = 0
    for(item of splitInput){
        //console.log(`item: ${item} - j: ${j} - isPreviousItemZero: ${isPreviousItemZero} - isP01 ${isP01} `)
        if(item == 0){
            zeroCounter++
            if(isP01){
                //console.log("it's a good flip", j)
                goodFlips++
                isP01 = false
            }
            isPreviousItemZero = true
        }
        else if(item == 1){
            oneCounter++
            zeroCounter = 0
            
            if(isPreviousItemZero){
                isP01 = true
            }
            else{
                isP01 = false
            }
            isPreviousItemZero = false
        }
        if(zeroCounter > maxConsecutiveZeros){
            maxConsecutiveZeros = zeroCounter
        }
        j++
        
    }
    //console.log('goodFlips', goodFlips)
    //console.log('maxConsecutiveZeros',maxConsecutiveZeros)

    let additionalZeros = (Math.min(k, goodFlips))*2

    if(k>goodFlips){
        additionalZeros += (Math.min(k-goodFlips, oneCounter))
    }
    
    return maxConsecutiveZeros + additionalZeros
}

//const input =  "0", k = 2   // output: 1
//const input =  "10001011001", k = 0   // output: 3
//const input =  "10001011001", k = 1   // output: 5
const input =  "10001011001", k = 2   // output: 6
//const input =  "100010110010", k = 2   // output: 7
//const input =  "111", k = 5   // output: 3

const result = consecutiveZeros(input,k)
console.log('result ->')
console.log(result)
// Time complexity: O(n)
// Space complexity: O(n)


// Approach 2: using sliding window
// Use two pointers (left, right)
// Move right pointer and count number of 1s in window
// If count is greater than k reduce size of window by moving left 
// keep track of max window size

function longestZerosAfterFlips (str, k){
    let left = 0
    let maxLength = 0
    let onesCount = 0

    for(let right =0; right < str.length; right++){
        if(str[right] == '1'){
            onesCount++
        }

        while(onesCount > k){
            if(str[left] == '1'){
                onesCount--
            }
            left++
        }
        maxLength = Math.max(maxLength, right - left + 1)
    }
    return maxLength

}

console.log('Approach 2-->')
let result2 = longestZerosAfterFlips(input, k)
console.log(result2)
// Time complexity: O(n)
// Space complexity: O(1)