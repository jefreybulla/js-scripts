/* Linked List Cycle
*/
const LinkedList = require('./LinkedList.js')

const myLinkedList = new LinkedList()
myLinkedList.insertAtHead(1)
myLinkedList.insertAtHead(2)
myLinkedList.insertAtHead(3)
myLinkedList.insertAtHead(4)
myLinkedList.insertAtHead(5)

const head = myLinkedList.getHead() 

// Make list circular by adding the head as the tails next element
myLinkedList.insertNodeAtTail(head)
//myLinkedList.printList()      // infinite printing if circular list 

const hasCycle = function(head) {
    let memory = new Set
    currentNode = head
    while(currentNode.nextElement != null){
        if(memory.has(currentNode)){
            return true
        }
        memory.add(currentNode)
        currentNode = currentNode.nextElement
    }
    return false
}

console.log(hasCycle(myLinkedList.getHead()))