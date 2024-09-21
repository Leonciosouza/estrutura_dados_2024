import BinarySearchTree from "../src/BinarySearchTree.js"; // Importa a classe da árvore
import { getNodeLevel } from "../src/GetNodeLevel.js"; // Importa a função que você quer testar

const arvore = new BinarySearchTree(); // Cria uma nova árvore
// Insere nós na árvore
arvore.insert(30);
arvore.insert(20);
arvore.insert(40);
arvore.insert(5);
arvore.insert(25);
arvore.insert(32);

// Testa e imprime o nível de cada nó
console.log("Nível do nó 30:", getNodeLevel(arvore, 30)); // Deve ser 0
console.log("Nível do nó 20:", getNodeLevel(arvore, 20)); // Deve ser 1
console.log("Nível do nó 5:", getNodeLevel(arvore, 5));   // Deve ser 2
console.log("Nível do nó 32:", getNodeLevel(arvore, 32)); // Deve ser 2
console.log("Nível do nó 100:", getNodeLevel(arvore, 100)); // Deve ser null
