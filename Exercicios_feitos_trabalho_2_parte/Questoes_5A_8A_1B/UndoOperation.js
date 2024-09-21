import BinarySearchTree from "./BinarySearchTree.js";

class Operation {
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
}

export class UndoOperationAVLTree extends BinarySearchTree {
    constructor() {
        super();
        this.operationStack = [];
    }

    insert(value) {
        super.insert(value);
        this.operationStack.push(new Operation('insert', value));
    }

    removeJohn(value) {
        const success = super.removeJohn(value);
        if (success) {
            this.operationStack.push(new Operation('remove', value));
        }
        return success;
    }

    undo() {
        if (this.operationStack.length === 0) {
            console.log("Nada a desfazer!");
            return;
        }

        const lastOperation = this.operationStack.pop();
        if (lastOperation.type === 'insert') {
            super.removeJohn(lastOperation.value);
        } else if (lastOperation.type === 'remove') {
            super.insert(lastOperation.value);
        }
    }
}
