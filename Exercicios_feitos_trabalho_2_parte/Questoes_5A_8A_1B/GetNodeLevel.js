import BinarySearchTree from './BinarySearchTree.js';

export function getNodeLevel(tree, value) {
    let node = tree.root;
    let level = 0;
    
    while (node !== null) {
        if (value === node.value) {
            return level;
        }
        if (value < node.value) {
            node = node.left;
        } else {
            node = node.right;
        }
        level++;
    }
    return null; // Caso o nó não exista
}
