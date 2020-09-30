/*
    Gunakan file ini untuk membuat test case dengan Jest
*/

const functions = require('../helpers');

test('1 + 1 = 2', () => {
    expect(functions.incrementQty(1)).toBe(2);
});

test('2 - 1 = 1', () => {
    expect(functions.decrementQty(2)).toBe(1);
});