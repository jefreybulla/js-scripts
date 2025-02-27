/*
You are creating a logical parser.

You will be given a string as input and you should return what
that string evaluates to.

The 2 basic commands to evaluate are ADD and SUBTRACT.

Those will look like: 
( ADD CLAUSE CLAUSE )
( SUBTRACT CLAUSE CLAUSE )

Where CLAUSE can either be an integer or a nested statement.

Some examples:
"( ADD 1 2 )" returns 3
"( SUBTRACT ( ADD 3 4 ) 8 )" returns -1
"( ADD ( ADD 1 2 ) ( SUBSTRACT 2 1 ) )" returns 4

Limitations: no limits in number of nested operations  

*/

const parser = function(arg){
    const splittedInput = arg.split(' ')
    if(splittedInput[0] == '('){
        // remove first element of array
        splittedInput.shift()
    }
    if (splittedInput[0] == 'ADD'){
        // if there are more operations
        if (splittedInput[1] == '('){
            const newInput1 = splittedInput.slice(1,6).join(' ')
            splittedInput.splice(0,6)
            const newInput2 = splittedInput.join(' ')
            return parser(newInput1) + parser(newInput2)
        }
        console.log(`returning: ${Number(splittedInput[1]) + Number(splittedInput[2])}`)
        return Number(splittedInput[1]) + Number(splittedInput[2])
    }
    if (splittedInput[0] == 'SUBTRACT'){
        // if there are more operations
        if (splittedInput[1] == '('){
            const newInput1 = splittedInput.slice(1,6).join(' ')
            splittedInput.splice(0,6)
            const newInput2 = splittedInput.join(' ')
            return parser(newInput1) - parser(newInput2)
            //return 'extra'
        }
        console.log(`returning: ${Number(splittedInput[1]) - Number(splittedInput[2])}`)
        return Number(splittedInput[1]) - Number(splittedInput[2])
    }
    // base case when there is no operator
    return Number(splittedInput[0])

}
    

//const input = "( SUBTRACT 5 1 )"      // returns 4
//const input = "( ADD 1 2 )"           // return 3
const input = "( SUBTRACT ( ADD 3 4 ) 8 )"      // returns -1
//const input = "( SUBTRACT ( ADD 3 4 ) ( ADD 1 1 ) )"    // returns 5
//const input = "( ADD ( ADD 1 2 ) ( SUBTRACT 2 1 ) )" // returns 4
console.log(parser(input))


// Time complexity: since each recursive call effectively reduces the size of the problem by half the time complexity is O(nlog(n))
// Space complexity: O(nlog(n))
