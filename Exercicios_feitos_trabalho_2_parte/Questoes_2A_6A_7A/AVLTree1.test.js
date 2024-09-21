import BinarySearchTree from "./BinarySearchTree1.js";
import Node from "./Node.js";

describe('BinarySearchTree - AVL Property', () => {
    let bst;

    beforeEach(() => {
        bst = new BinarySearchTree();
    });

    test('should detect AVL tree', () => {
        // Inserir nós de forma balanceada.
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(3);
        bst.insert(7);
        bst.insert(13);
        bst.insert(17);

        expect(bst.isAVL()).toBe(true); // A Estrutura da árvore deve ser AVL.
    });

    test('should detect non-AVL tree', () => {
        // Inserir nós de forma que a árvore não seja balanceada.
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(3);
        bst.insert(2); // Esta inserção deve desbalancear a árvore.

        expect(bst.isAVL()).toBe(false); // A árvore não é AVL.
    });
});