/*
You're given a list of stock prices for a company recorded at different times during the day. Implement a function that will:

Track the highest and lowest stock prices from the list.
Calculate the average price of the stock.
*/

function analyzeStockPrices(prices) {
    // Your code here
    const len = prices.length
    let lowest = Infinity
    let highest = 0
    let sum = 0
    for(let i=0; i<len; i++){
        const localPrice = prices[i]
        sum += localPrice
        if(localPrice < lowest){
            lowest = localPrice
        }
        if(localPrice > highest){
            highest = localPrice
        }
    }
    const average = sum/len
    const response = {
        highest,
        lowest,
        average
    }
    return response

}


const prices = [200, 250, 198, 301, 150, 320];
console.log(analyzeStockPrices(prices));


/* Expected output
{
    highest: 320,
    lowest: 150,
    average: 236.5
}
*/


// Time complexity:  O(n)