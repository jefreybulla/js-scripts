/*\
Given an imaginary matrix where each element is the result of the sum of the left and top element

1.  1.  1.  1.  1
1   2.  3.  4.  5
1   3.  6   10. 15
1   4.  10. 20. 35
1   5.  15. 35. 70

Create a function to calculate element in specified location
Input (2, 2) => 6

*/
//        (2,2)
//   (2,1)  +   (1,2) 
//(2,0)+(1,1)  (1,1)+(0,2)

const calculateElement = function(a,b){
    if (a <=0 || b <=0){
        return 1
    }  
    return calculateElement(a, b-1) + calculateElement(a-1, b)
}

let a = 12
let b = 12     // output: 70
let start = performance.now()
let result = calculateElement(a,b)
let finish = performance.now()
console.log(result)
console.log(`execution time: ${finish-start}`)
// Time complexity: exopnential O(2^n)since the growth rate doubles with each addition to the input

// Approach 2: build matrix with loops
console.log('approach 2 ->')
const calculateElement2 = function(a,b){
    let sizeOfMatrix = Math.max(a,b) + 1
    let resultArray = []
    let firstRow = new Array(sizeOfMatrix).fill(1)
    // create first row 
    resultArray[0] = firstRow
    // initialize create other rows
    for(let i=1; i<sizeOfMatrix; i++){
        let newRow = new Array(sizeOfMatrix).fill(0)
        newRow[0] = 1
        resultArray.push(newRow)
    }
    //console.log(resultArray)
    // calculate all other elements of matrix
    for(let i=1; i<=a; i++){
        for(let j=1; j<=b; j++){
            resultArray[i][j] = resultArray[i-1][j] + resultArray[i][j-1]
        }
    }
    //console.log(resultArray)
    return resultArray[a][b]
}

start = performance.now()
result = calculateElement2(a,b)
finish = performance.now()
console.log(result)
console.log(`execution time: ${finish-start}`)
/*
Time complexity is O(a*b) which is better than O(2^n)
For a = 12 and b = 12 
Approach 1: 27ms
Approach 2: 0.1ms an order of magnitude faster!
*/