/*
Flip a matrix in two moves (one row flip, once column flip) to find the max sum of the top-left quadrant
*/

function flippingMatrix(matrix) {

    /* Approach: check all combinatins for a strategy with two moves
    For each row from original position: 
    1. flip row then flip every columns
    2. flip every column then flip row
    Check quadrant sum for each combination (8 per row). Save max
    */

    //console.log(matrix[0][0])
    n = matrix.length
    function calculateQuadrantSum(m){
        // calculate sum of element in the top-left qudrant
        let sum = 0
        for(let i=0; i<n/2; i++){
            for(let j=0; j<n/2; j++){
                sum += m[i][j]
            }
        }
        return sum
    }
    // calculate original result
    let sum = calculateQuadrantSum(matrix)

    function reverseColumn(m, column){
        // I need to use deep clone here
        // if I use Object.assign([], m), m will mutate with mCopy in this method context
        let mCopy = structuredClone(m)
        let j = n-1
        for(let i=0; i<n; i++){
            mCopy[i][column] = m[j][column]             
            j--
        }
        return mCopy
    }
    let matrixCopy = structuredClone(matrix)

    // check all posibilities for two-move-strategie when flipping row first
    for (let i=0; i<n; i++){
        // row loop
        matrixCopy[i].reverse()     // reverse row
        let tempMatrix
        for(let j=0; j<n; j++){
            // column loop
            tempMatrix = reverseColumn(matrixCopy, j)
            sum = Math.max(sum, calculateQuadrantSum(tempMatrix) )
        }
    }
    // check all posibilities for two-move-strategie when flipping column first
    matrixCopy = structuredClone(matrix)
    for (let j=0; j<n; j++){
        // column loop
        let tempMatrix = reverseColumn(matrixCopy, j)
        for(let i=0; i<n; i++){
            // row loop
            tempMatrix[i].reverse()
            sum = Math.max(sum, calculateQuadrantSum(tempMatrix))
        }
    }

    return sum

}


input = [[112,42,83,119],[56,125,56,49],[15,78,101,43],[62,98,114,108]]     // output: 414
console.log('input ->')
console.log(input)
result = flippingMatrix(input)

console.log(result)


/*
To do. Approach 2: find the largest integers in matrix. How can I flip rows/colums
to get those values to the top-left quadrant?
*/