import Node from './node.js';

export default class LinkedList {
  constructor() {
    this.headNode = null;
  }

  // adds a new node containing value to the end of the list
  append(value) {
    if (!this.headNode) {
      this.headNode = new Node(value);
      return;
    }

    let current = this.headNode;
    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = new Node(value);
  }

  // adds a new node containing value to the start of the list
  prepend(value) {
    if (!this.headNode) {
      this.headNode = new Node(value);
      return;
    }

    const newHead = new Node(value);
    newHead.nextNode = this.headNode;
    this.headNode = newHead;
  }

  // returns the total number of nodes in the list
  size() {
    if (!this.headNode) return 0;
    let total = 1;
    let current = this.headNode;
    while (current.nextNode) {
      total++;
      current = current.nextNode;
    }
    return total;
  }

  // returns the first node in the list
  head() {
    return this.headNode.value;
  }

  // returns the last node in the list
  tail() {
    if (!this.headNode) return null;
    let current = this.headNode;
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current.value;
  }

  // returns the node at the given index
  at(index) {
    if (!this.headNode) return null;
    if (index === 0) return this.headNode.value;

    let current = this.headNode;
    let currentIndex = 0;
    while (current.nextNode) {
      currentIndex++;
      if (currentIndex === index) {
        return current.nextNode.value;
      }
      current = current.nextNode;
    }
    return null;
  }

  // removes the last element from the list
  pop() {
    if (this.headNode === null) return;
    if (this.headNode.nextNode === null) {
      this.headNode = null;
      return;
    }

    let current = this.headNode;
    while (current.nextNode) {
      if (current.nextNode.nextNode === null) {
        current.nextNode = null;
        break;
      }
      current = current.nextNode;
    }
  }

  // returns true if the passed in value is in the list and otherwise returns false
  contains(value) {
    let current = this.headNode;
    while (current.nextNode) {
      if (current.value === value) return true;
      current = current.nextNode;
    }

    if (current.value === value) return true;
    return false;
  }

  // returns the index of the node containing value, or null if not found
  find(value) {
    if (!this.headNode) return null;
    if (this.headNode.value === value) return 0;

    let current = this.headNode;
    let currentIndex = 0;
    while (current.nextNode) {
      currentIndex++;
      if (current.nextNode.value === value) {
        return currentIndex;
      }
      current = current.nextNode;
    }
    return null;
  }

  // represents your LinkedList objects as strings,
  // so you can print them out and preview them in the console
  // the format should be: ( value ) -> ( value ) -> ( value ) -> null
  toString() {
    if (!this.headNode) return 'null';

    let current = this.headNode;
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
  insertAt(value, index) {}

  // removes the node at the given index
  removeAt(index) {}
}
