/* # Pascal's Triangle

Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:
Input: numRows = 1
Output: [[1]]

Constraints:

1 <= numRows <= 30
*/

// Approach 1: left and right elements are always 1s
// for inner elements use a loop to add current and next


const generate = function(numRows) {
    if(numRows == 1){
        return [[1]]
    }
    if(numRows == 2){
        return [[1], [1,1]]
    }

    let resultArray = [[1], [1,1], [1,2,1]]
    let pendingRows = numRows - 3
    while(pendingRows>0){
        console.log('in while')
        let innerResult = [1]
        let lastElementSoFar = resultArray[resultArray.length - 1]
        for(let i=0; i < lastElementSoFar.length - 1; i++){
            let current = lastElementSoFar[i]
            let next = lastElementSoFar[i+1]
            innerResult.push(current + next)
        }
        innerResult.push(1)
        resultArray.push(innerResult)
        pendingRows--
    }
    return resultArray  
}
numRows = 5             // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
let result = generate(numRows)
console.log(result)
// time complexity:   O(n^2) since 1 + 2 + 3 + ... + n = O(n²)
// space complexity: O(n^2)


// Approach 2: using two-dimensional array
function generate(numRows) {
    const triangle = [];

    for (let row = 0; row < numRows; row++) {
        const current = new Array(row + 1).fill(1); // Start with all 1s

        for (let j = 1; j < row; j++) {
            current[j] = triangle[row - 1][j - 1] + triangle[row - 1][j];
        }

        triangle.push(current);
    }

    return triangle;
}
// time complexity:   O(n^2) 
// space complexity: O(n^2)
