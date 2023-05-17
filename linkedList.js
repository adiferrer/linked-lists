import Node from './node.js';

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  // adds a new node containing value to the end of the list
  append(value) {
    if (!this.head) {
      this.head = new Node(value);
      return;
    }

    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = new Node(value);
  }

  // adds a new node containing value to the start of the list
  prepend(value) {
    if (!this.head) {
      this.head = new Node(value);
      return;
    }

    const newHead = new Node(value);
    newHead.nextNode = this.head;
    this.head = newHead;
  }

  // returns the total number of nodes in the list
  size() {

  }

  // returns the first node in the list
  head() {
  }

  // returns the last node in the list
  tail() {
  }

  // returns the node at the given index
  at(index) {
  }

  // removes the last element from the list
  pop() {
  }

  // returns true if the passed in value is in the list and otherwise returns false
  contains(value) {
  }

  // returns the index of the node containing value, or null if not found
  find(value) {
  }

  // represents your LinkedList objects as strings,
  // so you can print them out and preview them in the console
  // the format should be: ( value ) -> ( value ) -> ( value ) -> null
  toString() {
    let current = this.head;
    let output = '';
    while (current.nextNode) {
      if (current.value) {
        output += `( ${current.value} ) -> `;
      }

      current = current.nextNode;
    }

    output += `( ${current.value} ) -> null`;
    return output;
  }

  // inserts a new node with the provided value at the given index
  insertAt(value, index) {
  }

  // removes the node at the given index
  removeAt(index) {
  }
}
