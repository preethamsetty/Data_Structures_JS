// O(1) - Constant Space: The algorithm uses a fixed amount of memory regardless of the input size.
// Example: A simple function that performs calculations without storing data.


function sum(a, b) {
    return a + b;  // O(1) space complexity
}

//-------------------------------------------------------------------------------

// O(n) - Linear Space: The space used grows linearly with the input size.
// Example: Storing input in an additional array.

function doubleArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * 2);
    }
    return result;  // O(n) space complexity
}

doubleArray([1, 2, 3, 4]); // O(n)