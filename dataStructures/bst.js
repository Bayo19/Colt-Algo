// each node can have more than one reference to another node
// all trees need a roots
// the HTML dom is a tree
// binary tree can only have two children per parent
// to the left, less than parent .To the right, more than parent

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        let newNode = new Node(value)
        if (!this.root) {
            this.root = newNode
            return this
        } else {
            let current = this.root
            while (true) {
                if(value === current.value) return undefined
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode
                        return this
                    } else {
                        current = current.left
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode
                        return this
                    } else {
                        current = current.right
                    }
                }
            }
        }
    }

    find(value) {
        if (!this.root) return false

        let current = this.root
        var found = false

        while(current && !found) {
            if (value === current.value) {
                found = true   
            } else if (value < current.value) {
                current = current.left
            } else if (value > current.value) {
                current = current.right
            }
        }
        if (found) {return current.value} else return undefined
    }

    // Tree traversal

// BFS - Breadthe first search is horizontal, we print every node on a level before descending

    bfs() { 
        let data = [],
        queue = [],
        node = this.root

        queue.push(node)
        while(queue.length) {
            node = queue.shift()
            data.push(node.value)
            if(node.left) queue.push(node.left)  

            if(node.right) queue.push(node.right)
        }
        return data
    }

// DFS traverses down before goign to siblings
// preorder - every left node on a branch then right

    dfs_preorder() {
        let current = this.root,
            data = []

        function traverse(node) {
            data.push(node.value)
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
        }

        traverse(current)
        return data
    }


//    postorder visit children of nodes first
    dfs_postorder() {
        let current = this.root,
            data = []

        function traverse(node) {
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
            data.push(node.value)
        }

        traverse(current)
        return data
    }

    dfs_inorder() {
        let current = this.root,
        data = []

        function traverse(node) {
            if(node.left) traverse(node.left)
            data.push(node.value)
            if(node.right) traverse(node.right)
        }

        traverse(current)
        return data
    }
        
}

let tree = new BinarySearchTree()
let barr = [10, 6, 15, 3, 8, 20]

let insert_el_tree = (treename, arr) => {
    for(let i = 0; i < arr.length; i++){
        treename.insert(arr[i])
    }
}

insert_el_tree(tree, barr)

// console.log(tree)
console.log(tree.bfs())
console.log(tree.dfs_preorder())
console.log(tree.dfs_postorder())
console.log(tree.dfs_inorder())

