const {validarPassword} = require('./password');

describe('Casos pruebas JEST', () => {
    test('Caso normal válido', () => {
        expect(validarPassword('Mexico2023@')).toBe(true);
    });

    // Pruebas para cada requisito individual
    test('Caso Corto', () => {
        expect(validarPassword('Chile3@')).toBe(false);
    });
    test('Caso Sin mayúscula', () => {
        expect(validarPassword('chihuahua2023@')).toBe(false);
    });
    test('Caso Sin minúscula', () => {
        expect(validarPassword('MEXICO2023@')).toBe(false);
    });
    test('Caso Sin número', () => {
        expect(validarPassword('QuintanaRoo@')).toBe(false);
    });
    test('Caso Sin carácter especial', () => {
        expect(validarPassword('Pantera2023a')).toBe(false);
    });
    test('Caso Con espacios', () => {
        expect(validarPassword('Gato ta2023@')).toBe(false);
    });
    test('Caso Sin palabra significativa', () => {
        expect(validarPassword('Xyz123!@#')).toBe(false);
    });

    // Casos extremos/frontera
    test('Caso Minima longitud', () => {
        expect(validarPassword('Bogo23@@')).toBe(true);
    });
    test('Caso Máxima longitud', () => {
        expect(validarPassword('Bogo'.repeat(250) + '2023@')).toBe(true);
    });

    // Casos vacíos/erróneos
    test('Caso Cadena vacía', () => {
        expect(validarPassword('')).toBe(false);
    });
    test('Caso Valor null', () => {
        expect(validarPassword(null)).toBe(false);
    });
    test('Caso Valor undefined', () => {
        expect(validarPassword(undefined)).toBe(false);
    });
    test('Caso Tipo incorrecto', () => {
        expect(validarPassword(12345678)).toBe(false);
    });
});