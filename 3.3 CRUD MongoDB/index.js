import express from 'express';
import dotenv from 'dotenv';
import { MongoClient, ObjectId } from 'mongodb';

dotenv.config();
const app = express();
const puerto = 3000;

app.get('/', (req, res) => {
    res.send('Bienvenido a mi API CRUD');
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/usuarios', async (req, res) => {
    try {
        const ahora = new Date();
        const nuevoUsuario = {
            nombre: req.body.nombre,
            edad: Number(req.body.edad),
            correo: req.body.correo,
            createdAt: ahora,
            updatedAt: ahora
        };
        const resultado = await db.collection('usuarios').insertOne(nuevoUsuario);
        res.status(201).json({ message: 'Usuario creado', id: resultado.insertedId });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
});

app.put('/usuario/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = { _id: new ObjectId(id) };

        const datosactualizados = {};
        if (req.body.nombre !== undefined) datosactualizados.nombre = req.body.nombre;
        if (req.body.edad !== undefined) datosactualizados.edad = Number(req.body.edad);
        if (req.body.correo !== undefined) datosactualizados.correo = req.body.correo;
        datosactualizados.updatedAt = new Date();

        const actualizacion = { $set: datosactualizados };
        const resultado = await db.collection('usuarios').findOneAndUpdate(
            usuario,
            actualizacion,
            { returnDocument: 'after' }
        );
        res.status(200).json(resultado.value);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
});

app.delete('/usuario/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = { _id: new ObjectId(id) };
        const resultado = await db.collection('usuarios').deleteOne(usuario);
        res.status(200).json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
});

app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await db.collection('usuarios').find().toArray();
        res.status(200).json(usuarios);
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        res.status(500).json({
            error: 'Error al obtener los usuarios'
        });
    }
});

app.get('/usuario/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await db.collection('usuarios').findOne({ _id: new ObjectId(id) });
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
});

// Conexion a la base de datos MongoDB

const uri = process.env.uri;
const client = new MongoClient(uri);
let db;

async function conectarDB() {
    try {
        await client.connect();
        db = client.db('test');
        console.log('Conexión exitosa a la base de datos');
    } catch (error) {
        console.error('Error al conectar a la base de datos', error);
    }
}

await conectarDB();

app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});