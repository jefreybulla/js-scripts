// Write, read and append to file


const fs = require('fs')
const fsp = require('fs').promises


// Data which will write in a file.
const data = {
    memory: {
        key1: 'value1'
    }
}

let jsonData = JSON.stringify(data)

// Write data in 'Output.txt' .
fs.writeFile('Output.json', jsonData, (err) => {
    console.log('writing to file')
    // In case of a error throw err.
    if (err) throw err;
})

fs.readFile('Output.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('reading file')
    console.log(data);
    let objectData = JSON.parse(data)
    console.log(objectData.memory)

    // append data to file by getting the object and adding more data
    let moreData = {
        mySecondKey: 'value 2'
    }
    objectData = {...objectData, ...moreData}

    jsonData = JSON.stringify(objectData)

    // write to file with new data
    console.log('overring file')
    fs.writeFile('Output.json', jsonData, (err) => {

        // In case of a error throw err.
        if (err) throw err;
    })

    moreData = { key3: 'value3'}
    jsonData = JSON.stringify(moreData)
    
    // append new data without overwriting the existing data
    console.log('appending to file')
    fs.appendFile('Output.json', jsonData, (err) => {
    
        // In case of a error throw err.
        if (err) throw err;
    })
})

async function readFile(filePath) {
    try {
        console.log(`reading ${filePath}`)
        const data = await fsp.readFile(filePath)
        console.log(data.toString())
        console.log(JSON.parse(data))
    } catch (error) {
        console.error(`Got an error trying to read the file: ${error.message}`)
    }
}

readFile('greetings.json')


async function readNotebook(filePath) {
    try {
        console.log('reading notebook')
        const data = await fsp.readFile(filePath)
        console.log(data.toString())
        //console.log(JSON.parse(data))
    } catch (error) {
        console.error(`Got an error trying to read the file: ${error.message}`)
    }
}

readNotebook('cohort-analysis-v2.ipynb')

//readNotebook('cohort_analysis_with_excel.ipynb')