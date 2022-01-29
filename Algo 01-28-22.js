/*
A binary search tree is just a collection of nodes structured similar to the below:

                                    A
                                  /   \
                                 B     C
                                / \   / \
                               D   E F   G

All of the letters are a node where the the root of the tree is the topmost node (A). Each node can have two branches: a left and right, and a node with at least one branch is considered the root for that branch (B is the root of D and E).

We will practice creating a BST, and inserting and removing nodes from it.
*/

// This class is used to create a node within the BST class.
class Node {
    constructor(data) {

        // The data used to create the node is its data.
        this.data = data;

        // The newly created node may not have branches, so they are instantiated as null.
        this.left = null;
        this.right = null;
    }
}

// This class is used to create a BST.
class BST {
    constructor() {

        // When you create a BST, it will always start as empty.
        this.root = null; 
    }

    // This method is used to insert data into the BST.
    insert(data) {

        // Creates a new node named newNode using the node class.
        const newNode = new Node(data);

        // If the BST is empty, the node becomes the topmost root.
        if(this.root === null) this.root = newNode;

        // If the BST is not empty, another method is called where this.root is the created BST's root and newNode is the node you created.
        else this.insertBranch(this.root, newNode);
    }

    // This method is called by the insert method to insert data into the BST if a root exists.
    insertBranch(node, newNode) {

        // If the newNode is larger than the node...
        if(newNode.data < node.data) {

            // And the left branch is empty, the newNode becomes that branch.
            if(node.left === null) node.left = newNode;

            // And the left branch is not empty, we call this method recursively where the left branch is the root.
            else this.insertBranch(node.left, newNode);
        }

        // If the newNode is smaller than the node...
        else {

            // And the right branch is empty, the newNode becomes that branch.
            if(node.right === null) node.right = newNode;

            // And the right branch is not empty, we call this method recursively where the right branch is the root.
            else this.insertBranch(node.right, newNode);
        }
    }

    // This method removes the node with the given data from the BST.
    remove(data) {

        // The topmost root of the BST is what is returned from the removeBranch method.
        this.root = this.removeBranch(this.root, data);
    }

    /*
    This method is called by the remove method to remove the node from the BST. 
    node is the topmost root, and key is the data of the node we are looking to remove.
    */
    removeBranch(node, key) {

        /*
        If the key we want to remove is the node, we return null to change the topmost root to null in the remove method.
        This is also the break case for the recursive functions we might call within the else if statements.
        */
        if(key === node.data) return null;

        // If the key is smaller than the node...
        else if(key < node.data) {

            // We call this function recursively to find the branch with the key.
            node.left = this.removeBranch(node.left, key);

            // Return the node for this.root in the remove method.
            return node;
        }

        // If the key is larger than the node...
        else if(key > node.data) {

            // We call this function recursively to find the branch with the key.
            node.right = this.removeBranch(node.right, key);

            // Return the node for this.root in the remove method.
            return node;
        }
    }
}

const tree = new BST();
tree.insert(5);
tree.insert(4);
tree.insert(6);
console.log(tree);
/*
BST {
    root: Node {
        data: 5,
        left: Node { data: 4, left: null, right: null },
        right: Node { data: 6, left: null, right: null }
    }
}
*/
tree.remove(4);
tree.remove(6);
console.log(tree);
// BST { root: Node { data: 5, left: undefined, right: undefined } }