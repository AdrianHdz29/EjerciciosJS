const fs = require('fs');

// usar el metodo writeFile para escribir un archivo
// fs.writeFile(file, data[, options], callback)

// fs.writeFile("archivo.txt", "texto-contenido del archivo", (err) => {
//     if(err)throw err;
//     console.log("El archivo se ha creado");
// });

fs.readFile("archivo.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
});