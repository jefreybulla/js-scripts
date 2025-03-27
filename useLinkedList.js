/* Use LinkedList class to create a linked list
*/


const LinkedList = require('./LinkedList.js')


const myLinkedList = new LinkedList()
console.log(myLinkedList)
console.log(`isEmpty: ${myLinkedList.isEmpty()}`)           // true

// adding nodes no head of linked list
myLinkedList.insertAtHead(1)
console.log(myLinkedList)
console.log(`isEmpty: ${myLinkedList.isEmpty()}`)           // false
myLinkedList.insertAtHead(2)
myLinkedList.insertAtHead(3)
myLinkedList.insertAtHead(4)
myLinkedList.insertAtHead(5)

// printing list
myLinkedList.printList()            // 5 -> 4 -> 3 -> 2 -> 1 -> null

// get head 
const head = myLinkedList.getHead()
console.log('list head ->')
console.log(head)

// insert element at tail
myLinkedList.insertAtTail(0)
myLinkedList.printList()            // 5 -> 4 -> 3 -> 2 -> 1 -> 0 -> null

// Search for a node in linked list
console.log('Does 3 exist in list?')
const myNode = myLinkedList.search(3)
console.log(myNode)

// I can use setHead to remove any number of initial Nodes from the beginning of the list
myLinkedList.setHead(myNode)
myLinkedList.printList()            // 3 -> 2 -> 1 -> 0 -> null


myLinkedList.insertAtHead(4)
myLinkedList.insertAtHead(5)
myLinkedList.printList()

// Insert new element after 4
console.log('insert at value ->')
myLinkedList.insertAtValue(3, 2.5)
myLinkedList.printList()

