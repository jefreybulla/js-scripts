// Callback is a function used as an argument when calling another function

console.log(0)

const callback = () => {
    console.log(1)
}

// using a callback function that was previously declared
setTimeout(callback, 1000)

// defining the callback in the argument itself
setTimeout(() => {
    console.log(2)
},2000)