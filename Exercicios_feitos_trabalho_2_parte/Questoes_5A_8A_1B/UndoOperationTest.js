import { UndoOperationAVLTree } from "../src/UndoOperation.js";

const arvore = new UndoOperationAVLTree();
arvore.insert(30);
arvore.insert(20);
arvore.insert(40);

console.log("Árvore inicial:");
arvore.printNodeByLevel();

arvore.undo();
console.log("Depois de desfazer a última inserção:");
arvore.printNodeByLevel(); // Deve remover o nó 40

arvore.removeJohn(20);
console.log("Depois de remover 20:");
arvore.printNodeByLevel();

arvore.undo();
console.log("Depois de desfazer a remoção de 20:");
arvore.printNodeByLevel(); // Deve reverter a remoção de 20
