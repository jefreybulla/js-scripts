/*
Generate binary numbers from 1 to n in the form of a string
*/
const Queue = require('./Queue.js')

function generateBinaryNumbers(n){
    let result = []
    let myQueue = new Queue()
    let s1, s2
    myQueue.enqueue("1")
    for (let i = 0; i < n; i++) {

        result.push(myQueue.dequeue())
        s1 = result[i] + "0"
        s2 = result[i] + "1"

        myQueue.enqueue(s1)
        myQueue.enqueue(s2)

    }
    //console.log(myQueue)      // The Queue ends up with more items that what we need but it works for us
    return result;
}

/*
0 = 0
1 = 1
2 = 10
3 = 11
4 = 100
5 = 101
6 = 110
7 = 111
*/

const input = 7
const result = generateBinaryNumbers(input)
console.log(result)