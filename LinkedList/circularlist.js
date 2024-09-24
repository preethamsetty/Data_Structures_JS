class Node {
    constructor(value) {
        this.value = value;  // Data of the node
        this.next = null;    // Reference to the next node
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;  // First node of the list
        this.tail = null;  // Last node of the list
    }

    // Add a new node to the end of the circular linked list
    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.tail.next = this.head;  // Point the tail to the head to make it circular
        } else {
            this.tail.next = newNode;    // Link the current tail to the new node
            this.tail = newNode;         // Update the tail to the new node
            this.tail.next = this.head;  // Point the new tail to the head
        }
    }

    // Print the circular linked list
    printList() {
        if (!this.head) return;

        let current = this.head;

        do {
            console.log(current.value);  // Print current node value
            current = current.next;      // Move to the next node
        } while (current !== this.head); // Stop when we're back at the head
    }

    // Check if the list contains a value
    contains(value) {
        if (!this.head) return false;

        let current = this.head;

        do {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        } while (current !== this.head);

        return false;
    }

    // Remove a node by value
    remove(value) {
        if (!this.head) return;

        let current = this.head;
        let previous = null;

        // If the node to remove is the head node
        if (this.head.value === value) {
            if (this.head === this.tail) {  // Only one node in the list
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.tail.next = this.head;  // Maintain circularity
            }
            return;
        }

        // Traverse the list to find the node to remove
        do {
            previous = current;
            current = current.next;

            if (current.value === value) {
                previous.next = current.next;

                if (current === this.tail) { // If the tail node is being removed
                    this.tail = previous;
                }
                break;
            }
        } while (current !== this.head);
    }
}

// Example usage:
const circularList = new CircularLinkedList();
circularList.append(10);
circularList.append(20);
circularList.append(30);
circularList.append(40);

console.log("Circular Linked List:");
circularList.printList();
// Output: 10 20 30 40

console.log("Contains 20?", circularList.contains(20)); // Output: true
console.log("Contains 50?", circularList.contains(50)); // Output: false

circularList.remove(30);
console.log("After removing 30:");
circularList.printList();
// Output: 10 20 40
