// const myStack = new Stack();

// myStack.push(10);
// myStack.push(20);
// myStack.push(30);

// console.log(myStack.peek()); // Output: 30
// console.log(myStack.pop()); // Output: 30
// console.log(myStack.peek()); // Output: 20

// //-------------------------------------------------

class Stack {
    constructor() {
        this.items = [];
    }

    // Add an element to the top of the stack
    push(element) {
        this.items.push(element);
    }

    // Remove and return the top element of the stack
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    // View the top element of the stack without removing it
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the stack
    size() {
        return this.items.length;
    }

    // Clear the stack
    clear() {
        this.items = [];
    }

    // Display the elements in the stack
    display() {
        console.log(this.items.join(" "));
    }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log("Top element:", stack.peek()); // Top element: 30
stack.display(); // 10 20 30
console.log("Popped element:", stack.pop()); // Popped element: 30
stack.display(); // 10 20
console.log("Stack size:", stack.size()); // Stack size: 2
