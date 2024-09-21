import BinarySearchTree from "./BinarySearchTree.js";
import Node from './Node.js';

describe('BinarySearchTree', () => {
    let bst;

    beforeEach(() => {
        bst = new BinarySearchTree();
    });

    // Teste de inserção de nós na árvore.
    test('should insert nodes correctly', () => {
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        expect(bst.root.value).toBe(10);
        expect(bst.root.value).toBe(5);
        expect(bst.root.value).toBe(15);
    });

    // Teste do método countNodes.
    test('should count total nodes correctly', () => {
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(3);
        bst.insert(7);
        expect(bst.countNodes().toBe(5));



    });

    // Teste do método countLeaves.
    test('should count leaves correctly', () => {
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(3);
        bst.insert(7);
        expect(bst.countLeaves().toBe(3)); // As folhas são 3, 7, e 15.
    });

    // Teste do método minNode.
    test('should find the minium node', () => {
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(3);
        expect(bst.min().toBe(3));

    });

    // Teste do método maxNode.
    test('should find the maximum node', () => {
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        expect(bst.max().toBe(15));

    });

    // Teste do método search.
    test('should find the correct node when searching', () => {
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        expect(bst.search(10)).toBe(true);
        expect(bst.search(5)).toBe(true);
        expect(bst.search(15)).toBe(true);
        expect(bst.search(20)).toBe(false);

    });

    // Teste do método removejohn (remoção de nó).
    test('should remove a node correctly', () => {
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(3);
        bst.insert(7);
        bst.removeJohn(5);
        expect(bst.search(5)).toBe(false); // 5 foi removido.
        expect(bst.countNodes()).toBe(4); // Número de nós após a remoção.

    });

    // Teste de inserção recursiva.
    test('should insert nodes recursively', () => {
        bst.insertRecursive(10);
        bst.insertRecursive(5);
        bst.insertRecursive(15);
        expect(bst.root.value).toBe(10);
        expect(bst.root.left.value).toBe(5);
        expect(bst.root.right.value).toBe(15);

    });

    // Teste de conversão para lista ligada.
    test('should convert tree to linked list in-order', () => {
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        const head = bst.toLinkedList();
        let current = head;
        expect(current.value).toBe(10);
        current = current.next;
        expect(current.value).toBe(5);
        current = current.next;
        expect(current.value).toBe(15);
        expect(current.next).toBeNull(); // A lista termina.
        
        
    });

    // Teste do método isSubtree.
    test('shoul correctly indentify a subtree', () => {
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(3);

        const subtree = new BinarySearchTree();
        subtree.insert(5);
        subtree.insert(3);

        expect(bst.isSubtree(subtree)).toBe(true);
    });

    // Teste do método printLevel.
    test('should print nodes at a given level', () => {
        // Vamos capturar o output de console.log.
        const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(3);
        bst.insert(7);
        bst.printLevel(2);

        expect(logSpy).toHaveBeenCalledWith(5);
        expect(logSpy).toHaveBeenCalledWith(15);

        // Restaurar o console.log após o teste.
        logSpy.mockRestore();
    });
});