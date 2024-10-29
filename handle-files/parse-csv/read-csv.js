const fsp = require('fs').promises

async function readCSV(filePath) {
    try {
        console.log('reading csv file')
        const data = await fsp.readFile(filePath)
        //console.log(data.toString())
        const result = data.toString()
        //console.log(result)
        return result
    } catch (error) {
        console.error(`Got an error trying to read the file: ${error.message}`)
    }
}

let fileContent = ''
readCSV('people.csv').then(result => {
    //console.log(result)
    fileContent = result
    console.log(typeof fileContent)
    console.log(fileContent)

    const parsedArray = fileContent.split('\n')
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
    console.log(resultArray)
})

