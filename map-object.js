/*
Map object is similat to using to the generic Object type, but has some advantages:
- You can easiliy calculate its size
- Better performance for frequent addition and removals
- iterable with 'for(let [key, value] of myMap)'
*/

'use strict'
const groceryPrices = new Map()

// add elements
groceryPrices.set('apple',1)
groceryPrices.set('banana', 2)
groceryPrices.set('avocado', 3)
console.log(groceryPrices)
console.log(groceryPrices.size)

// remove an element
groceryPrices.delete('avocado')
console.log(groceryPrices)

 // remove all elements
groceryPrices.clear()
console.log(groceryPrices)

groceryPrices.set('apple',1)
groceryPrices.set('banana', 2)
groceryPrices.set('avocado', 3)

// read element
console.log(groceryPrices.get('banana'))    // 2

// check if key exist in Map
console.log(groceryPrices.has('apple')) //  true
console.log(groceryPrices.has('strawberry')) //  false

// loop oever keys and values
for(let [key, value] of groceryPrices){
  console.log(`key: ${key} - value: ${value}`)
}

// loop to use key only
for(let [key] of groceryPrices){
  console.log(`key ${key}`)
}

// loop to use value only
for(let [key, value] of groceryPrices){
  console.log(`value: ${value}`)
}

