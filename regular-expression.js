// Regular expression literal
// use when pattern remains contant. Regular expression is compiled when the script is loaded so this approach can improve performance
const re = /ab+c/

// Create regular expression calling the constructor 
// Use when pattern variable. Regular expression is compiled at runtime
// const re2 = new RegExp('ab+c')

const test = re.test('123aabac')
console.log(test) // false
const test2 = re.test('123abbc')
console.log(test2) // true

let value = 'A'
console.log('is upper case?',(/^[A-Z]*$/).test(value))
console.log('is lower case?',(/^[a-z]*$/).test(value))
console.log('is a digit?',(/^[0-9]*$/).test(value))

// Example: Match UUIDs https://en.wikipedia.org/wiki/Universally_unique_identifier
const re3 = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i

const test3  = re3.test('7b99169c-1ce0-4f74-8118-fdb99568a9c8')
console.log(test3) // true
const test4  = re3.test('49fe105c-e48c-396e-8709-faf0d4617524')
console.log(test4)  // true
const test5  = re3.test('32fbaa14-96ab')
console.log(test5)  // false
