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
        - `toString`: represents LinkedList objects as strings; format is `( value ) -> ( value ) -> ( value ) -> null`