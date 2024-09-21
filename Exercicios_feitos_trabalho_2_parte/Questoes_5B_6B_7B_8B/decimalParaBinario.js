class Pilha {
    constructor() {
        this.itens = [];
    }

    empilhar(elemento) {
        this.itens.push(elemento);
    }

    desempilhar() {
        if (this.itens.length === 0) {
            return null;
        }
        return this.itens.pop();
    }

    estaVazia() {
        return this.itens.length === 0;
    }
}

function decimalParaBinario(numero) {
    const pilha = new Pilha();
    let num = numero;

    while (num > 0) {
        const resto = Math.floor(num % 2);
        pilha.empilhar(resto);
        num = Math.floor(num / 2);
    }

    let binario = '';
    while (!pilha.estaVazia()) {
        binario += pilha.desempilhar().toString();
    }

    return binario;
}

module.exports = { decimalParaBinario, Pilha };
