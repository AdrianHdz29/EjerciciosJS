// matematica.js

// Función de suma
function suma(a, b) {
    return a + b;
}

// Función de resta
function resta(a, b) {
    return a - b;
}

// Función de multiplicación
function multiplicacion(a, b) {
    return a * b;
}

// Función de división
function division(a, b) {
    if (b === 0) {
        return "No se puede dividir entre cero";
    }
    return a / b;
}

// Exportar las funciones para que se puedan usar en otros archivos
module.exports = { suma, resta, multiplicacion, division };
