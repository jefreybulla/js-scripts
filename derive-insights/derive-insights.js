/*
In file api-data.json there is data of 3 companies for a span of one week (five days). 

Using the data stored in api-data.json derive the following:
- **Top stock by average closing price over the past week**.
- **Stock with the highest volatility** (calculated as the difference between high and low prices) for a given day.
- **Total trading volume for a specific stock over the past week**.

Sample Googl
[
  {
    time: '2024-10-01T04:00:00Z',
    close: 166.99,
    open: 167.685,
    high: 169.16,
    low: 164.58,
    volume: 28338123
  },
  {
    time: '2024-10-02T04:00:00Z',
    close: 165.86,
    open: 166.42,
    high: 167.52,
    low: 164.73,
    volume: 17760179
  },
  {
    time: '2024-10-03T04:00:00Z',
    close: 165.86,
    open: 164.41,
    high: 166.64,
    low: 163.923,
    volume: 15073101
  },
  {
    time: '2024-10-04T04:00:00Z',
    close: 167.06,
    open: 168.06,
    high: 168.23,
    low: 165.48,
    volume: 19093724
  },
  {
    time: '2024-10-04T23:58:00Z',
    close: 166.9766,
    open: 166.9766,
    high: 166.9766,
    low: 166.9766,
    volume: 470
  }
]
*/

const fs = require('fs').promises

const CACHE_FILE_NAME = 'api-data.json'

let objectData

async function readData(){
    const dataInFile = await fs.readFile(CACHE_FILE_NAME)
    objectData = JSON.parse(dataInFile)   
}

readData().then(() => {
    function getInsights(){
        let averageClosingPrice = {}
        let averageVolatily = {}
        let totalVolume = {}

        // loop over each stock
        for(let key in objectData.memory){
            //console.log(key)
            //console.log(objectData.memory[key])
            const numberofElements = objectData.memory[key].length
            let sum = 0
            let volatility = 0
            let volume = 0

            // loop over each day
            for(let item of objectData.memory[key]){
                sum += item.close
                volatility += item.high - item.low
                volume += item.volume
            }
            averageClosingPrice[key] = sum/numberofElements
            averageVolatily[key] = volatility/numberofElements
            totalVolume[key] = volume
        }
        let topAverageClosingPrice = 0
        let topStockKey
        for(let key in averageClosingPrice){
            if(averageClosingPrice[key] > topAverageClosingPrice){
                topStockKey = key
                topAverageClosingPrice = averageClosingPrice[key]
            }
        }
        const topStock = topStockKey.split('?')[0]
        console.log(`top stock: ${topStock}`)


        let topVolatility = 0
        let topVolatilityKey
        for(let key in averageVolatily){
            if(averageVolatily[key] > topVolatility){
                topVolatilityKey = key
                topVolatility = averageVolatily[key]
            }
        }
        const topVolatilityStock = topVolatilityKey.split('?')[0]
        console.log(`top volalitity stock: ${topVolatilityStock}`)

        let mostVolume = 0
        let mostVolumeKey
        for(let key in totalVolume){
            if(totalVolume[key] > mostVolume){
                mostVolumeKey = key
                mostVolume = totalVolume[key]
            }
        }
        const mostVolumeStock = mostVolumeKey.split('?')[0]
        console.log(`Most volume stock: ${mostVolumeStock}`)
    }

    getInsights()

})

