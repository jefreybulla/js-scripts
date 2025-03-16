/*
Given the head of a linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.
*/

const LinkedList = require('./LinkedList.js')

let list = new LinkedList()
list.insertAtHead(5)
list.insertAtHead(4)
list.insertAtHead(3)
list.insertAtHead(2)
list.insertAtHead(1)

list.printList()

console.log('Head node:')
console.log(list.getHead())



var middleNode = function(head) {
    let listLength = 1
    let listCopy = []
    let currentNode = head
    listCopy.push(currentNode)
    while(currentNode.nextElement != null){
        listLength++
        currentNode = currentNode.nextElement
        listCopy.push(currentNode)
    }
    return listCopy[Math.floor(listLength/2)]
}

let result = middleNode(list.head)
console.log(result)
// Time complexity: O(n)
// Space complexity: O(n)