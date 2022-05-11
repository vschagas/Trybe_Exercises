const {sum, summationOf} = require('./script');

    describe('teste unitários', () => {
    test('Testa soma de 2 valores', () => {
        expect(sum(5.1, 6.55)).toBeCloseTo(11.65);
    } );

    test('A função summationOf existe' , () => {
        expect(typeof summationOf).toBe('function')
    }) 
})


/* professionalBoard[1].specialities[0]*/

 