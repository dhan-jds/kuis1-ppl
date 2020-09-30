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

test('50000 * 2 = 100000', () => {
    expect(functions.total(50000, 2)).toBe(100000);
});

test('200000 - 50000 * 3 = 50000', () => {
    expect(functions.byr(200000, 50000, 3)).toBe(50000);
});

test('CODE50 = diskon 50%', () => {
    expect(functions.kode(50000, 4, 50)).toBe(100000);
});