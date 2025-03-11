const BinarySearchTree = require('./BinarySearchTree')

const myTree = new BinarySearchTree(10)
console.log(myTree)
myTree.insertBST(11)
myTree.insertBST(9)
myTree.insertBST(12)
myTree.insertBST(13)
console.log(myTree)


//myTree.preOrderPrint(myTree.root)
r = myTree.searchBST(14)
console.log(r)

myTree.deleteBST(11)
console.log(myTree)



function findMin(tree){
    minElement = tree.root.val
    currentNode = tree.root
    while(currentNode != null){
        minElement = currentNode.val
        currentNode = currentNode.leftChild   
    }
    return minElement
}

console.log('findMin')
let input = new BinarySearchTree(6)
input.insertBST(4)
input.insertBST(9)
input.insertBST(2)
input.insertBST(5)
input.insertBST(8)
input.insertBST(12)
//console.log(input)
//input.inOrderPrint(input.root.leftChild)

console.log(findMin(input))     // 2
// Time complexity O(tree height)