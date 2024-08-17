
function getMedian(param){

    function compareNumbers(a, b){
        return a - b
    }
    const sortedInput = param.toSorted(compareNumbers)
    param = 'abc'
    console.log(`sorted: ${sortedInput}`)
    const n = sortedInput.length
    const index = Math.floor(n/2)
    console.log(`index: ${index}`)
    return sortedInput[index]
}


input = [1,4,9,3,2]
//input = [ 10, 7, 9]
result = getMedian(input)
console.log(result)
console.log('after---')
console.log(`input: ${input}`)




