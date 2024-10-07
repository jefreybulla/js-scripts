const num = 1.3456

// round to nearest integer
const r1 = Math.round(num)
console.log(r1) //1

// round to 2 decimals
const r2 = Math.round(num * 100) / 100
console.log(r2) //1.35

// round to 3 decimals
const r3 = Math.round(num * 1000) / 1000
console.log(r3) //1.346
 