//single linked list

class Node {
    constructor(value) {
        this.value = value;  // Data stored in the node
        this.next = null;    // Pointer to the next node
    }
}

class LinkedList {
    constructor() {
        this.head = null;   // First node in the list (head)
        this.size = 0;      // Keep track of the list size
    }

    // Add a new node at the end of the list
    append(value) {
        const newNode = new Node(value);

        if (!this.head) {   // If the list is empty, make the new node the head
            this.head = newNode;
        } else {
            let current = this.head;

            // Traverse to the last node
            while (current.next) {
                current = current.next;
            }
            
            // Add the new node at the end
            current.next = newNode;
        }

        this.size++;
    }

    // Add a new node at the beginning of the list
    prepend(value) {
        const newNode = new Node(value);

        // Point the new node's next to the current head
        newNode.next = this.head;

        // Make the new node the head
        this.head = newNode;

        this.size++;
    }

    // Remove a node by value
    remove(value) {
        if (!this.head) return;  // If list is empty, return

        if (this.head.value === value) {
            this.head = this.head.next;  // If the head is to be removed
            this.size--;
            return;
        }

        let current = this.head;
        let previous = null;

        // Traverse to find the node to remove
        while (current && current.value !== value) {
            previous = current;
            current = current.next;
        }

        if (current) {   // If the node was found
            previous.next = current.next;
            this.size--;
        }
    }

    // Print the linked list
    printList() {
        let current = this.head;

        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

    // Check if the list is empty
    isEmpty() {
        return this.size === 0;
    }

    // Get the size of the list
    getSize() {
        return this.size;
    }
}

// Example usage:
const list = new LinkedList();
list.append(10);  // Adding elements
list.append(20);
list.prepend(5);  // Adding element to the beginning
list.printList();  // Output: 5, 10, 20

list.remove(10);  // Removing an element
list.printList();  // Output: 5, 20

console.log("Size of list:", list.getSize());  // Output: 2

//--------------------------------------------------------------

//Doubly linked list

class DoublyNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;   // New pointer to the previous node
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;   // Tail pointer for efficient tail operations
        this.size = 0;
    }

    // Add node to the end of the list
    append(value) {
        const newNode = new DoublyNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.size++;
    }

    // Remove a node from the list
    remove(value) {
        if (!this.head) return;

        let current = this.head;

        while (current) {
            if (current.value === value) {
                if (current.prev) {
                    current.prev.next = current.next;
                } else {
                    this.head = current.next;  // Removing the head
                }

                if (current.next) {
                    current.next.prev = current.prev;
                } else {
                    this.tail = current.prev;  // Removing the tail
                }

                this.size--;
                return;
            }

            current = current.next;
        }
    }

    // Print the list from head to tail
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

    // Print the list from tail to head
    printReverse() {
        let current = this.tail;
        while (current) {
            console.log(current.value);
            current = current.prev;
        }
    }
}

// Example usage:
const dList = new DoublyLinkedList();
dList.append(10);
dList.append(20);
dList.append(30);
dList.printList();    // Output: 10 20 30
dList.printReverse(); // Output: 30 20 10


