import LinkedList from "./rotacionarDireita(k).js";

// const LinkedList = require('./rotacionarDireita(k)');

test('rotacionarDireita em uma lista encadeada', () => {
    const list = new LinkedList();
    list.add(4);
    list.add(28);
    list.add(19);
    list.add(25);
    list.add(16);
    list.add(24);
    list.add(3);

    list.rotacionarDireita(3);
    expect(list.display()).toEqual([16, 24, 3, 4, 28, 19, 25]);

    list.rotacionarDireita(2);
    expect(list.display()).toEqual([19, 25, 16, 24, 3, 4, 28]);
});

test('rotacionarDireita com k maior que o tamanho da lista', () => {
    const list = new LinkedList();
    list.add(4);
    list.add(28);
    list.add(19);
    list.add(25);
    list.add(16);
    list.add(24);
    list.add(3);

    list.rotacionarDireita(10);
    expect(list.display()).toEqual([16, 24, 3, 4, 28, 19, 25]);
});

test('rotacionarDireita com k igual ao tamanho da lista', () => {
    const list = new LinkedList();
    list.add(4);
    list.add(28);
    list.add(19);
    list.add(25);
    list.add(16);
    list.add(24);
    list.add(3);

    list.rotacionarDireita(7);
    expect(list.display()).toEqual([4, 28, 19, 25, 16, 24, 3]);
});
