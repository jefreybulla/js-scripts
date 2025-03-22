/* # Check If N and Its Double Exist

Given an array arr of integers, check if there exist two indices i and j such that :

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]
 

Example 1:
Input: arr = [10,2,5,3]
Output: true
Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]

Example 2:
Input: arr = [3,1,7,11]
Output: false
Explanation: There is no i and j that satisfy the conditions.
 

Constraints:
2 <= arr.length <= 500
-10^3 <= arr[i] <= 10^3
*/

// Approach 1: two nested loops
const checkIfExist = function(arr) {
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(i != j){
                if(arr[i] == 2*arr[j]){
                    //console.log(`${arr[i]} | ${arr[j]}`)
                    return true
                }
            }

        }
    }
    return false
}
//let arr =[10,2,5,3]                   // true
//let arr = [3,1,7,11]                  // false
//let arr = [-2,0,10,-19,4,6,-8]        // false
//let arr = [7,1,14,11]                   // true
//let arr = [-10,12,-20,-8,15]            // true
let arr = [1,1,1,1,1,1,7,7,7,7,1,11,10,3,3,1,7,11,-2,0,10,-19,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
//let arr = [3, 3, 6]                           // true 
//let arr = [0,0]                       // true

let start = performance.now()
let result = (checkIfExist(arr))
let finish = performance.now()
console.log(result)
console.log(`Execution time: ${finish-start}`)
// time complexity: O(n^2)
// space complexity: O(1)


// Approach 2: Store seen values in a JS object. Then check if double exist
const checkIfExist2 = function(arr) {
    let memory = {}
    
    for(let i=0; i<arr.length; i++){
        let testIndex = arr[i]*2
        if(memory[testIndex] == undefined){
            if(arr[i]%2 == 0){
                let testIndex2 = arr[i]/2
                if(memory[testIndex2] != undefined){
                    return true        
                }
            }
            memory[arr[i]] = 1
        }
        else {
            return true
        }
    }
    return false 
}

console.log('Approach 2 ->')
start = performance.now()
let result2 = (checkIfExist2(arr))
finish = performance.now()
console.log(result2)
console.log(`Execution time: ${finish-start}`)
// time complexity: O(n)
// space complexity: O(n)


// Approach 3: similar to Approach 2 but using Set. Saves memory by not storing duplicate numbers

const checkIfExistOptimized = function(arr) {
    let memory = new Set() // Use Set for O(1) lookups

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]

        // Check if either num*2 or num/2 already exists
        if (memory.has(num * 2) || (num % 2 === 0 && memory.has(num / 2))) {
            return true
        }

        // Add current number to the Set. Set do not store duplicates. 
        memory.add(num)
    }
    return false
}


console.log('Approach 3 ->')
start = performance.now()
let result3 = (checkIfExistOptimized(arr))
finish = performance.now()
console.log(result3)
console.log(`Execution time: ${finish-start}`)
// time complexity: O(n)
// space complexity: O(n)


// Approach 4: similar to Approach 3 but using Map. 

const checkIfExistOptimized2 = function(arr) {
    let memory = new Map()

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]

        // Check if either num*2 or num/2 already exists
        if (memory.has(num * 2) || (num % 2 === 0 && memory.has(num / 2))) {
            return true
        }

        // Add current number to the Map. 
        memory.set(num)
    }
    return false
}


console.log('Approach 4 ->')
start = performance.now()
let result4 = (checkIfExistOptimized2(arr))
finish = performance.now()
console.log(result4)
console.log(`Execution time: ${finish-start}`)
// time complexity: O(n)
// space complexity: O(n) Uses a bit more memory compared to using Set since Map have key-value pairs. 


