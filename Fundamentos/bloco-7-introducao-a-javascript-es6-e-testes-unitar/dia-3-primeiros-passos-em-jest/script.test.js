const {sum, summationOf} = require('./script');



    test('Testa soma de 2 valores', () => {
        expect(sum(1, 2)).toBe(3);
    } );
    test('Testa soma de 2 valores', () => {
        expect(sum(5.1, 6.55)).toBeCloseTo(11.65);
    } );

    test('A função summationOf existe' , () => {
        expect(typeof summationOf).toBe('function')
    })
    test('Retorna o resultado da somatória', () => {
        expect(summationOf(3)).toBe(6);
    } );

