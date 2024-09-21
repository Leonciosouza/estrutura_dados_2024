function isBalanceado(sequencia) {
    const pilha = [];
    const pares = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let char of sequencia) {
        if (pares[char]) {
            pilha.push(char);
        } else {
            const topo = pilha.pop();
            if (pares[topo] !== char) {
                return false;
            }
        }
    }

    return pilha.length === 0;
}

module.exports = isBalanceado;
