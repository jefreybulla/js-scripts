"use strict";
/* Linked lists are time efficent compared to Arrays for
- removal of any element that is not the last element
- insertion of elements that is not the last element

Arrays are more efficient at adding or removing the last element
*/

const Node = require('./Node.js');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  //Insertion At Head
  insertAtHead(newData) {
    let tempNode = new Node(newData);
    tempNode.nextElement = this.head;
    this.head = tempNode;
    return this; //returning the updated list
  }

  isEmpty() {
    return (this.head == null);
  }

  //function to print the linked list
  printList() {
    if (this.isEmpty()) {
      console.log("Empty List");
      return false;
    } else {
      let currentNode = this.head;
      while (currentNode != null) {
        process.stdout.write(String(currentNode.data));
        process.stdout.write(" -> ");
        currentNode = currentNode.nextElement;
      }
      console.log("null");
      return true;
    }
  }

  getHead() {
    return this.head;
  }
  // time complexity O(1) is efficent at removing any number of items from the beggining of the list. 
  // For comparison Array.shift has time complexity O(n)!
  setHead(newHead) {            
    this.head = newHead;
    return this;
  }

  getListStr() {
    if (this.isEmpty()) {
      console.log("Empty List");
      return "null";
    } else {
      let st = "";
      let temp = this.head
      while (temp != null) {
        st += String(temp.data);
        st += " -> ";
        temp = temp.nextElement;
      }
      st += "null";
      return st;
    }
  }

  insertAtTail(newData) {     // O (n)
    //Creating a new Node with data as newData
    let node = new Node(newData);

    //check for case when list is empty
    if (this.isEmpty()) {
      //Needs to Insert the new node at Head
      this.head = node;
      return this;
    }

    //Start from head
    let currentNode = this.head;

    //Iterate to the last element
    while (currentNode.nextElement != null) {
      currentNode = currentNode.nextElement;
    }

    //Make new node the nextElement of last node of list
    currentNode.nextElement = node;
    return this;
  }

  search(value) {               // time complexity: O(n)
    //Start from the first element
    let currentNode = this.head;

    //Traverse the list until you find the value or reach the end
    while (currentNode != null) {
      if (currentNode.data == value) {
        //return true; //value found
        return currentNode        // return node that has queried value
      }
      currentNode = currentNode.nextElement
    }
    return false; //value not found
  }
  // O(n) since we need to search
  // O(1) for insertion. Efficent compared to Array.splice()
  insertAtValue(value, nextValue){
    let currentNode = this.search(value)
    let newNode = new Node(nextValue)

    // Check if value exists in list
    if(!currentNode){
      return false
    }
    newNode.nextElement = currentNode.nextElement
    currentNode.nextElement = newNode
    return this
  }

  deleteAtHead() {                // O(1) efficent compared to Array.shift O(n)
    //if list is empty, do nothing
    if (this.isEmpty()) {
      return this;
    }
    //Get the head and first element of the list
    let firstElement = this.head;

    //If list is not empty, link head to the nextElement of firstElement
    this.head = firstElement.nextElement;

    return this;
  }

  // O(n) since we need to search
  // O(1) for element removal. Efficent compared to Arra.splice() that is O(n)
  deleteVal(value) {              
    let deleted = null; //True or False

    //if list is empty return false
    if (this.isEmpty()) {
      return false;
    }

    //else get pointer to head
    let currentNode = this.head;
    // if first node's is the node to be deleted, delete it and return true
    if (currentNode.data == value) {
      this.head = currentNode.nextElement;
      return true;
    }

    // else traverse the list
    while (currentNode.nextElement != null) {
      // if a node whose next node has the value as data, is found, delete it from the list and return true
      if (currentNode.nextElement.data == value) {
        currentNode.nextElement = currentNode.nextElement.nextElement;
        return true;
      }
      currentNode = currentNode.nextElement;
    }
    //else node was not found, return false
    deleted = false;
    return deleted;
  }

  deleteAtTail() {            // O(n)   inefficient compared to Array.push that is O(1)
    // check for the case when linked list is empty
    if (this.isEmpty()) {
      return this;
    }
    //if linked list is not empty, get the pointer to first node
    let firstNode = this.head;
    //check for the corner case when linked list has only one element
    if (firstNode.nextElement == null) {
      this.deleteAtHead();
      return this;
    }
    //otherwise traverse to reach second last node
    while (firstNode.nextElement.nextElement != null) {
      firstNode = firstNode.nextElement;
    }
    //since you have reached second last node, just update its nextElement pointer to point at null, skipping the last node
    firstNode.nextElement = null;
    return this;
  }
}