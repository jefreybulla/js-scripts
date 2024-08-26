
/*
The element of an array correspond to (child,parent)
Check that pairs can build a valid binary tree
*/


function TreeConstructor(strArr) { 
    // approach: check if a parent has more than two childs
    // and check if a child is fathered more than once
    // code goes here  
  
    //console.log(strArr[0][3])
    let parenhoodOcurrences = {}
    let childOcurrences = {}
    let parent
    let child
    let pair
    for(item of strArr){
      pair = item.slice(1,4).split(',')
      child = pair[0]
      parent = pair[1]
      //console.log(child)
      if(parenhoodOcurrences[parent] == undefined){
        parenhoodOcurrences[parent] = 1
      }
      else{
        parenhoodOcurrences[parent] += 1
      }
      if(childOcurrences[child] == undefined){
        childOcurrences[child] = 1
      }
      else{
        childOcurrences[child] += 1
      }
    }
    //console.log(parenhoodOcurrences)
    //console.log(childOcurrences)
  
    for(key in parenhoodOcurrences){
      if(parenhoodOcurrences[key] > 2){
        return false
      }
    }
    for(key in childOcurrences){
      if(childOcurrences[key] > 1){
        return false
      }
    }
  
    return true
  
  }



// input = ["(1,2)", "(2,4)", "(7,2)"]  // true
input = ["(1,2)", "(3,2)", "(7,2)"]     // false
result = TreeConstructor(input)

console.log(result)