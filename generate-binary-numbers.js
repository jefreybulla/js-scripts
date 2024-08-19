/*
Generate binary numbers from 1 to n in the form of a string
*/
const Queue = require('./Queue.js');

function generateBinaryNumbers(n){
    let result = [];
    let myQueue = new Queue();
    let s1, s2;
    myQueue.enqueue("1");
    for (let i = 0; i < n; i++) {

        result.push(myQueue.dequeue());     // 1    // 10
        s1 = result[i] + "0";               // 10   // 100
        s2 = result[i] + "1";               // 11   // 101

        myQueue.enqueue(s1);
        myQueue.enqueue(s2);            // 10, 11   // 11,100,101

    }
    //console.log(myQueue)
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

const input = 7    // ["1","10","11"]
const result = generateBinaryNumbers(input)
console.log(result)