import { questionInt } from 'readline-sync';

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
            return;
        }
        this._insertNode(this.root, newNode);
    }

    _insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }

    delete(value) {
        this.root = this._deleteNode(this.root, value);
    }

    _deleteNode(node, value) {
        if (node === null) {
            return null;
        }
        if (value < node.value) {
            node.left = this._deleteNode(node.left, value);
        } else if (value > node.value) {
            node.right = this._deleteNode(node.right, value);
        } else {
            // Node found
            if (node.left === null && node.right === null) {
                return null; // No children
            } else if (node.left === null) {
                return node.right; // One child (right)
            } else if (node.right === null) {
                return node.left; // One child (left)
            } else {
                // Two children: Find the minimum node in the right subtree
                let minNode = this._findMinNode(node.right);
                node.value = minNode.value; // Replace value
                node.right = this._deleteNode(node.right, minNode.value); // Delete the minimum node
            }
        }
        return node;
    }

    _findMinNode(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    // In-order Traversal
    inOrderTraversal(node) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }

    // Pre-order Traversal
    preOrderTraversal(node) {
        if (node !== null) {
            console.log(node.value);
            this.preOrderTraversal(node.left);
            this.preOrderTraversal(node.right);
        }
    }

    // Post-order Traversal
    postOrderTraversal(node) {
        if (node !== null) {
            this.postOrderTraversal(node.left);
            this.postOrderTraversal(node.right);
            console.log(node.value);
        }
    }

    // Print the tree in a structured format
    printTree(node, prefix = "", isLeft = true) {
        if (node === null) {
            return;
        }

        // Print right subtree first
        if (node.right !== null) {
            this.printTree(node.right, prefix + (isLeft ? "│   " : "    "), false);
        }

        // Print current node
        console.log(prefix + (isLeft ? "└── " : "┌── ") + node.value);

        // Print left subtree
        if (node.left !== null) {
            this.printTree(node.left, prefix + (isLeft ? "    " : "│   "), true);
        }
    }
}

// Menu Driven Program
const binaryTree = new BinaryTree();
//const readline = require('readline-sync');

function displayMenu() {
    console.log("\nBinary Tree Menu:");
    console.log("1. Insert a node");
    console.log("2. Delete a node");
    console.log("3. In-order Traversal");
    console.log("4. Pre-order Traversal");
    console.log("5. Post-order Traversal");
    console.log("6. Print Tree Structure");
    console.log("0. Exit");
}

let choice;
do {
    displayMenu();
    choice = questionInt("Enter your choice: ");

    switch (choice) {
        case 1:
            const insertValue = questionInt("Enter value to insert: ");
            binaryTree.insert(insertValue);
            console.log(`Inserted ${insertValue} into the tree.`);
            break;
        case 2:
            const deleteValue =  questionInt("Enter value to delete: ");
            binaryTree.delete(deleteValue);
            console.log(`Deleted ${deleteValue} from the tree.`);
            break;
        case 3:
            console.log("In-order Traversal:");
            binaryTree.inOrderTraversal(binaryTree.root);
            break;
        case 4:
            console.log("Pre-order Traversal:");
            binaryTree.preOrderTraversal(binaryTree.root);
            break;
        case 5:
            console.log("Post-order Traversal:");
            binaryTree.postOrderTraversal(binaryTree.root);
            break;
        case 6:
            console.log("Tree Structure:");
            binaryTree.printTree(binaryTree.root);
            break;
        case 0:
            console.log("Exiting...");
            break;
        default:
            console.log("Invalid choice. Please try again.");
    }
} while (choice !== 0);
