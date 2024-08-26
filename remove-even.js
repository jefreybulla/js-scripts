// remove even numbers from an array

function removeEven(arr){
    resultArr = []
    for(i of arr){
        if(i%2 != 0){
            resultArr.push(i)
        }
    }
    return resultArr
}



let input = [1,2,4,5,10,6,3] 
let result = removeEven(input)
console.log(result)


console.log('approach 2')
function removeEven2(arr){
    return arr.filter(i => i%2 != 0)
}

console.log(removeEven(input))
