/*
Given an m x n matrix, return all elements of the matrix in spiral order.


Examples:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

function spiralMatrix(matrix){
    let resultArray = []
    function recursion(m){
        let lastRowIndex = m.length - 1
        let lastColumnIndex = m[0].length - 1

        //traverse row 1 from left to right
        for(let j=0; j<=lastColumnIndex; j++){
            resultArray.push(m[0].shift())
        }
        m.shift()
        //console.log('m:', m)
        if(m.length == 0){
            return
        }
        lastRowIndex = m.length - 1

        // traverse last column from top to bottom 
        for(let i=0; i<=lastRowIndex; i++){
            resultArray.push(m[i].pop())
        }
        //console.log('m:', m)
        if(m[lastRowIndex].length == 0){
            return
        }
        lastColumnIndex = m[0].length - 1

        // traverse bottom row from right to left
        for(let j=lastColumnIndex; j>=0; j--){
            resultArray.push(m[lastRowIndex].pop())
        }
        m.pop()
        if(m.length == 0){
            return
        }
        lastRowIndex = m.length - 1
        //console.log('m:', m)

        // traverse the first column from the bottom to the top
        for(let i=lastRowIndex; i>=0; i--){
            resultArray.push(m[i].shift())
        }
        if(m[lastRowIndex].length == 0){
            return
        }
        //console.log('m:', m)
        recursion(m)

    }
    const m = structuredClone(matrix)
    recursion(m)
    return resultArray
}


//const matrix = [[1,2,3],[4,5,6],[7,8,9]]
//Output: [1,2,3,6,9,8,7,4,5]

const matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
//Output: [1,2,3,4,8,12,11,10,9,5,6,7]

//const matrix = [[3],[2]]
// Output: [3,2]

const result = spiralMatrix(matrix)
console.log('result ->')
console.log(result)
// Time complexity O(m*n)