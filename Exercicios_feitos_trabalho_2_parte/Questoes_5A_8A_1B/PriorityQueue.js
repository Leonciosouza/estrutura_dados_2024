export class PriorityQueue {
    constructor() {
        this.items = [];
    }

    enqueueWithPriority(element, priority) {
        const newItem = { element, priority };
        let added = false;

        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].priority < priority) {
                this.items.splice(i, 0, newItem);
                added = true;
                break;
            }
        }

        if (!added) {
            this.items.push(newItem);
        }
    }

    dequeue() {
        if (this.items.length === 0) {
            return null;
        }
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    printQueue() {
        console.log(this.items.map(item => item.element)); // Exibe apenas os elementos
    }
}
