

function diagonalDifference(arr) {
    // Write your code here
    // arr = [11,2,4, [4 5 6], [10 8 -12]]

    let n = arr.length
    let sum1 = 0
    let sum2 = 0

    // calculate sum for diagonal1

    let j = 0
    for(let i=0; i<n; i++){
        sum1 += arr[i][j]
        j++
    }

    // calculate sum2
    j = n-1
    for(let i=0; i<n; i++){
        sum2 += arr[i][j]
        j--
    }
    
    return Math.abs(sum1 - sum2)


    
    //const diagonal1 = arr[0][0] + arr[1][1] + arr[2][2]
    //const diagonal2 = arr[0][2] + arr[1][1] + arr[2][0]

    //console.log(diagonal1)
    return true
    //return Math.abs(diagonal1 - diagonal2)
}



input = [[11,2,4], [4, 5, 6], [10, 8, -12]]     // 15
result = diagonalDifference(input)

console.log(result)