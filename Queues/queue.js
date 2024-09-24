// const myQueue = new Queue();

// myQueue.enqueue(10);
// myQueue.enqueue(20);
// myQueue.enqueue(30);

// console.log(myQueue.peek()); // Output: 10
// console.log(myQueue.dequeue()); // Output: 10
// console.log(myQueue.peek()); // Output: 20


  //-----------------------------------------------

  class Queue {
    constructor() {
        this.items = [];
    }

    // Add an element to the end of the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Remove and return the front element of the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift(); // Removes the first element
    }

    // View the front element of the queue without removing it
    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0]; // Return the first element
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the queue
    size() {
        return this.items.length;
    }

    // Clear the queue
    clear() {
        this.items = [];
    }

    // Display the elements in the queue
    display() {
        console.log(this.items.join(" "));
    }
}

// Example usage:
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log("Front element:", queue.front()); // Front element: 10
queue.display(); // 10 20 30
console.log("Dequeued element:", queue.dequeue()); // Dequeued element: 10
queue.display(); // 20 30
console.log("Queue size:", queue.size()); // Queue size: 2
