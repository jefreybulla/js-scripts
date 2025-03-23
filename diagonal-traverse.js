/*  #  Diagonal Traverse
Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order.

Example 1:
Input: mat = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,4,7,5,3,6,8,9]

Example 2:
Input: mat = [[1,2],[3,4]]
Output: [1,2,3,4]
 
Constraints:
m == mat.length
n == mat[i].length
1 <= m, n <= 10^4
1 <= m * n <= 104
-105 <= mat[i][j] <= 105

*/


// A diagonal is a slice (line) of equal i+i
// 1 is a diagonal at mat[0][0], i+j = 0
// 2 and 4 is diagonal at mat[0][1] & mat[1][0] , i+j=1
// 7, 5,3 is a diagonal at mat[0][2], mat[1,1] and mat[2][0], i+j =2
// 8, 6 is a diagonal at mat[1][2] and mat[2][1], i+j = 3
// 9 diagonal at mat[2,2], i+j=4

// Approach: Group diagonals using a Map. 
// If diagonal i+j is even, reverse
// Concatenate the diagonals to get the result

const findDiagonalOrder = function(mat) {
    const diagonals = new Map()
    const m = mat.length
    const n = mat[0].length
    for(let i=0; i< m; i++){
        for(let j=0; j< n; j++){
            if(diagonals.has(i+j)){
                let elements = diagonals.get(i+j)
                if((i+j)%2 == 0){
                    elements.unshift(mat[i][j])
                }
                else{
                    elements.push(mat[i][j])
                }
                diagonals.set(i+j, elements)
            }
            else{
                diagonals.set(i+j, [mat[i][j]])
            }
        }
    }
    let result = []
    for(let [key, value] of diagonals){
        result = result.concat(value)
    }
    return result
}

let mat = [[1,2,3],[4,5,6],[7,8,9]]         // [1,2,4,7,5,3,6,8,9]
//let mat = [[2,3]]                           // [2,3]
const result = findDiagonalOrder(mat)
console.log(result)
// time complexity: O(m*n)
// space complexity: O(m*n)  since I am storing all elements in Map object
