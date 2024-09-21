import ListaEncadeada from "./combineImparPar.js";

//const ListaEncadeada = require('./combineImparPar');

test('combineImparPar reorganiza a lista corretamente', () => {
    const lista = new ListaEncadeada();
    lista.adicionar(4);
    lista.adicionar(16);
    lista.adicionar(19);
    lista.adicionar(11);
    lista.adicionar(3);
    lista.adicionar(28);
    lista.adicionar(24);
    lista.adicionar(25);

    lista.combineImparPar();

    let atual = lista.cabeca;
    const resultado = [];
    while (atual) {
        resultado.push(atual.valor);
        atual = atual.proximo;
    }

    expect(resultado).toEqual([4, 19, 3, 24, 16, 11, 28, 25]);
});
