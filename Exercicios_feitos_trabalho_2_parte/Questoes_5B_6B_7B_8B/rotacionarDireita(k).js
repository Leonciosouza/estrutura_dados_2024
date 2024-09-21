class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    display() {
        let current = this.head;
        const result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        return result;
    }

    rotacionarDireita(k) {
        if (this.size === 0 || k <= 0) return;

        k = k % this.size;
        if (k === 0) return;

        let current = this.head;
        let length = 1;

        while (current.next) {
            current = current.next;
            length++;
        }

        current.next = this.head;

        let stepsToNewHead = length - k;
        let newTail = this.head;

        for (let i = 0; i < stepsToNewHead - 1; i++) {
            newTail = newTail.next;
        }

        this.head = newTail.next;
        newTail.next = null;
    }
}

export default LinkedList;

// module.exports = LinkedList;