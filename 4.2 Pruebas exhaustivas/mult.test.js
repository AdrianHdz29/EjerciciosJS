const {multiplicacion} = require('./mult');

describe('Casos pruebas JEST', () => {
    test('mult de 2x3', () => {
        expect(multiplicacion(2,3)).toBe(6);
    });
    test('mult de 1.5x4.5 caso decimal', () => {
        expect(multiplicacion(1.5,4.5)).toBe(6.75);
    });
    test('mult de 0x5 caso frontera', () => {
        expect(multiplicacion(0,5)).toBe(0);
    });
    test('mult de NumeroMaximo x 2 caso frontera', () => {
        expect(multiplicacion(Number.MAX_SAFE_INTEGER,2)).toBe(18014398509481982);
    });
    test('mult de Mayor a NumeroMaximo x 2 caso frontera invalida', () => {
        expect(multiplicacion(100000000000000000000, 2)).toBeNaN();
    });
    test('mult de "a" x 2 caso de literal', () => {
        expect(multiplicacion('a', 2)).toBeNaN();
    });
    test('mult de indefinido x 2 caso identificado', () => {
        expect(multiplicacion(undefined, 2)).toBeNaN();
    });
    test('mult caso sin argumento', () => {
        expect(multiplicacion()).toBeNaN();
    });
    test('mult de "2" x "3" caso coersion de tipo', () => {
        expect(multiplicacion('2', '3')).not.toBe(6);
    });
    test('mult de null x 2 caso nulo', () => {
        expect(multiplicacion(null, 5)).toBeNaN();
    });
    test('mult de -3x2 caso de un negrativo', () => {
        expect(multiplicacion(-3,2)).toBe(-6);
    });
    test('mult de -3x-2 caso de dos negativos', () => {
        expect(multiplicacion(-3,-2)).toBe(6);
    });
});