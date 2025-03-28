"use strict"

const Node = require('./LeetcodeNode.js');

var MyLinkedList = function() {
    this.head = null;
    this.length = 0;  
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.length) return -1;

    let current = this.head;
    for (let i = 0; i < index; i++) {
        current = current.next;
    }
    return current.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const newNode = new Node(val);
    if (!this.head) {
        this.head = newNode;
    } else {
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
    this.length++;
};

/** 
 * @param {Node} newNode 
 * @return {void}
 */
MyLinkedList.prototype.addNodeAtTail = function(newNode) {
    // Check if list is empty
    if (!this.head) {
        this.head = newNode;
    } else {
        let current = this.head;
        // find last element
        while (current.next) {
            current = current.next;
        }
        // add next to last element
        current.next = newNode;
    }
    this.length++;
}

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index < 0 || index > this.length) return;

    if (index === 0) {
        this.addAtHead(val);
        return;
    }

    const newNode = new Node(val);
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
        current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
    this.length++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.length) return;

    if (index === 0) {
        this.head = this.head.next;
    } else {
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        current.next = current.next.next;
    }

    this.length--;  
};

module.exports = MyLinkedList;

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */