import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const PORT = 3000;

const temaJSON = `[
    {
    "ID": 1,
    "Nombre": "Programación en Python",
    "Descripción": "Introducción a la programación en Python, incluyendo sintaxis básica y estructuras de control.",
    "Palabras claves": ["Python", "Programación", "Variables", "Condicionales", "Bucles"],
    "Prácticas": [
        {
        "Título": "Hola Mundo en Python",
        "Descripción": "Escribir y ejecutar un programa que imprima 'Hola Mundo'.",
        "Objetivo": "Familiarizarse con la sintaxis básica y la ejecución de scripts en Python."
        },
        {
        "Título": "Estructuras Condicionales",
        "Descripción": "Implementar estructuras if-else en Python.",
        "Objetivo": "Aprender a tomar decisiones en base a condiciones."
        }
    ]
    },
    {
    "ID": 2,
    "Nombre": "Bases de Datos con SQL",
    "Descripción": "Conceptos básicos sobre bases de datos relacionales y lenguaje SQL.",
    "Palabras claves": ["SQL", "Bases de datos", "Consultas", "Tablas", "Registros"],
    "Prácticas": [
        {
        "Título": "Creación de una base de datos",
        "Descripción": "Definir y crear una base de datos con tablas relacionadas.",
        "Objetivo": "Comprender la estructura de las bases de datos relacionales."
        },
        {
        "Título": "Consultas Básicas en SQL",
        "Descripción": "Ejecutar consultas SELECT, INSERT, UPDATE y DELETE.",
        "Objetivo": "Manipular datos en una base de datos mediante SQL."
        }
    ]
    },
    {
    "ID": 3,
    "Nombre": "Desarrollo Web con HTML y CSS",
    "Descripción": "Introducción al diseño de páginas web con HTML y CSS.",
    "Palabras claves": ["HTML", "CSS", "Diseño web", "Front-end"],
    "Prácticas": [
        {
        "Título": "Creación de una página HTML",
        "Descripción": "Diseñar una página web simple con etiquetas HTML.",
        "Objetivo": "Comprender la estructura básica de una página web."
        },
        {
        "Título": "Estilización con CSS",
        "Descripción": "Aplicar estilos CSS a una página HTML.",
        "Objetivo": "Aprender a mejorar la presentación visual de un sitio web."
        }
    ]
    },
    {
    "ID": 4,
    "Nombre": "Redes de Computadoras",
    "Descripción": "Conceptos fundamentales sobre redes, protocolos y configuración básica.",
    "Palabras claves": ["Redes", "TCP/IP", "Protocolo", "Router", "Switch"],
    "Prácticas": [
        {
        "Título": "Configuración de una Red Local",
        "Descripción": "Conectar y configurar dispositivos en una red local.",
        "Objetivo": "Entender la topología y configuración de redes pequeñas."
        },
        {
        "Título": "Análisis de tráfico con Wireshark",
        "Descripción": "Capturar y analizar paquetes en una red.",
        "Objetivo": "Aprender a inspeccionar y diagnosticar problemas de red."
        }
    ]
    },
    {
    "ID": 5,
    "Nombre": "Seguridad Informática",
    "Descripción": "Principios de seguridad informática y mejores prácticas.",
    "Palabras claves": ["Seguridad", "Cifrado", "Firewall", "Autenticación"],
    "Prácticas": [
        {
        "Título": "Configuración de un Firewall",
        "Descripción": "Implementar reglas de seguridad en un firewall.",
        "Objetivo": "Aprender a proteger una red contra accesos no autorizados."
        },
        {
        "Título": "Cifrado de Archivos",
        "Descripción": "Encriptar y desencriptar archivos usando herramientas de cifrado.",
        "Objetivo": "Comprender el uso de algoritmos de cifrado en la protección de datos."
        }
    ]
    },
    {
    "ID": 6,
    "Nombre": "Inteligencia Artificial",
    "Descripción": "Conceptos básicos de inteligencia artificial y aprendizaje automático.",
    "Palabras claves": ["IA", "Machine Learning", "Redes neuronales", "Datos"],
    "Prácticas": [
        {
        "Título": "Clasificación de Datos con Machine Learning",
        "Descripción": "Utilizar un modelo de aprendizaje automático para clasificar datos.",
        "Objetivo": "Aprender a entrenar y evaluar modelos de machine learning."
        },
        {
        "Título": "Procesamiento de Lenguaje Natural",
        "Descripción": "Desarrollar un programa que analice texto con NLP.",
        "Objetivo": "Explorar el uso de IA en el procesamiento de texto."
        }
    ]
    }
]
  `;
const temaScript = JSON.parse(temaJSON);

app.use(express.static("public"));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/tema/:type', (req, res) => {
    const elegirTema = temaScript.find(r => r["Palabras claves"].some(palabra => palabra.toLowerCase() === req.params.type.toLowerCase()));
    res.json(elegirTema || {error: "Tema no encontrad"})
});

app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`));