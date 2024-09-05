/*
Given a two-dimensional list of disease codes (ICD codes), for example [[“icd_2”, “icd_3”], [“icd_3”, “icd_4”, “icd_2”], [“icd_5”]] represents that icd_3 relates to icd_2, icd_4 relates to icd_3 and icd_2, etc.
Given such a two-dimensional array, create a function that returns a Map which stores a new key-value pair for each unique ICD code:
The key being the ICD code. The value representing the amount of times an ICD code is associated with a unique code

NOTE: ordering is not required
To verify your function is returning the correct results, log the entries of the Map in an array (see example below)

Example:

Input: [
	["icd_2", "icd_3"],
	["icd_3", "icd_4", "icd_2"],
	["icd_5"],
]

Output: [
	["icd_2", 2]
	["icd_3", 2]
	["icd_4", 2]
	["icd_5", 0]
]

*/
  
// Approach: track unique pairs using a Map/object
// example: {"icd2": { "icd3": true, "icd4": true}}
// Then per each key calculate the size of the inner Map


function uniqueAssociations(param: any ){
let n = param.length
let uniquePairs: { [key: string]: Map<string, boolean> } = {}
for(let i=0;i<n;i++){
    //console.log(param[i])
    if(param[i].length <= 1){
    if(!uniquePairs[param[i] ]){
        uniquePairs[param[i]] = new Map()
    }
    continue
    }
    let m = param[i].length
    let counter = 0
    //console.log('running a new set')
    for(let j=0;j<m;j++){
    //console.log('in set')
    //console.log(param[i][j])
    for(let k=0;k<m;k++){
        if(k == j){
        continue
        }
        //console.log('in innner loop')
        //console.log(param[i][k])
        if(!uniquePairs[param[i][j]]){
        uniquePairs[param[i][j]] = new Map()
        uniquePairs[param[i][j]].set(param[i][k],true)
        }
        else{
        uniquePairs[param[i][j]].set(param[i][k],true)
        }
    }
    }
}
let results: [string, number][] = [];
for(let i in uniquePairs){
    results.push([i, uniquePairs[i].size])
}
return results
}

///*
let icdCodeList: string[][] = [
['icd_2','icd_3'],
['icd_3','icd_4','icd_2'],
['icd_5']
]
//*/
/*
let icdCodeList: string[][] = [
    ['icd_2','icd_3'],
    ['icd_5', 'icd_2'],
]
*/
  
let result = uniqueAssociations(icdCodeList)
console.log(result)


  // time complexity of this sollution is O(n^2)