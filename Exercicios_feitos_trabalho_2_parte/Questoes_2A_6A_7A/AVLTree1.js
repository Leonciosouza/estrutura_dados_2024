import BinarySearchTree from "./BinarySearchTree1.js";
//import BinarySearchTree from "./BinarySearchTree1.js";
/*
class Avl extends Bst {

    constructor() {
        
    }

}
*/

class AVLTree extends BinarySearchTree {
    heigthNode(node){
        if (node === null){
            return null;
        }

        if (node.left === null && node.right === null)
            return 0;

        let nodes = [node];
        let heigth = 0;
        while (true){
            let newNodes = [];
            for (let no of nodes) {
                if (no.left !== null)
                    newNodes.push(no.left);
                if (no.right !== null)
                    newNodes.push(no.right);
            }               
            nodes = newNodes;
            heigth++;
            if (nodes.length === 0)
                break;         
        }
        return heigth > 0 ? heigth - 1 : heigth;
    }


}

let arvore = new AVLTree();
arvore.insert(30);
arvore.insert(20);
arvore.insert(40);
arvore.insert(5);
arvore.insert(2);
arvore.insert(8);
arvore.insert(25);
arvore.insert(32);
arvore.insert(45);
arvore.insert(42);

arvore.printNodeByLevel();

console.log("Altura: ", arvore.heigthNode(arvore.searchNode(40)));

arvore.removeJohn();


console.log("Valor encontrado é: ", arvore.removeJohn(45));
arvore.printNodeByLevel();
arvore.removeJohn(8);
arvore.printNodeByLevel();

// Criando uma subárvore separada.

const tree = new BinarySearchTree();

tree.insert(30);
tree.insert(20);
tree.insert(40);
tree.insert(5);
tree.insert(25);
tree.insert(35);
tree.insert(45);


const subtree = new BinarySearchTree();
subtree.insert(20);
subtree.insert(5);
subtree.insert(25);

// Verificando se a subárvore é uma subárvore da árvore principal.
console.log("É uma subárvore?", tree.isSubtree(subtree)); // true.


const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(18);

// Converte a árvore para uma lista ligada
// const linkedListHead = bst.toLinkedList();
//console.log(linkedListHead);

//bst.toLinkedList();
//console.log(bst);

// Exibe a lista ligada.
//printLinkedList(linkedListHead);


console.log("Total de nós:", bst.countNodes());
console.log("Total de folhas", bst.countLeaves());

// Saída de verificação da Questão-07 da Lista do Trabalho Final.
console.log("Verificando se satisfaz todas as propriedades AVL:", bst.isAVL());

// Criando nova instância para atribuir e exibir saída de valores para a Questão - 06, da Lista Final.
const bst1 = new BinarySearchTree();
bst1.insert(10);
bst1.insert(5);
bst1.insert(15);

const serialized = bst1.serialize();
console.log("Árvore Serializada:", serialized);

const newTree = new BinarySearchTree();
newTree.root = newTree.deserialize(serialized);
console.log("Árvore Desserializada:");
newTree.printNodeByLevel(); // Função para imprimir a árvore por nível.

