const numbers = [1, 2, 3, 4];

// Add elements
numbers.push(5);
console.log(numbers); // Output: [1, 2, 3, 4, 5]

numbers.unshift(6);
console.log(numbers); // Output: [ 6, 1, 2, 3, 4, 5 ]

// Remove elements
numbers.pop();
console.log(numbers);  // Output: [ 6, 1, 2, 3, 4 ]

numbers.shift();
console.log(numbers); // Output: [1, 2, 3, 4]

// Access elements
console.log(numbers[1]); // Output: 2

// Create a new array
const slicedNumbers = numbers.slice(1, 3);
console.log(slicedNumbers); // Output: [2, 3]