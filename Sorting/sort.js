// 1. Bubble Sort
// Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the 
// wrong order. This process continues until the list is sorted.


function bubbleSort(arr) {
    let len = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap the elements
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

const array = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(array)); // Output: [11, 12, 22, 25, 34, 64, 90]

// 2. Insertion Sort
// Insertion Sort builds a sorted array one item at a time by comparing each new element to the elements in the 
//sorted part and inserting it into its correct position.

// Time Complexity: O(n²)


function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        // Shift elements of arr[0..i-1] greater than key to one position ahead
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

const array2 = [12, 11, 13, 5, 6];
console.log(insertionSort(array2));  // Output: [5, 6, 11, 12, 13]

// 3. Selection Sort
// Selection Sort repeatedly finds the minimum element from the unsorted portion and swaps it with the first 
//unsorted element, gradually moving through the array.

// Time Complexity: O(n²)


function selectionSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;  // Find the minimum element in the unsorted part
            }
        }
        // Swap the minimum element with the first element in the unsorted part
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

const array3 = [29, 10, 14, 37, 13];
console.log(selectionSort(array3));  // Output: [10, 13, 14, 29, 37]

// 4. Merge Sort
// Merge Sort is a divide-and-conquer algorithm. It divides the array into halves, recursively sorts the halves, 
//and then merges the sorted halves back together.

// Time Complexity: O(n log n)


function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [], leftIndex = 0, rightIndex = 0;

    // Compare elements and merge arrays
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const array4 = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array4));  // Output: [3, 9, 10, 27, 38, 43, 82]

// 5. Quick Sort
// Quick Sort is another divide-and-conquer algorithm. It selects a pivot element and partitions the array so 
//that elements smaller than the pivot go to the left and elements greater go to the right. It then recursively 
//sorts the subarrays.

// Time Complexity: O(n log n) on average, but O(n²) in the worst case.


function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

const array5 = [10, 7, 8, 9, 1, 5];
console.log(quickSort(array5));  // Output: [1, 5, 7, 8, 9, 10]

// Summary of Sorting Algorithms
// Bubble Sort: Compare and swap adjacent elements repeatedly (O(n²)).
// Insertion Sort: Build the sorted array by placing each element in its correct position (O(n²)).
// Selection Sort: Repeatedly find the minimum element from the unsorted part (O(n²)).
// Merge Sort: Divide the array in halves and recursively sort them, then merge (O(n log n)).
// Quick Sort: Partition the array around a pivot and recursively sort (O(n log n), but O(n²) in the worst case).