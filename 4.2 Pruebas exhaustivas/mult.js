function multiplicacionDos(a, b) {
    return a * b;
}
function multiplicacion(a, b) {
    if(
        typeof a !== 'number' || typeof b !== 'number'
        ||
        !Number.isFinite(a) || !Number.isFinite(b)
        ||
        !Number.isSafeInteger(a) || !Number.isSafeInteger(b)
    ){
        return NaN;
    }
    return a * b;
}

module.exports = {multiplicacion};

console.group('Pruebas manuales');
    //normal
    console.log('caso normal ', multiplicacion(2, 3));

    // caso normal decimal
    console.log('Caso con decimales ', multiplicacion(1.5, 4.5));

    // caso frontera
    console.log('Caso frontera ', multiplicacion(0, 5));
    console.log('Caso frontera ', multiplicacion(Number.MAX_SAFE_INTEGER, 2));
    // console.log(Number.MAX_SAFE_INTEGER)

    // caso frontera invalido
    // console.log('Caso frontera ', multiplicacion((Number.MAX_SAFE_INTEGER + 9), 2));
    console.log('Caso frontera ', multiplicacion(10000000000000000, 2));

    // caso invalido
    console.log('Caso invalido por literal ', multiplicacion('a', 2));
    console.log('Caso invalido por indefinido ', multiplicacion(undefined, 2));
    console.log('Caso sin argumentos ', multiplicacion());
    console.log('Caso por coersion de tipo ', multiplicacion('2', '3'));
    console.log('Caso por nulo ', multiplicacion(null, 5));

    // casos con argumentos negativos
    console.log('Caso por un negativo ', multiplicacion(-3, 5));
    console.log('Caso por dos negativos ', multiplicacion(-3, -2));
console.groupEnd();