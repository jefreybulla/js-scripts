const printPairs = function(input) {
    // list of possible tuples
    const n = input.length
    const tuples = []
    for(let i=0; i< n; i++){
        for(let j=0; j< n; j++){
            if(i != j){
                tuples.push([input[i],input[j]])
            }
        }
    }
    console.log(tuples)
    console.log(`tuples length: ${tuples.length}`)
    // for each element, check n - 1 times : n*(n-1) or 6*5 = 30
}

const input = ['a','b','c','d','e','f']
const result = printPairs(input)
console.log(result)