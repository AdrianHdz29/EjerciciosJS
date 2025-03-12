import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log(__dirname);

const app = express();
const port = 3000;

var nombreEquipo = "";

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// Middleware para procesar el cuerpo de la solicitud
function registrador(req, res, next) {
    console.log(req.body); // Muestra los datos enviados por el usuario
    if (req.body["mascota"] && req.body["adjetivo"]) {
        nombreEquipo = req.body["mascota"] + req.body["adjetivo"]; // Concatenar los datos enviados
    }
    next(); // Continuar con la siguiente función
}

// Se aplica el middleware solo a la ruta POST /submit
app.post("/submit", registrador, (req, res) => {
    //res.send("Datos recibidos");
    res.send(`<h1>El nombre de tu equipo es:</h1><h2><strong>${nombreEquipo} ✌️</strong></h2>`);
});

app.listen(port, () => {
    console.log(`Servidor ejecutándose en el puerto ${port}`);
});