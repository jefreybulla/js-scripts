/*
Given a square matrix of size n represented by a two dimensional array,
create a function that returns a specific column (0 indexed)

input = [[1,2],[3,4]]
f(1) = [2,4]    
return column 1

f(0) = [1,3]
return column 0 
*/

function getColumn(square, column){
    //console.log(square[1][1])
    const results = []
    for(row of square){
        results.push(row[column])
    }
    return results
}


//let input = [[1,2],[3,4]]
let column = 2
let input = [[1,2,3],[4,5,6],[7,8,9]]
result = getColumn(input, column)
console.log(result)
// time complexity is O(n)
// space complexity: needs aditional O(n)
