import { Pilha , decimalParaBinario } from "./decimalParaBinario.js";

//const { decimalParaBinario } = require('./decimalParaBinario');

test('Converte 10 para binário', () => {
    expect(decimalParaBinario(10)).toBe('1010');
});

test('Converte 0 para binário', () => {
    expect(decimalParaBinario(0)).toBe('');
});

test('Converte 255 para binário', () => {
    expect(decimalParaBinario(255)).toBe('11111111');
});

test('Converte 1 para binário', () => {
    expect(decimalParaBinario(1)).toBe('1');
});

test('Converte 2 para binário', () => {
    expect(decimalParaBinario(2)).toBe('10');
});
