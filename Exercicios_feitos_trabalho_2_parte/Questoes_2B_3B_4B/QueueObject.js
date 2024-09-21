/**
 * QueueOnject class
 */
class QueueObject {
    constructor(){
        this.items = {};
        this.front = 0;
        this.end = 0;
    }

    /**
     * Enqueue element
     * @param {*} element 
     */
    enqueue(element){
        this.items[this.end] = element;
        this.end++;
    }

    /**
     * 
     */
    dequeue(){
        if (this.size() === 0){
            throw new Error("No elements");  
        }
        let element = this.items[this.front]; 
        delete this.items[this.front];  
        this.front++;  
        return element; 
    }
    
    size(){
        return this.end - this.front;
    }

    /* 
    3. Crie um método compactarIntervalos() na classe Fila que transforme uma fila de
    inteiros em uma fila de intervalos consecutivos. Por exemplo, a fila [1, 2, 3, 5, 6, 7]
    deve ser transformada em [(1-3), (5-7)]. 
    */

    compactarIntervalos(){
        if (this.size() === 0) {
            return [];  
        }
    
        let compacted = [];  
        let start = this.dequeue();  
        let end = start;  
        while (this.size() > 0) {
            let next = this.dequeue();  
    
            if (next === end + 1) {
                end = next;
            } else {
                compacted.push(`(${start}-${end})`);
                start = next;  
                end = next;
            }
        }
    
        compacted.push(`(${start}-${end})`);
    
        return compacted;  
    }
    
}

let fila1 = new QueueObject();
fila1.enqueue(1);
fila1.enqueue(2);
fila1.enqueue(3);
fila1.enqueue(5);
fila1.enqueue(6);
fila1.enqueue(7);

console.log("Resultado Fila 1:", fila1.compactarIntervalos());  // Deve exibir ["(1-3)", "(5-7)"]

let fila2 = new QueueObject();
fila2.enqueue(1);
fila2.enqueue(2);
fila2.enqueue(4);
fila2.enqueue(5);
fila2.enqueue(7);

console.log("Resultado Fila 2:", fila2.compactarIntervalos());  // Deve exibir ["(1-2)", "(4-5)", "(7-7)"]

let fila3 = new QueueObject();
fila3.enqueue(10);
fila3.enqueue(11);
fila3.enqueue(15);

console.log("Resultado Fila 3:", fila3.compactarIntervalos()); 

export default QueueObject;