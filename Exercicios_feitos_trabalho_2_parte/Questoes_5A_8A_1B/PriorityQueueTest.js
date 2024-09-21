import { PriorityQueue } from "../src/PriorityQueue.js";

const fila = new PriorityQueue();
fila.enqueueWithPriority("Elemento 1", 2);
fila.enqueueWithPriority("Elemento 2", 1);
fila.enqueueWithPriority("Elemento 3", 3);

console.log("Fila depois das inserções com prioridade:");
fila.printQueue(); // Deve exibir: [Elemento 3, Elemento 1, Elemento 2]

fila.dequeue();
console.log("Fila depois de remover o elemento de maior prioridade:");
fila.printQueue(); // Deve exibir: [Elemento 1, Elemento 2]

fila.dequeue();
fila.printQueue(); // Deve exibir: [Elemento 2]

fila.dequeue();
console.log("Fila depois de remover todos os elementos:");
fila.printQueue(); // Deve exibir: []
