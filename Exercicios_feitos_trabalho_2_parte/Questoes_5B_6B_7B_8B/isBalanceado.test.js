import isBalanceado from "./isBalanceado.js";

//const isBalanceado = require('./isBalanceado');

test('sequência "(]" não está balanceada', () => {
    expect(isBalanceado("(]")).toBe(false);
});

test('sequência "{[()]}" está balanceada', () => {
    expect(isBalanceado("{[()]}")).toBe(true);
});

test('sequência "[]{}())" está balanceada', () => {
    expect(isBalanceado("[]{}()")).toBe(true);
});

test('sequência "[(])" não está balanceada', () => {
    expect(isBalanceado("[(])")).toBe(false);
});