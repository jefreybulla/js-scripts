/*
Given a string in CSV format, parse data into an object

Example:
input:
'ID, Name,    City
1,  Michael, New Jersey
2,  Jack,    California'

output: 
[
    { ID: 1, Name: 'Michael', State: NJ},
    { ID: 2, Name: 'Jack', State: CA},
]

*/


function parseCSV(string){
    const parsedArray = string.split('\n')
    console.log(parsedArray)
    const columnNames = parsedArray[0].split(', ')
    console.log(columnNames)
    let resultArray = []

    for(let i=1; i<parsedArray.length; i++){
        const parsedRow = parsedArray[i].split(', ')
        console.log(parsedRow)
        const rowObject = {}
        for(let j=0; j<columnNames.length; j++){
            rowObject[columnNames[j]] = parsedRow[j]
        }
        resultArray.push(rowObject)
    }

    return resultArray
}

const input = 'ID, Name, State\n1, Michael, New Jersey\n2, Jack, California'
console.log(input)

console.log('parsing...')
const result = parseCSV(input)
console.log(result)