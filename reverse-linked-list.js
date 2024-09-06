const LinkedList = require('./LinkedList.js')

// this approach creates a new list (extra O(n) spcace)
function reverseList1(param){
    let currentNode = param.head

    newList = new LinkedList()
    while(currentNode != null){
        newList.insertAtHead(currentNode.data)
        currentNode = currentNode.nextElement
    }
    return newList
}

// another approach without creating a new list
// this approach sets the nextElement to rearrange the list
function reverseList2(list) {
    let previousNode = null
    let currentNode = list.getHead()
    let nextNode = null

    //Reversal
    while (currentNode != null) {
        nextNode = currentNode.nextElement
        currentNode.nextElement = previousNode
        previousNode = currentNode
        currentNode = nextNode
    }
    list.setHead(previousNode)
    return list
  }

let list = new LinkedList()
list.insertAtHead(0)
list.insertAtHead(1)
list.insertAtHead(2)
list.insertAtHead(3)
list.insertAtHead(4)
list.insertAtHead(5)
list.insertAtHead(6)
list.insertAtHead(7)
list.insertAtHead(8)
list.insertAtHead(9)
list.printList()

let start = performance.now()
resultList1 = reverseList1(list)
let finish = performance.now()
resultList1.printList()
console.log(`execution time: ${finish-start}`)

start = performance.now()
result2 = reverseList2(list)
finish = performance.now()
result2.printList()
console.log(`execution time: ${finish-start}`)  // similar execution time compared to approach 1

/* 
Both approaches have time complexity of O(n).
Approach 1 needs an extra O(n) of space. 
Approach 2 does not need any extra space making it a better choice overall. 
*/