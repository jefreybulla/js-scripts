const s = "My string";
console.log(s.length);
console.log(s[4]+s[5]);   //tr
console.log(s.repeat(3))        //My stringMy stringMy string

msg = "Are you home?";
console.log(msg.startsWith("A"));   //true
console.log(msg.startsWith("a"));   //false

console.log(msg.endsWith("e?"))      //true
console.log(msg.endsWith("f"))      //false

console.log(msg.includes("you"))    //true
console.log(msg.includes("car"))    //false


console.log('padStart')
console.log('abc'.padStart(5))         // '  abc'
console.log('abc'.padStart(5,'-'))     // '--abc'
console.log('abc'.padStart(10, '123')) // '1231231abc'
console.log('abc'.padStart(1))         // 'abc'

console.log('padEnd')
console.log('abc'.padEnd(5))           // 'abc  '
console.log('abc'.padEnd(5,'-'))       // 'abc--'
console.log('abc'.padEnd(10, '123'))   // 'abc1231231'
console.log('abc'.padEnd(1))           // 'abc'

let s2 = ' space  '
console.log(s2.trim())

// search for substring
const paragraph = "I think Ruth's dog is cuter than your dog!";
const searchTerm = "dog";
const indexOfFirst = paragraph.indexOf(searchTerm);
console.log(indexOfFirst)   // 15