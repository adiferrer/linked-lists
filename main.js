import LinkedList from './linkedList.js';

const list = new LinkedList();
list.append(1);
list.append(3);
list.append(8);
console.log(`1. Append numbers: ${list.toString()}`);
list.prepend(5);
console.log(`2. Prepend a number: ${list.toString()}`);
console.log(`3. Current Size: ${list.size()}`);
list.pop();
console.log(`4. Pop a number: ${list.toString()}`);
console.log(`5. Current head node: ${list.head()}`);
console.log(`6. Current tail node: ${list.tail()}`);
console.log(`7. Node at index 1: ${list.at(1)}`);
console.log(`8. Does the list contain 3? ${list.contains(3)}`);
console.log(`9. Find index of 3: ${list.find(3)}`);
