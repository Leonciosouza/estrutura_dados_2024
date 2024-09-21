import QueueObject from "./QueueObject.js";

test('Compacta intervalos consecutivos corretamente', () => {
    let fila = new QueueObject();
    fila.enqueue(1);
    fila.enqueue(2);
    fila.enqueue(3);
    fila.enqueue(5);
    fila.enqueue(6);
    fila.enqueue(7);

    expect(fila.compactarIntervalos()).toEqual(["(1-3)", "(5-7)"]);
});

test('Cria intervalos corretamente quando não há muitos consecutivos', () => {
    let fila = new QueueObject();
    fila.enqueue(1);
    fila.enqueue(2);
    fila.enqueue(4);
    fila.enqueue(5);
    fila.enqueue(7);

    expect(fila.compactarIntervalos()).toEqual(["(1-2)", "(4-5)", "(7-7)"]);
});

test('Trata intervalos isolados', () => {
    let fila = new QueueObject();
    fila.enqueue(10);
    fila.enqueue(11);
    fila.enqueue(15);

    expect(fila.compactarIntervalos()).toEqual(["(10-11)", "(15-15)"]);
});

test('Trata fila vazia', () => {
    let fila = new QueueObject();
    expect(fila.compactarIntervalos()).toEqual([]);
});