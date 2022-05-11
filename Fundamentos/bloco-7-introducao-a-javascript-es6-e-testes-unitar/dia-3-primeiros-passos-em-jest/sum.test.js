const { sum } = require('./sum');

describe('Testa exercício 1', () => {

    test('Retorna soma de 4 e 5', () => {
        expect(sum(4, 5)).toBe(9)
    });
    test('Retorna soma de zero', () => {
        expect(sum(0, 0)).toBe(0)
    });
    test('Retorna erro se inserir uma string', () => {
        expect(() => sum('')).toThrow(Error)
    })
})