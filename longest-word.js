// find the longest word. Special characters don't count

function longestWord(sen) { 
    let sArray = sen.split(' ')
    //console.log(sArray)
    let longestWord = ''
    for(let i of sArray){
      iModified = i.replace(/[^a-zA-Z-z0-9 ]/g, "")
      //console.log(iModified)
      n = iModified.length
      if (n > longestWord.length){
        longestWord = iModified
      }
    }
    return longestWord
    //if(/[A-Za]/i.test('f'))
      
    //return 'end'; 
  
  }
     

let input = "hi world"
//let input = "hi$$%% world"
  // keep this function call here 
console.log(longestWord(input))


