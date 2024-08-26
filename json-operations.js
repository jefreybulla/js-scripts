

let input = '{"name":"Bob", "age":20, "address":null, "serve_military":false, "practice_sports":["soccer", "golf"]}'

let inputObject = JSON.parse(input)
console.log(inputObject)

console.log('back to json ->')
console.log(JSON.stringify(inputObject))


let test = {
    name: 'Jef',
    age: 21
}

console.log(test)