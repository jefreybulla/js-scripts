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

Limitations: no limit in parentesis 

*/


// General approach
// Extract data in inner parentesis
// Compute math operation
// Save result in variable (partialResult)
// Return result 

const parser = function(arg){
    const splittedInput = arg.split(' ')
    console.log(splittedInput)

    for(i=0; i<splittedInput.length;i++){
        if (splittedInput[i] == 'ADD'){
            return Number(splittedInput[i+1]) + Number(splittedInput[i+2])
        }
        if (splittedInput[i] == 'SUBTRACT'){
            return Number(splittedInput[i+1]) - Number(splittedInput[i+2])
        }

        // To-do: recursion if the next caracter is another parenthesis
    }
}
    

//const input = "( SUBTRACT 5 2 )"
const input = "( ADD 1 2 )"
console.log(parser(input))