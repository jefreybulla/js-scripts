/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.


A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Telephone-keypad2.svg/1200px-Telephone-keypad2.svg.png

Examples:
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Input: digits = ""
Output: []

Input: digits = "2"
Output: ["a","b","c"]

Constraints:
0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].
*/


var letterCombinations = function(digits) {
    if(digits == ''){ return []}

    const keypad = {
        2: ['a','b','c'],
        3: ['d','e','f'],
        4: ['g','h','i'],
        5: ['j','k','l'],
        6: ['m','n','o'],
        7: ['p','q','r','s'],
        8: ['t','u','v'],
        9: ['w','x','y','z']
    }
    const splitDigits = digits.split('')
    if(splitDigits.length == 1){
        return keypad[splitDigits[0]]
    }
    let resultArray = []

    function combine(array1, array2){
        let localResult = []
        for(let i=0; i<array1.length; i++){
            for(let j=0; j<array2.length; j++){
                localResult.push(array1[i]+array2[j])
            }
        }
        resultArray = localResult
    }

    resultArray = keypad[splitDigits[0]]
    splitDigits.shift()


    while(splitDigits.length > 0){
        let arrayArg = keypad[splitDigits[0]]
        splitDigits.shift()
        combine(resultArray, arrayArg)
    }

    return resultArray
}

//const digits = "23"
//Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

//const digits = ""
//Output: []

//const digits = "2"
//Output: ["a","b","c"]

const digits = "234"

const result = letterCombinations(digits)
console.log('result ->')
console.log(result)

// Time complexity is exponential: O(2^n)