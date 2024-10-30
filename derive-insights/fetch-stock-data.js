
/*
To include secrets, run this script with
node --env-file=.env fetch-data
*/

const fs = require('fs').promises


const CACHE_FILE_NAME = 'api-data.json'

async function checkCache(key){
    const dataInFile = await fs.readFile(CACHE_FILE_NAME)
    //console.log(dataInFile.toString())
    const jsonData = JSON.parse(dataInFile)
    //console.log(jsonData)
    if(jsonData.memory[key]){
        console.log('cache hit')
        return jsonData.memory[key]
    }
    else{
        console.log('cache miss')
        return false
    }
}

async function saveInCache(key, value){
    const dataInFile = await fs.readFile(CACHE_FILE_NAME)
    let objectData = JSON.parse(dataInFile)
    const newElement = { [key]: value }
    objectData.memory = {...objectData.memory, ...newElement}
    const jsonData = JSON.stringify(objectData)
    fs.writeFile(CACHE_FILE_NAME, jsonData)
}

const fetchData = async() => {
    const baseUrl = 'https://real-time-stock-finance-quote.p.rapidapi.com/quote/stock/'
    const tickerSymbol = 'AAPL'
    const optionalParams = '?frame=1D&limit=10&from=2024-07-30T09%3A30%3A00Z'
    const fullQuery = tickerSymbol + optionalParams
    const cacheData = await checkCache(fullQuery)
    if(cacheData){
        return cacheData
    }
    else {
        console.log('fetching data..')

        const response = await fetch(baseUrl + fullQuery, {
            headers: {
                'x-rapidapi-key': process.env.API_KEY,
                'x-rapidapi-host': 'real-time-stock-finance-quote.p.rapidapi.com'
            }
        })
        const data = await response.json()
        //console.log(data)
        saveInCache(fullQuery, data)
        return data
    }
}


fetchData().then((result) => {console.log(result)})