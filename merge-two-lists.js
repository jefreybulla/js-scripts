/*
You are given the heads of two sorted lists list1 and list2.

Merge the two lists into one sorted list.

Examples:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
*/


/*
Approach: 
1. Select head of new list by checking the min between heads
2. Createa a new list with the head from previous step
3. Use the list as a stack: store the element needed and remove from source:
With a while loop to check first elements of inputs. Store the min, and remove elements from input

*/

const mergeTwoLists = function(list1, list2) {
    let list1Copy = structuredClone(list1)
    let list2Copy = structuredClone(list2)
    let resultList = []
    while(list1Copy.length > 0 || list2Copy.length > 0){
        if(list1Copy[0] <= list2Copy[0]){
            resultList.push(list1Copy.shift())
        }
        else{
            resultList.push(list2Copy.shift())
        }
    }
    return resultList
}

list1 = [1,2,4]; list2 = [1,3,4]        // [1,1,2,3,4,4]
result = mergeTwoLists(list1, list2)
console.log(result)

// Approach 2: recursion - WIP