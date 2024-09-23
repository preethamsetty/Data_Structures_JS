const myQueue = new Queue();

myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);

console.log(myQueue.peek()); // Output: 10
console.log(myQueue.dequeue()); // Output: 10
console.log(myQueue.peek()); // Output: 20

//-----------------------------------------------------

function Queue() {
    this.items = [];
  }
  
  Queue.prototype.enqueue = function(element) {
    this.items.push(element);
  };
  
  Queue.prototype.dequeue = function() {
    return this.items.shift();
  };
  
  Queue.prototype.peek = function() {
    return this.items[0];
  };
  
  Queue.prototype.isEmpty = function() {
    return this.items.length === 0;
  };