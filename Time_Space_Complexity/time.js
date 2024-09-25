// O(1) - Constant Time: The runtime is the same regardless of the input size.
// Example: Accessing an element in an array by index.

let arr = [1, 2, 3, 4, 5];
console.log(arr[2]); // O(1)

//--------------------------------------------------------------------------------

// O(n) - Linear Time: The runtime grows linearly with the size of the input.
// Example: Finding an element in an unsorted array.


function findElement(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) return true;
    }
    return false;
}

findElement([1, 2, 3, 4, 5], 3); // O(n)

//---------------------------------------------------------------------------------

// O(n²) - Quadratic Time: The runtime grows quadratically with the input size.
// Example: A nested loop where each loop iterates over the input.

function printPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j]);
        }
    }
}

printPairs([1, 2, 3]); // O(n²)

//---------------------------------------------------------------------------------

// O(log n) - Logarithmic Time: The runtime grows logarithmically with the input size.
// Example: Binary search on a sorted array.


function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

binarySearch([1, 2, 3, 4, 5, 6, 7], 5); // O(log n)
//------------------------------------------------------------------------------------

// Exponential Time – O(2ⁿ)
// Description: The running time doubles with each additional input. Often seen in algorithms that solve problems using brute force, like the subset sum problem or the naive recursive solution to the Fibonacci sequence.
// Example: Recursive solution for Fibonacci numbers.

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2); // O(2^n)
}

//--------------------------------------------------------------------------------------

// Factorial Time – O(n!)
// Description: The running time grows factorially with the size of the input. Seen in problems like the traveling salesman or generating all permutations.
// Example: Generating all permutations of a string.

function permute(str, l, r) {
    if (l === r) console.log(str);
    else {
        for (let i = l; i <= r; i++) {
            str = swap(str, l, i);
            permute(str, l + 1, r);
            str = swap(str, l, i);
        }
    }
}
//---------------------------------------------------------------------------------------