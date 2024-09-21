import SimpleLinkedList from "./SimpleLinkedList.js";


test('Intercala duas listas corretamente', () => {
    const lista1 = new SimpleLinkedList();
    lista1.append(1);
    lista1.append(3);
    lista1.append(5);

    const lista2 = new SimpleLinkedList();
    lista2.append(2);
    lista2.append(4);
    lista2.append(6);

    const listaIntercalada = lista1.intercalarNosListas(lista2);
    expect(listaIntercalada.toArray()).toEqual([1, 2, 3, 4, 5, 6]);
});


test('Intercala listas de tamanhos diferentes corretamente', () => {
    const lista1 = new SimpleLinkedList();
    lista1.append(1);
    lista1.append(3);

    const lista2 = new SimpleLinkedList();
    lista2.append(2);
    lista2.append(4);
    lista2.append(6);
    lista2.append(8);

    const listaIntercalada = lista1.intercalarNosListas(lista2);
    expect(listaIntercalada.toArray()).toEqual([1, 2, 3, 4, 6, 8]);
});

test('Remove duplicados corretamente', () => {
    const lista = new SimpleLinkedList();
    lista.append(1);
    lista.append(2);
    lista.append(3);
    lista.append(3); // duplicado
    lista.append(4);
    lista.append(5);

    lista.removeTodosDuplicados();
    expect(lista.toArray()).toEqual([1, 2, 3, 4, 5]); // Só uma ocorrência de 3
});

test('Remove duplicados com lista sem duplicatas', () => {
    const lista = new SimpleLinkedList();
    lista.append(1);
    lista.append(2);
    lista.append(3);
    lista.append(4);
    lista.append(5);

    lista.removeTodosDuplicados();
    expect(lista.toArray()).toEqual([1, 2, 3, 4, 5]);
});
