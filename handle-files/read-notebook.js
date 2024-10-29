// Script to read a Jupyter notebook file

const fsp = require('fs').promises

async function readNotebook(filePath) {
    try {
        console.log('reading notebook')
        const data = await fsp.readFile(filePath)
        console.log(data.toString())
        //const jsonData = JSON.parse(data)
        //console.log(jsonData)
        //console.log(JSON.stringify(jsonData))
    } catch (error) {
        console.error(`Got an error trying to read the file: ${error.message}`)
    }
}

readNotebook('cohort-analysis-v2.ipynb')

//readNotebook('cohort_analysis_with_excel.ipynb')