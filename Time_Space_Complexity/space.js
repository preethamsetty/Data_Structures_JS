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

//-----------------------------------------------------------------------------------

// Logarithmic Space – O(log n)
// Description: The space required grows logarithmically as the input size increases. This is common in divide-and-conquer algorithms like binary search or recursion with log-depth.
// Example: Recursive binary search.

function binarySearch(arr, target, low, high) {
    if (low > high) return -1;
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) return binarySearch(arr, target, mid + 1, high);
    else return binarySearch(arr, target, low, mid - 1);
}

//-----------------------------------------------------------------------------------

// Linearithmic Space – O(n log n)
// Description: The space required grows slightly faster than linear due to additional structures or recursion. This is common in sorting algorithms like merge sort.
// Example: Merge Sort.

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

//---------------------------------------------------------------

// Quadratic Space – O(n²)
// Description: The space required grows quadratically with the input size. This is common in algorithms that use two-dimensional matrices or nested data structures.
// Example: Storing a two-dimensional matrix or table.

function createMatrix(n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix[i] = [];
        for (let j = 0; j < n; j++) {
            matrix[i][j] = i * j;
        }
    }
    return matrix;
}

//--------------------------------------------------------------------------------------------

// Exponential Space – O(2ⁿ)
// Description: The space required doubles with each additional input. This is common in algorithms that generate all subsets or combinations, such as solving certain recursive problems.
// Example: Recursive generation of subsets.

function generateSubsets(set, index = 0, current = []) {
    if (index === set.length) {
        console.log(current);
        return;
    }
    generateSubsets(set, index + 1, current);
    generateSubsets(set, index + 1, [...current, set[index]]);
}

//----------------------------------------------------------------------------

// Factorial Space – O(n!)
// Description: The space required grows factorially with the input size, often in algorithms that generate all possible permutations.
// Example: Recursive generation of permutations.

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
//------------------------------------------------------------------------------