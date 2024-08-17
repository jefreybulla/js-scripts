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
