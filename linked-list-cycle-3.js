/* Linked List Cycle 3
Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.

Do not modify the linked list.

*/


const LinkedList = require('./LeetcodeLinkedList.js')

const list = new LinkedList()
list.addAtHead(1)
list.addAtHead(2)
list.addAtHead(3)
list.addAtHead(4)
list.addAtHead(5)

const head = list.head
//console.log(head)

// Make list circular by adding the head as the tail's next element
list.addNodeAtTail(head)

const detectCycle = function(head) {
    if (!head || !head.next) return null;
    let memory = new Set
    currentNode = head
    while(currentNode.next != null){
        if(memory.has(currentNode)){
            return currentNode
        }
        memory.add(currentNode)
        currentNode = currentNode.next
    }
    return null
};

console.log('result ->')
console.log(detectCycle(head))
// time complexity: O(n)
// space complexity: O(n)


// Approach 2: use slow and fast pointer
var detectCycle2 = function(head) {
    if (!head || !head.next) return null;

    let slow = head;
    let fast = head;

    // Step 1: Detect if a cycle exists using slow and fast pointers
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            // Step 2: Find the start of the cycle
            let entry = head;
            while (entry !== slow) {
                entry = entry.next;
                slow = slow.next;
            }
            return entry;
        }
    }

    // No cycle
    return null;
};

console.log(detectCycle2(head))
// time complexity O(n)
// space complexity O(1)