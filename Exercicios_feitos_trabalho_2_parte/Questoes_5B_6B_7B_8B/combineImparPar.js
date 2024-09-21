class No {
    constructor(valor) {
        this.valor = valor;
        this.proximo = null;
    }
}

class ListaEncadeada {
    constructor() {
        this.cabeca = null;
    }

    adicionar(valor) {
        const novoNo = new No(valor);
        if (!this.cabeca) {
            this.cabeca = novoNo;
        } else {
            let atual = this.cabeca;
            while (atual.proximo) {
                atual = atual.proximo;
            }
            atual.proximo = novoNo;
        }
    }

    combineImparPar() {
        if (!this.cabeca || !this.cabeca.proximo) return;

        let impar = this.cabeca;
        let par = this.cabeca.proximo;
        const inicioPar = par;

        while (par && par.proximo) {
            impar.proximo = par.proximo;
            impar = impar.proximo;
            par.proximo = impar.proximo;
            par = par.proximo;
        }

        impar.proximo = inicioPar;
    }

    imprimir() {
        let atual = this.cabeca;
        const elementos = [];
        while (atual) {
            elementos.push(atual.valor);
            atual = atual.proximo;
        }
        console.log(elementos.join(' -> '));
    }
}

export default ListaEncadeada;

//module.exports = ListaEncadeada;