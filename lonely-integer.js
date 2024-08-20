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


input = [1,1,2,2,3,4,4]

result = lonelyInteger(input)
console.log(result)