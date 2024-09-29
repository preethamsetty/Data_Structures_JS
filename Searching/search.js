// Searching Algorithms in JavaScript
// Searching algorithms are designed to find the position of a target element in a collection of data. 
//Here are a few common searching algorithms with JavaScript implementations:

// 1. Linear Search
// Linear Search sequentially checks each element of the array until the target value is found or the array ends. 
//This algorithm is simple but inefficient for large datasets.

// Time Complexity: O(n)


function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index of the target element
        }
    }
    return -1; // Return -1 if the target is not found
}

const array1 = [10, 20, 30, 40, 50];
console.log(linearSearch(array1, 30));  // Output: 2
console.log(linearSearch(array1, 60));  // Output: -1

// 2. Binary Search
// Binary Search is more efficient but works only on sorted arrays. 
//It divides the array into halves and compares the middle element with the target. Depending on the comparison, 
//it eliminates half of the array and continues the search in the remaining half.

// Time Complexity: O(log n)


function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {
            return mid;  // Target found
        } else if (arr[mid] < target) {
            start = mid + 1;  // Search in the right half
        } else {
            end = mid - 1;  // Search in the left half
        }
    }

    return -1;  // Return -1 if the target is not found
}

const array2 = [2, 3, 4, 10, 40];
console.log(binarySearch(array2, 10));  // Output: 3
console.log(binarySearch(array2, 5));   // Output: -1