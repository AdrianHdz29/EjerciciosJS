// console.log('Hola mundo')

// ## 1. Comentarios en una linea y multilinea
console.log('1. Comentarios en una linea y multilinea (los comentarios estan en el archivo)\n')

//Este es un comentario de una linea
//console.log('Hola mundo')

/*
Este es un campo de comentario
Ejemplo de codigo comentado:

function suma(a, b) {
    return a + b;
}

console.log(suma(3, 5)); // Salida: 8
*/

// 2. Declara diferentes tipos de variables y mostrar sus valores por consola
console.log('2. Declara diferentes tipos de variables y mostrar sus valores por consola\n')

var nombre = "Juan";       // Cadena
let edad = 25;             // Entero
const esEstudiante = true; // Booleano
let precio = 99.99;        // Decimal
let colores = ["rojo", "azul", "verde"]; // Array
let persona = { nombre: "Ana", edad: 30 }; // Objeto
let indefinido;            // Undefined
let nulo = null;           // Nulo

// Mostrar valores en la consola
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Es estudiante:", esEstudiante);
console.log("Precio:", precio);
console.log("Colores:", colores);
console.log("Persona:", persona);
console.log("Indefinido:", indefinido);
console.log("Nulo:", nulo);

console.log('\n-------------------------------------------------------\n')
// 3. Crear un array con al menos cinco elementos de diferentes tipos
console.log('3. Crear un array con al menos cinco elementos de diferentes tipos\n')

let datos = ["Hola", 42, true, { nombre: "Ana" }, [1, 2, 3]];

console.log(datos);

console.log('\n-------------------------------------------------------\n')
// 4. Escribe una función que tome dos números y aplique una operación
console.log('4. Escribe una función que tome dos números y aplique una operación\n')

function suma(a, b) {
    return a * b;
}

console.log(suma(3, 10));

console.log('\n-------------------------------------------------------\n')
// 5. Crea una función flecha que reciba un string y lo imprima en mayúsculas
console.log('5. Crea una función flecha que reciba un string y lo imprima en mayúsculas\n')

const mayus1 = texto => console.log(texto.toUpperCase());
mayus1("las hormigas bailan");

console.log('\n-------------------------------------------------------\n')
// 6. Implementa un bucle que imprima los números del 1 al 10
console.log('6. Implementa un bucle que imprima los números del 1 al 10\n')

console.log('Bucle For:\n')
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log('Bucle While:\n')
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}+

console.log('\n-------------------------------------------------------\n')
// 7. Crea un objeto que represente un objeto del mundo real con sus respectivas propiedades
console.log('7. Crea un objeto que represente un objeto del mundo real con sus respectivas propiedades\n')

let humano = { nombre: "Eva", apellido: "Gomez", edad: 21, peso: 70, estatura: 1.70 };
console.log("Humano:", humano);

console.log('\n-------------------------------------------------------\n')
// 8. Agrega un método al objeto creado anteriormente e imprima una descripción del mismo
console.log('8. Agrega un método al objeto creado anteriormente e imprima una descripción del mismo\n')

let humano1 = {
    nombre: "Eva",
    apellido: "Gomez",
    edad: 21,
    peso: 70,
    estatura: 1.70,
    descripcion: function(){
        return `Soy ${this.nombre} ${this.apellido}, tengo ${this.edad} años, mido ${this.estatura}m y peso ${this.peso}kg.`;
    }
};
console.log(humano1.descripcion());

console.log('\n-------------------------------------------------------\n')
// 9. Crea un módulo que contenga funciones matemáticas básicas (suma, resta, etc.) y utilízalo en otro archivo
console.log('9. Crea un módulo que contenga funciones matemáticas básicas (suma, resta, etc.) y utilízalo en otro archivo\n')

const matematicas = require('./matematica');

// Usar las funciones del módulo
console.log("Suma: ", matematicas.suma(5, 3));             // Suma
console.log("Resta: ", matematicas.resta(50, 26));           // Resta
console.log("Multiplicación: ", matematicas.multiplicacion(6, 3));  // Multiplicación
console.log("División: ", matematicas.division(144, 6));    // División

console.log('\n-------------------------------------------------------\n')
// 10. Escribe una función que simule una operación asincrónica utilizando setTimeout y maneje el resultado con un callback
console.log('10. Escribe una función que simule una operación asincrónica utilizando setTimeout y maneje el resultado con un callback\n')

function operacion(callback) {
    console.log("Operación iniciada...");

    // Simula un retraso de 2 segundos
    setTimeout(() => {
        const resultado = "Operación completada";
        callback(resultado);
    }, 5000);
}

// Usamos el callback para manejar el resultado
operacion((resultado) => {
    console.log(resultado);
});

console.log('\n-------------------------------------------------------\n')
// 11. Escribe un bloque de código que intente convertir una cadena a un número y que maneje cualquier error que pueda ocurrir
console.log('11. Escribe un bloque de código que intente convertir una cadena a un número y que maneje cualquier error que pueda ocurrir\n')

function convertirANumero(cadena) {
    try {
        const numero = Number(cadena); // Intentamos convertir la cadena a número
        if (isNaN(numero)) {
            throw new Error("No se pudo convertir a un número válido");
        }
        console.log("Número convertido:", numero);
    } catch (error) {
        console.error("Error:", error.message); // Maneja cualquier error
    }
}

convertirANumero("1234");
convertirANumero("R2D2");
convertirANumero("15");
convertirANumero("999");
convertirANumero("paco");