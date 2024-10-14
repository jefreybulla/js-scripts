// Given those two arrays:
// A = [4, 2, 6]
// B = [5, 1, 3, 0, 0, 0]

// I would like to have a function that sorts and merges those two arrays into one array. I would like the solution to optimize for memory allocation.

// Assumptions:
// 1. Size of array B is always 2*size of array A.
// 2. Elements of the B array at the index that is greater than or equal to len(A) (which is 3 in this example) are place holders

// In this example, the result should be [1,2,3,4,5,6];

function merge(a,b){
    const len = a.length
    b.splice(len,len)
    function comparison(x,y){
      return (x-y)
    }
    // using b to optimize memory
    b = [...a,...b].sort(comparison)
    return b
  }
  
let a = [4, 2, 6]
let b = [5, 1000, 1, 0, 0, 0]
let result = merge(a,b)
console.log(result)
// [1,2,4,5,6,1000]
  
a = [4, 2, 6]
b = [5, 1, 3, 0, 0, 0]
result = merge(a,b)
console.log(result)

a = [0]
b = [-1,0]
result = merge(a,b)
console.log(result)
  
  
  // space complexity O(n)
  
  