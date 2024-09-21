import Node from "./Node.js";

export default class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    /**
     * 
     * @param {*} value 
     */

    insert(value){
        if (this.root === null){
            this.root = new Node(value);
        }else{
            let node = this.root;
            while(true){
                if (value < node.value){
                    if (node.left === null){
                        node.left = new Node(value);
                        break;
                    }else{
                        node = node.left;
                    }
                }else{
                    if (node.right === null){
                        node.right = new Node(value);
                        break;
                    }
                    else{
                        node = node.right;
                    }
                }
            }
        }
    }

    /**
     * 
     * @param {*} value 
     */

    insertRecursive(value){
        if (this.root === null){
            this.root = new Node(value);
        }else{
            this.insertNode(this.root, value);
        }
    }

    /**
     * 
     * @param {*} node 
     * @param {*} value 
     */

    insertNode(node, value){
        if (value < node.value){
            if (node.left === null){
                node.left = new Node(value);
            }else{
                this.insertNode(node.left, value);
            }
        }else{
            if (node.right === null){
                node.right = new Node(value);
            }else{
                this.insertNode(node.right, value);
            }
        }
    }

    /**
     * Exibir os nós por nível definido.
     */

    printNodeByLevel(){
        let node = this.root;
        let nodes = [node];
        while (true){
            let newNodes = [];
            let values = "";
            for (let no of nodes) {
                values = values + no.value + " ";
                if (no.left !== null)
                    newNodes.push(no.left);
                if (no.right !== null)
                    newNodes.push(no.right);
            }   
            console.log(values);
            console.log("==================================")
            nodes = newNodes;
            if (nodes.length === 0)
                break;         
        }
    }  

    /**
     * 
     * @returns 
     */

    min(){
        return this.minNode(this.root);
    }

    /**
     * 
     * @param {*} node 
     * @returns 
     */

    minNode(node){
        if (node == null){
            return null;
        }

        while (true){
            if (node.left !== null){
                node = node.left;
            }else{
                return node.value;
            }
        }
    }

    /**
     * 
     * @param {*} node 
     * @returns 
     */

    minNodeRemove(node){
        if (node == null){
            return null;
        }

        let nodeParent = null;
        while (true){
            if (node.left !== null){
                nodeParent = node;
                node = node.left;
            }else{
                return [node, nodeParent];
            }
        }
    }

    /**
     * 
     * @returns 
     */

    max(){
        return this.maxNode(this.root);
    }

    /**
     * 
     * @param {*} node 
     * @returns 
     */

    maxNode(node){
        if (node == null){
            return null;
        }

        while (true){
            if (node.right !== null){
                node = node.right;
            }else{
                return node.value;
            }
        }        
    }

    /**
     * 
     * @param {*} callBack 
     */

    inOrderTraverse(callBack){
        this.inOrderNode(this.root, callBack);
    }

    /**
     * 
     * @param {*} node 
     * @param {*} callBack 
     */

    inOrderNode(node, callBack){
        if (node != null){
            this.inOrderNode(node.left, callBack);
            callBack(node.value);
            this.inOrderNode(node.right, callBack);
        }
    }

    /**
     * 
     * @param {*} callBack 
     */

    preOrderTraverse(callBack){
        this.preOrderNode(this.root, callBack);
    }

    /**
     * 
     * @param {*} node 
     * @param {*} callBack 
     */

    preOrderNode(node, callBack){
        if (node != null){
            callBack(node.value);
            this.preOrderNode(node.left,callBack);
            this.preOrderNode(node.right,callBack);
        }
    }

    /**
     * 
     * @param {*} callBack 
     */

    posOrderTraverse(callBack){
        this.posOrderNode(this.root, callBack);
    }

    /**
     * 
     * @param {*} node 
     * @param {*} callBack 
     */

    posOrderNode(node, callBack){
        if (node != null){            
            this.posOrderNode(node.left,callBack);
            this.posOrderNode(node.right,callBack);
            callBack(node.value);
        }
    }

    /**
     * 
     * @param {*} value 
     * @returns 
     */

    search(value){
        return this.hasNode(this.root, value);
    }

    /**
     * 
     * @param {*} node 
     * @param {*} value 
     * @returns 
     */

    hasNode(node, value){
        if (node === null){
            return false;
        }
        while(true){
            if (value === node.value){
                return true;
            }
            if (value < node.value){
                if (node.left == null)
                    return false;
                else 
                    node = node.left;                
            } else {
                if (node.right == null)
                    return false;
                else
                    node = node.right;
            }
       }
    }

    /**
     * 
     * @param {*} value 
     * @returns 
     */

    searchNode(value){
        let node = this.root;
        if (node === null){
            return null;
        }
        while(true){
            if (value === node.value){
                return node;
            }
            if (value < node.value){
                if (node.left == null)
                    return null;
                else 
                    node = node.left;                
            } else {
                if (node.right == null)
                    return null;
                else
                    node = node.right;
            }
       }
    }

    /**
     * 
     * @param {*} value 
     * @returns 
     */

    searchRecursive(value){
        return this.searchRecursiveNode(this.root, value);
    }

    /**
     * 
     * @param {*} node 
     * @param {*} value 
     * @returns 
     */

    searchRecursiveNode(node, value){
        if (node === null){
            return false;
        }
        if (value === node.value){
            return true;
        }
        if (value < node.value){
            return this.searchRecursiveNode(node.left, value);
        }else{
            return this.searchRecursiveNode(node.right, value);
        }        
    }

    /**
     * 
     * @param {*} value 
     * @returns 
     */

    removeJohn(value){
        //Verificar se a árvore está vazia
        if (this.root === null) return false;
        //Variáveis auxiliares
        let node = this.root;
        let nodeParent = null; //Armazenar o pai do nó analisado
        while (true){
            if (node === null)
                return false;

            if (node.value === value){  

                //Caso um 1 - Quando o nó não tem filhos
                if (node.left === null && node.right === null){
                    if (nodeParent === null){
                        this.root = null;                                            
                    }else{
                        if (node.value < nodeParent.value){
                            nodeParent.left = null;                            
                        }else{
                            nodeParent.right = null;                            
                        }
                    }
                    return true;
                }

                //Caso 2 - Filho da direita - Quando o nó só tenho um filho
                if (node.left === null && node.right !== null){
                    if (node.value > nodeParent.value){
                        nodeParent.right = node.right;
                    }else{
                        nodeParent.left = node.right;
                    }
                }
                //Caso 2 - Filho da esquerda - Quando o nó só tenho um filho
                if (node.right === null && node.left !== null){
                    if (node.value > nodeParent.value){
                        nodeParent.right = node.left;
                    }else{
                        nodeParent.left = node.left;
                    }
                }

                //Caso 3 - Quando o nó tem dois filhos
                if (node.left !== null && node.right !== null){
                    const [nodeMin, nodeMinParent] = this.minNodeRemove(node.right);
                    nodeParent.right = nodeMin;                    
                    nodeMin.left = node.left;
                    if (nodeMinParent !== null){
                        nodeMinParent.left = null;
                    }
                }

            }

            nodeParent = node;
            if (value < node.value){
                node = node.left;
            }else{
                node = node.right;
            }
        }
    }

    /**
     * 
     * @param {*} tree1 
     * @param {*} tree2 
     * @returns 
     */
    areIdentical(tree1, tree2) {
        if (tree1 === null && tree2 === null) {
            return true; // Ambas as árvores são vazias
        }

        if (tree1 === null || tree2 === null) {
            return false; // Uma árvore é vazia e a outra não
        }

        // Verifica se os valores e as subárvores são iguais
        return (
            tree1.value === tree2.value &&
            this.areIdentical(tree1.left, tree2.left) &&
            this.areIdentical(tree1.right, tree2.right)
        );
    }

    /**
     * 
     * @param {*} subtree 
     * @returns 
     */
    isSubtree(subtree) {
        if (subtree.root === null) {
            return true; // Uma árvore vazia é sempre uma subárvore da árvore atual.
            
        }

        return this.isSubtreeHelper(this.root, subtree.root);

    }

    /**
     * 
     * @param {*} tree 
     * @param {*} subtree 
     * @returns 
     */
    // Função auxiliar para verificar subárvore.

    isSubtreeHelper(tree, subtree) {
        if (tree === null) {
            return false; // Subárvore não encontrada.
            
        }
        if (this.areIdentical(tree, subtree)) {
            return true;
            
        }

        // Verifica se a subárvore está na esquerda ou na direita.
        return (
            this.isSubtreeHelper(tree.left, subtree) ||
            this.isSubtreeHelper(tree.rigth, subtree)
        );
    }

    /**
     * 
     * @param {*} level 
     */
    printLevel(level) {
        this.printGivenLevel(this.root, level);

    }
     /*
    add(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    */

    /**
     * 
     * @param {*} node 
     * @param {*} level 
     * @returns 
     */
    printGivenLevel(node, level) {
        if (node === null) {
            return;
            
        }
        if (level === 1) {
            console.log(node.value);
            
        } else if (level > 1 ) {
            this.printGivenLevel(node.left, level - 1);

            this.printGivenLevel(node.right, level - 1);

        }
    }
    /**
     * 
     * @returns 
     */
    // Função para converter a árvore em uma lista ligada.
    toLinkedList() {
        this.head = null; // Reinicia a cabeça da lista ligada.
        this.prev = null; // Reinicia o nó anterior.
        this.inOrderLinkedList(this.root);
        return this.head; // Retorna a cabeça da lista ligada.
    }
    /**
     * 
     * @param {*} head 
     */
    
    printLinkedList(head) {
        let current = head;
        while (current !== null) {
            console.log(current.value); // Imprime o valor do nó da lista ligada
            current = current.next; // Move para o próximo nó
        }

    }

    /**
     * 
     * @param {*} node 
     * @returns 
     */
    
    // Função auxiliar que faz a conversão in-order.
    inOrderLinkedList(node) {
        if (node === null) return;
            
        // Processa o lado esquerdo (subárvore).
        this.inOrderLinkedList(node.left);

        // Cria um novo nó da lista ligada.
        const newListNode = new SimpleLinkedList(node.value);

        // Se o nó anterior for nulo, significa que estamos no primeiro nó(head).
        if (this.prev === null) {
            this.head = newListNode; // O primeiro nó da lista ligada.
            
        } else {
            this.prev.next = newListNode; // Conecta o nó anterior ao nó atual.
        }
        this.prev = newListNode; // Atualiza o nó anterior para o nó atual;

        // Processa o lado direito (subárvore)
        this.inOrderLinkedList(node.right);
    }
    /**
     * 
     * @returns 
     */

    // 2 Métodos abaixo para contar o número totoal de nós:
    countNodes() {
        return this.countNodesHelper(this.root);
    }

    /**
     * 
     * @param {*} node 
     * @returns 
     */

    countNodesHelper(node){
        if(node === null) {
            return 0;
        }

        // O total de nós é 1 (o nó atual) + número de nós na subárvore esquerda + número de nós na subárvore direita.
        return 1 + this.countNodesHelper(node.left) + this.countNodesHelper(node.right);
    }

    /**
     * 
     * @returns 
     */
    
    // Métodos para contar o número de folhas.
    countLeaves() {
        return this.countNodesHelper(this.root);
    }

    /**
     * 
     * @param {*} node 
     * @returns 
     */
    countNodesHelper(node) {
        if (node === null) {
            return 0;

        }
        // Se o nó não tem filhos, é uma folha.
        if (node.left === null && node.left === null) {
            return 1;

        }
        // Se o nó tem filhos, soma as folhas das subárvores esquerda e direita.
        return this.countNodesHelper(node.left) + this.countNodesHelper(node.right);
    }

    /**
     * 
     * @returns 
     */
    // Método para verificar se a árvore é AVL.
    isAVL() {
        return this.isAVLHelper(this.root) !== -1;
    }

    /**
     * 
     * @param {*} node 
     * @returns 
     */

    // Função auxiliar que retorna a altura de um nó ou -1 se a árvore estiver desbalanceada.
    isAVLHelper(node) {
        if (node === null) {
            return 0; // Árvore vazia ou folha tem altura 0.
        }

        // Verifica a altura da subárvore esquerda.
        const leftHeight = this.isAVLHelper(node.left);
        if (leftHeight === -1) return -1; // Se a subárvore esquerda está desbalanceada, retorna -1.

        // Verifica a altura da subárvore direita
        const rightHeight = this.isAVLHelper(node.right);
        if (rightHeight === -1) return -1; // Se a subárvore direita está desbalanceada, retorna -1.

        // Calcula o fator de balanceamento
        const balanceFactor = Math.abs(leftHeight - rightHeight);

        // Se o fator de balanceamento for maior que 1, a árvore está desbalanceada.
        if (balanceFactor > 1) {
            return -1;
        }

        // Retorna a altura do nó atual.
        return Math.max(leftHeight, rightHeight) + 1;
    }
    // Métdo abaixo como resolução da Questão - 06, Lista.

    // Serializa a árvore em uma string usando Pré-Ordem.
    /**
     * 
     * @returns 
     */
    serialize() {
        const result = [];
        this.serializeHelper(this.root, result);
        return result.join(",") // Retorna a árvore serializada com uma string separada  por vírgula.

    }
    /**
     * 
     * @param {*} node 
     * @param {*} result 
     * @returns 
     */
    // Método auxiliar para serializar a árvore.
    serializeHelper(node, result) {
        if (node === null) {
            result.push("null"); // Usa "null" para representar nós vazios.
            return;

        }
        result.push(node.value); // Adiciona o valor do nó.
        this.serializeHelper(node.left, result); // Serializa a subárvore esquerda.
        this.serializeHelper(node.right, result); // Serializa a subárvorem direita.
    }

    // Desserializa a string de volta para uma estrutura de árvore.
    /**
     * 
     * @param {*} data 
     * @returns 
     */
    deserialize(data) {
        const values = data.split(",") // Divide a string em um array de valores.
        this.index = 0; // índice global para acompanhar a posição ao recriar a árvore.
        return this.deserializeHelper(values); // Retorna a raiz da árvore desserializada.
    }

    // Método auxiliar para desserializar a árvore.
    /**
     * 
     * @param {*} values 
     * @returns 
     */
    deserializeHelper(values) {
        if(this.index >= values.length || values[this.values] === "null") {
            this.index++;
            return null; // Se o valor é null, significa que o nó não existe.

        }
        const node = new Node(parseInt(values[this.index])); // Cria um novo nó.
        this.index++;
        node.left = this.deserializeHelper(values); // Desserializa a subárvore esquerda.
        node.right = this.deserializeHelper(values); // Desserializa a subárvore direia.
        return node;
    }
}

