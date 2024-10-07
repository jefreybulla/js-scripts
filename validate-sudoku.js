/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

Examples: 

Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

*/


/*
Approach: loop over each element to:
- Check all rows and track uniques
- Check all columns and track uniques
- Check all sub-box and track uniques
*/

function validateSudoku(board){
    let conlumnMemory = [{},{},{},{},{},{},{},{},{}]
    let subBoxMemory1 = {}
    let subBoxMemory2 = {}
    let subBoxMemory3 = {}
    let subBoxMemory4 = {}
    let subBoxMemory5 = {}
    let subBoxMemory6 = {}
    let subBoxMemory7 = {}
    let subBoxMemory8 = {}
    let subBoxMemory9 = {}

    for(let i=0; i<=8;i++){
        let rowMemory = {}
        for(let j=0; j<=8;j++){
            const element = board[i][j]
            console.log(element)
            if(element == '.'){
                continue
            }
            const elementValue = Number(element)
            if(elementValue == NaN ){
                return false
            }
            if(elementValue < 1 || elementValue > 9 ){
                return false
            }
            // check rows
            if(rowMemory[elementValue]){
                return false
            }
            else{
                rowMemory[elementValue] = 1
            }

            // check columns
            if(conlumnMemory[j][elementValue]){
                return false
            }
            else{
                conlumnMemory[j][elementValue] = 1
            }

            // check subBoxes
            if(i <= 2 && j <= 2){
                if(subBoxMemory1[elementValue]){
                    return false
                }
                else{
                    subBoxMemory1[elementValue] = 1
                }         
            }
            if(i <= 2 && j>=3 && j<=5){
                if(subBoxMemory2[elementValue]){
                    return false
                }
                else{
                    subBoxMemory2[elementValue] = 1
                }         
            }
            if(i <= 2 && j>=6 && j<=8){
                if(subBoxMemory3[elementValue]){
                    return false
                }
                else{
                    subBoxMemory3[elementValue] = 1
                }         
            }
            if(i >= 3 && i<=5 && j<=2){
                if(subBoxMemory4[elementValue]){
                    return false
                }
                else{
                    subBoxMemory4[elementValue] = 1
                }         
            }
            if(i >= 3 && i<=5 && j>=3 && j<=5){
                if(subBoxMemory5[elementValue]){
                    return false
                }
                else{
                    subBoxMemory5[elementValue] = 1
                }         
            }
            if(i >= 3 && i<=5 && j>=6 && j<=8){
                if(subBoxMemory6[elementValue]){
                    return false
                }
                else{
                    subBoxMemory6[elementValue] = 1
                }         
            }
            if(i >= 6 && i<=8 && j<=2){
                if(subBoxMemory7[elementValue]){
                    return false
                }
                else{
                    subBoxMemory7[elementValue] = 1
                }         
            }
            if(i >= 6 && i<=8 && j>=3 && j<=5){
                if(subBoxMemory8[elementValue]){
                    return false
                }
                else{
                    subBoxMemory8[elementValue] = 1
                }         
            }
            if(i >= 6 && i<=8 && j>=6 && j<=8){
                if(subBoxMemory9[elementValue]){
                    return false
                }
                else{
                    subBoxMemory9[elementValue] = 1
                }       
            }
        }
        
    }
    return true
}

//const board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]         // true

const board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]         // false


result = validateSudoku(board)
console.log(result)
// time complexity O(n^2)