/* Write a function to calculate the value of expressions containing
 both positive and negative integers using the operations: add, subtract, multiply, and divide 


Examples:

'20 / 4 - 7' is -2

'22 + 3 * 2' is 50
*/

/*
Approach
1. replace symbols with spaces
2. replace numbers with symbols
3. loop over symbolds array and perform operations as needed
*/


function stringCalculator(str){
    // remove spaces
    str = str.replace(/ /g,'')

    handleFirstNegative = false
    if(str[0] == '-'){
        handleFirstNegative = true
        str = str.slice(1,str.length)
    }

    // check if we need to multiply or divide negative numbers (match *- or /-)
    // use numberOfAdjustments to check if final result should be positive or negative 
    let numberOfAdjustments = str.match(/\*\-|\/\-/g)
    console.log('numberOfAdjustments', numberOfAdjustments)
    if(numberOfAdjustments.length>0){
        str = str.replace(/\*\-/g, '*')
        str = str.replace(/\/\-/g, '/')
    }
    console.log('str: ',str)

    let numberArray = str.replace(/[^0-9.]/g,' ')
    //console.log(numberArray)
    numberArray = numberArray.split(' ')
    console.log(numberArray)
    let symbols = str.replace(/[0-9]/g, "")
    //console.log(symbols)
    symbols = symbols.split('')
    console.log(symbols)

    // handle negative first number by 
    // adding 2*firstNumber at the end of numberArray and adding a minus symbol at the end of symbols
    // if first operation is * or / increase numberOfAdjustments
    if(handleFirstNegative){
        if(symbols[0] == '+' || symbols[0] == '-'){
            numberArray.push((2*numberArray[0]).toString())
            console.log(numberArray)
            symbols.push('-')
            console.log(symbols)
        }
        else{
            numberOfAdjustments += 1
        }
    }

    let result = parseInt(numberArray[0])
    let symbolPointer = 0
    for(let i=1; i<numberArray.length; i++){
        console.log(`i:${i} - result: ${result}`)
        if(symbols[symbolPointer] == '+'){
            result += parseInt(numberArray[i])
        }
        if(symbols[symbolPointer] == '-'){
            result -= parseInt(numberArray[i])
            console.log(result)
        }
        if(symbols[symbolPointer] == '*'){
            result *= parseInt(numberArray[i])
        }
        if(symbols[symbolPointer] == '/'){
            result /= parseInt(numberArray[i])
        }
        symbolPointer += 1
    }
    if(numberOfAdjustments%2 == 0){
        return result
    }
    return -result
    
}

//let input = '5+3'   //8
//let input = '4-10+2'  // -4
//let input = '-4-10+2'  // -12
//let input = '-5+2'  // -3
//let input = '22+3*2' // is 50
//let input = '-5*4'   // -20
//let input = '5*4'   // 20
//let input = '6*-3'   // -18
let input = '8/ -4'  // -2

console.log(stringCalculator(input))

// Expanded problem: account for standard order of operations
// Example: 2+3*7 =42 (not 35 since multiplication should be calculated before the sum)
// handle spaces between numbers/symbols
