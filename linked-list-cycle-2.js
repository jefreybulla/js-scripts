/* Linked List Cycle usin Leetcode LinkedList

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.

Return true if there is a cycle in the linked list. Otherwise, return false.

Constraints:
The number of the nodes in the list is in the range [0, 104].
-10^5 <= Node.val <= 10^5
pos is -1 or a valid index in the linked-list.

Follow up: Can you solve it using O(1) (i.e. constant) memory?
*/
const LinkedList = require('./LeetcodeLinkedList.js')

const list = new LinkedList()
list.addAtHead(1)
list.addAtHead(2)
list.addAtHead(3)
list.addAtHead(4)
list.addAtHead(5)

const head = list.head
console.log(head)

// Make list circular by adding the head as the tail's next element
list.addNodeAtTail(head)

const hasCycle = function(head) {
    if (!head || !head.next) return false;
    let memory = new Set
    currentNode = head
    while(currentNode.next != null){
        if(memory.has(currentNode)){
            return true
        }
        memory.add(currentNode)
        currentNode = currentNode.next
    }
    return false
}

console.log(hasCycle(list.head))
// time complexity: O(n)
// space complexity: O(n)


// Approach 2: slow and fast runner

var hasCycle2 = function(head) {
    if (!head || !head.next) return false;

    let slow = head;
    let fast = head.next;

    while (slow !== fast) {
        if (!fast || !fast.next) return false; // Reached end — no cycle
        slow = slow.next;
        fast = fast.next.next;
    }

    return true; // slow === fast means cycle detected
};

console.log(hasCycle2(list.head))
// time complexity: O(n)
// space complexity: O(1)