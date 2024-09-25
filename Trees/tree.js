// Example of a Tree Node Structure in JavaScript:

// class TreeNode {
//     constructor(value) {
//         this.value = value;
//         this.left = null; // For Binary Tree
//         this.right = null; // For Binary Tree
//         this.children = []; // For N-ary Trees
//     }
// }

//--------------------------------------------------------------
class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Create root node
let root = new BinaryTreeNode(10);

// Adding children
root.left = new BinaryTreeNode(5);
root.right = new BinaryTreeNode(15);

// Adding more children
root.left.left = new BinaryTreeNode(3);
root.left.right = new BinaryTreeNode(7);
root.right.right = new BinaryTreeNode(18);

// Function to print the tree in a tree-like format
function printTree(node, indent = "") {
    if (node === null) {
        return;
    }
    
    // Print the current node
    console.log(indent + node.value);
    
    // Print the left subtree (increase indent)
    if (node.left !== null) {
        printTree(node.left, indent + "    ");  // 4 spaces for indentation
    }

    // Print the right subtree (increase indent)
    if (node.right !== null) {
        printTree(node.right, indent + "    ");
    }
}

// Print the tree starting from the root
printTree(root);

//output:

// 10
//     5
//         3
//         7
//     15
//         18

//-----------------------------------------------------------------------------

class BinaryTreeNode1 {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Create root node
let root1 = new BinaryTreeNode1(10);

// Adding children
root1.left = new BinaryTreeNode1(5);
root1.right = new BinaryTreeNode1(15);

// Adding more children
root1.left.left = new BinaryTreeNode1(3);
root1.left.right = new BinaryTreeNode1(7);
root1.right.right = new BinaryTreeNode1(18);

console.log(root1);

//Output:

// BinaryTreeNode1 {
//     value: 10,
//     left: BinaryTreeNode1 {
//       value: 5,
//       left: BinaryTreeNode1 { value: 3, left: null, right: null },
//       right: BinaryTreeNode1 { value: 7, left: null, right: null }
//     },
//     right: BinaryTreeNode1 {
//       value: 15,
//       left: null,
//       right: BinaryTreeNode1 { value: 18, left: null, right: null }
//     }
//   }


