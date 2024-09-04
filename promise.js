// The timing of a Promise return depends on the way the Promise is called
// When using wait the promise is resolved before the next line is executed.
// when using then the code below will continue to execute 

Promise.resolve().then(() => {console.log('a')})
console.log('b')

async function printNumber22(){
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log(22)
}

async function printNumber11(){
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log(11)
}

async function callOtherFunction1(){
    await printNumber22()
    console.log(23)
}

function callOtherFunction2(){
    printNumber11().then(() => {console.log(12)})
    console.log(13)
}

callOtherFunction1()
console.log(0)

console.log("----")

callOtherFunction2()
console.log(10)
console.log(10)
console.log(10)


