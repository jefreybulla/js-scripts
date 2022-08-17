// Make object properties immutable

let obj = {'color': 'blue'}
console.log(obj.color)  // blue

obj.color = 'red'
console.log(obj.color)  // red

Object.freeze(obj)
obj.color = 'yellow'
console.log(obj.color)  // red

obj.size = 'M'
console.log(obj.size)  // undefined

// Object.freeze only makes immutable the properties of the boject. If a property is an object, those can be changed

let obj2 = {
  'dimensions': {
    'height': 20,
    'length': 4
  }
}

obj2.dimensions.height = 25
console.log(obj2.dimensions.height) // 25
Object.freeze(obj2)

// freeze does not affect height mutability
obj2.dimensions.height = 30
console.log(obj2.dimensions.height) // 30


// To make the whole object immutable use recursion

function deepFreeze(obj){
  const propNames = Object.getOwnPropertyNames(obj)

  for(const name of propNames){
    const value = obj[name]
    if(value && typeof value === 'object'){
      deepFreeze(value)
    }
  }
  return Object.freeze(obj)
}

let obj3 = {
  'dimensions': {
    'height': 20,
    'length': 4
  }
}

obj3.dimensions.length = 6
console.log(obj3.dimensions.length) // 6

deepFreeze(obj3)
obj3.dimensions.length = 8
console.log(obj3.dimensions.length) // 6