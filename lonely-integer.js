// find the unique integer in array

function lonelyInteger(param) {
    // Write your code here
    const results = {}

    for(let i of param){
        if (results[i] == undefined){
            results[i] = 1
        }
        else{
            results[i] = results[i] + 1
        }
    }
    for (let key in results){
        if(results[key] == 1){
            return key
        }
    }
}


let input = [1,1,2,2,3,4,4]
let start = performance.now()
let result = lonelyInteger(input)
let finish = performance.now()
console.log(result)
console.log(`execution time: ${finish-start}`)

// using the Map object
function lonelyInteger2(param) {
    // Write your code here
    const results = new Map()

    for(let i of param){
        if (!results.get(i)){
            results.set(i,1)
        }
        else{
            results.set(i,results.get(i)+1)
        }
    }
    for (let [key, value] of results){
        if(value == 1){
            return key
        }
    }
}

input = [1,1,2,2,3,4,4]
start = performance.now()
result = lonelyInteger2(input)
finish = performance.now()
console.log(result)
console.log(`execution time: ${finish-start}`)
// both approaches have similar execution time