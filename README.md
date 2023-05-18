# Project: Linked Lists
My code solution for the Odin Project Javascript course.

## Contents
1. node.js
    - `value` attribute: information of the node
    - `nextNode` attribute: points to the next node, null if it's the last node
2. linkedList.js
    - Attributes
        - `head`: points to the first node
    - Methods
        - `append(value)`: adds a new node containing `value` to the end of the list
        - `prepend(value)`: adds a new node containing `value` to the start of the list
        - `size`: returns the total number of nodes in the list
        - `head`: returns the first node in the list
        - `tail`: returns the last node in the list
        - `at(index)`: returns the node at the given `index`
        - `pop`: removes the last element from the list  
        - `contains(value)`: returns true if the passed in value is in the list and otherwise returns false
        - `find(value)`: eturns the index of the node containing value, or null if not found
        - `toString`: represents LinkedList objects as strings; format is `( value ) -> ( value ) -> ( value ) -> null`