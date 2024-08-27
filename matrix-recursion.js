/*

1.  1.  1.  1.  1
1   2.  3.  4.  5
1   3.  6   10. 15
1   4.  10. 20. 35
1   5.  15. 35. 70

(2, 2) => 6

*/

//        (2,2)
//   (2,1)  +   (1,2) 
//(2,0)+(1,1)  (1,1)+(0,2)


const myFunction = function(a,b){
     console.log(`a: ${a} b: ${b}`)
    if (a <=0 || b <=0){
        return 1
    }    
    return myFunction(a, b-1) + myFunction(a-1, b)
}

let a = 1
let b = 4      // output: 5
let result = myFunction(a,b)
console.log(result)