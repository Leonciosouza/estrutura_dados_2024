/**
 * Node class
 */
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

/**
 * SimpleLinkedList
 */
export default class SimpleLinkedList {
    constructor(){
        this.head = null;
        this.length = 0;
    }

    /**
     * Append element
     * @param {any} value 
     */
    append(value){
        /**
         * If don't have element
         */
        let node = new Node(value);
        if (this.head === null){
            this.head = node;
        }
        /**
         * If already has element
         */
        else{
            let current = this.head;
            while (current.next !== null){
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }

    shift(value){
        let node = new Node(value);
        if (this.head === null){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }

    /**
     * Clear list
     */
    clear(){
        this.head = null;
        this.length = 0;
    }

    /**
     * Transform to list
     * @returns list
     */
    list(){
        let list = [];
        if (this.head === null){
            console.log('Lista Vazia');
            return list;
        }
        else{            
            let current = this.head;
            list.push(current.value);
            while(current.next !== null){
                current = current.next;
                list.push(current.value);
            }

            console.log(list.join(' -> '));
            return list;
        }
    }

    length(){
        return this.length;
    }

    /**
     * Returns the value of index from list
     * @param {*} index 
     */
    at(index){
        
        if (this.length() === 0) return undefined;        
        let current = this.head;
        if  (index === 0)
            return current.value;
        else{
            let count = 1;
            while (current.next !== null){
                current = current.next;
                if (index === count)
                    break
                count++;
            }
            return current.value;
        }
    }
    /*
     2. Crie um método intercalarNosListas(otherList) que intercale os nós de duas listas
     encadeadas alternadamente, unindo-as em uma nova lista encadeada. 
    */
    
     intercalarNosListas(otherList) {
        const newlist = new SimpleLinkedList();
        let currentThis = this.head;        
        let currentOther = otherList.head; 
       
        while (currentThis !== null || currentOther !== null) {
            if (currentThis !== null) {
                newlist.append(currentThis.value);
                currentThis = currentThis.next;  
            }

            if (currentOther !== null) {
                newlist.append(currentOther.value);
                currentOther = currentOther.next; 
            }
        } 
        
        return newlist;
    }

    toArray() {
        const result = [];
        let current = this.head;
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        return result;
    }

    /*
    4. Remova nós duplicados (apenas os repetidos). Crie um método
    removeTodosDuplicados() que remova todos os nós duplicados de uma lista
    encadeada, garantindo que os valores duplicados não apareçam na lista final.
    */

    removeTodosDuplicados() {
        let current = this.head;  
    
        // Enquanto o nó atual não for nulo, percorra a lista
        while (current !== null) {  
            let previous = current;  
            let checker = current.next;  
        
            // Verifica todos os próximos nós em relação ao valor do nó atual
            while (checker !== null) {
                if (checker.value === current.value) {  
                    // Se encontrar um duplicado, remova-o
                    previous.next = checker.next; 
                } else {
                    // Avance o ponteiro 'previous' se não houver duplicado
                    previous = checker;  
                }
                checker = checker.next; 
            }
            // Avance para o próximo nó
            current = current.next;  
        }
    }
    
}

 let lista1 = new SimpleLinkedList();
 lista1.append(1);
 lista1.append(3);
 lista1.append(5);

 let lista2 = new SimpleLinkedList();
 lista2.append(2);
 lista2.append(4);
 lista2.append(6);
 lista2.append(8);

 let listaIntercalada = lista1.list(lista2);
 console.log(listaIntercalada);

// Criar e testar a lista
 let lista = new SimpleLinkedList();

 lista.append(1);
 lista.append(2);
 lista.append(2);
 lista.append(3);
 lista.append(4);
 lista.append(3);
 lista.append(5);

 console.log("Lista original:");
 lista.list();  


 lista.removeTodosDuplicados();

 console.log("Lista após remover duplicados:");
 lista.list();  

