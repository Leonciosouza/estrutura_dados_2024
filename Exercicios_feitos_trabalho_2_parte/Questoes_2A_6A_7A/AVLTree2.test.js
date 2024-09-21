import BinarySearchTree from "./BinarySearchTree1.js";
import Node from "./Node.js";

describe('BinarySearchTree', () => {
    let tree; // Variável que armazenará a instância da árvore.
  
    beforeEach(() => {
      tree = new BinarySearchTree(); // Inicializa uma nova árvore antes de cada teste.
    });
  
    test('should insert a value into an empty tree', () => {
      tree.insert(10); // Insere o valor 10 na árvore vazia.
      expect(tree.root.value).toBe(10); // Verifica se o valor inserido é o root (raiz).
    });
  
    test('should insert values correctly in order', () => {
      tree.insert(10); // Insere o valor 10.
      tree.insert(5); // Insere o valor 5.
      tree.insert(15); // Insere o valor 15.
  
      expect(tree.root.value).toBe(10); // Verifica o valor da raiz.
      expect(tree.root.left.value).toBe(5); // Verifica o valor à esquerda da raiz.
      expect(tree.root.right.value).toBe(15); // Verifica o valor à direita da raiz.
    });
  
    test('should find the minimum value', () => {
      tree.insert(10);
      tree.insert(5);
      tree.insert(15);
  
      expect(tree.min()).toBe(5); // Verifica se o menor valor na árvore é 5.

    });
  
    test('should find the maximum value', () => {
      tree.insert(10);
      tree.insert(5);
      tree.insert(15);
  
      expect(tree.max()).toBe(15); // Verifica se o maior valor na árvore é 15.
    });
  
    test('should return true if value is found in tree', () => {
      tree.insert(10); 
      tree.insert(5);
      tree.insert(15);
  
      expect(tree.search(10)).toBe(true); // Verifica se o valor 10 está na árvore.
      expect(tree.search(5)).toBe(true); // Verifica se o valor 5 está na árvore.
      expect(tree.search(15)).toBe(true); // Verifica se o valor 15 está na árvore.
    });
  
    test('should return false if value is not found in tree', () => {
      tree.insert(10);
      tree.insert(5);
      tree.insert(15);
  
      expect(tree.search(20)).toBe(false); // Verifica se o valor 20 não está na árvore.

    });
  
    test('should traverse in order', () => {
      tree.insert(10);
      tree.insert(5);
      tree.insert(15);
  
      const result = [];
      tree.inOrderTraverse(value => result.push(value)); // Realiza a travessia em ordem e armazena os valores.

      
      expect(result).toEqual([5, 10, 15]); // Verifica se a travessia em ordem está correta.
    });
  
    test('should traverse pre order', () => {
      tree.insert(10);
      tree.insert(5);
      tree.insert(15);
  
      const result = [];
      tree.preOrderTraverse(value => result.push(value)); // Realiza a travessia pré-ordem.
  
      expect(result).toEqual([10, 5, 15]); // Verifica se a travessia pré-ordem está correta.
    });
  
    test('should traverse post order', () => {
      tree.insert(10);
      tree.insert(5);
      tree.insert(15);
  
      const result = [];
      tree.posOrderTraverse(value => result.push(value)); // Realiza a travessia pós-ordem.
  
      expect(result).toEqual([5, 15, 10]); // Verifica se a travessia pós-ordem está correta.
    });
  
    test('should count the number of nodes', () => {
      tree.insert(10);
      tree.insert(5);
      tree.insert(15);
  
      expect(tree.countNodes()).toBe(3); // Verifica se a contagem de nós é 3.
    });
  
    test('should count the number of leaves', () => {
      tree.insert(10);
      tree.insert(5);
      tree.insert(15);
  
      expect(tree.countLeaves()).toBe(2); // Verifica se a contagem de folhas (5 e 15) é 2.
    });
  
    test('should remove a node with no children', () => {
      tree.insert(10);
      tree.insert(5);
      tree.removeJohn(5); // Remove o nó 5 (sem filhos).
      
      expect(tree.root.left).toBeNull(); // Verifica se o nó esquerdo da raiz está nulo.
    });
  
    test('should remove a node with one child', () => {
      tree.insert(10);
      tree.insert(5);
      tree.insert(3);
      tree.removeJohn(5); // Remove o nó 5 (com um filho).

      
      expect(tree.root.left.value).toBe(3); // Verifica se o nó 3 agora está no lugar de 5.
    });
  
    test('should remove a node with two children', () => {
      tree.insert(10);
      tree.insert(5);
      tree.insert(15);
      tree.insert(12);
      tree.insert(17);
  
      tree.removeJohn(15); // Remove o nó 15 (com dois filhos).
  
      expect(tree.root.right.value).toBe(17); // Verifica se o nó 17 substituiu o 15.
    });
  
    test('should serialize and deserialize a tree', () => {
      tree.insert(10);
      tree.insert(5);
      tree.insert(15);
  
      const serialized = tree.serialize(); // Serializa a árvore em uma string.
      const deserializedTree = new BinarySearchTree();
      deserializedTree.root = deserializedTree.deserialize(serialized); // Deserializa a string em uma nova árvore.
  
      expect(deserializedTree.root.value).toBe(10); // Verifica se a raiz da nova árvore é 10.
      expect(deserializedTree.root.left.value).toBe(5);
    //  expect(deserializedTree.root.right.value).toBe(15);
    });
  
    test('should verify if the tree is AVL balanced', () => {
      tree.insert(10);
      tree.insert(5);
      tree.insert(15);
      
      expect(tree.isAVL()).toBe(true); // Verifica se a árvore está balanceada (AVL).
    });
  
    test('should detect if two trees are identical', () => {
      const tree1 = new BinarySearchTree();
      const tree2 = new BinarySearchTree();
  
      tree1.insert(10);
      tree1.insert(5);
      tree1.insert(15);
  
      tree2.insert(10);
      tree2.insert(5);
      tree2.insert(15);
  
      expect(tree.areIdentical(tree1.root, tree2.root)).toBe(true); // Verifica se as duas árvores são idênticas.

    });
  
    test('should detect if one tree is a subtree of another', () => {
      const subtree = new BinarySearchTree();
      subtree.insert(5); // Cria uma subárvore com o valor 5.

      
      tree.insert(10);
      tree.insert(5);
      tree.insert(15);
  
      expect(tree.isSubtree(subtree)).toBe(true); // Verifica se a subárvore é parte da árvore principal.
    });
  });