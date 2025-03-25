import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const PORT = 3000;

const recetaJSON = `[
  {
    "id": "0001",
    "tipo": "taco",
    "nombre": "Taco de Carne Asada",
    "precio": 25.00,
    "ingredientes": {
      "proteina": {
        "nombre": "Res",
        "preparacion": "Asada"
      },
      "salsa": {
        "nombre": "Salsa roja",
        "picor": "Alto"
      },
      "acompañamientos": [
        {
          "nombre": "Cebolla",
          "cantidad": "1 cucharada",
          "ingredientes": ["Cebolla morada", "Cilantro", "Limón", "Sal"]
        },
        {
          "nombre": "Pico de gallo",
          "cantidad": "2 cucharadas",
          "ingredientes": ["Tomate", "Cebolla", "Cilantro", "Jalapeño", "Limón", "Sal"]
        }
      ]
    }
  },
  {
    "id": "0002",
    "tipo": "taco",
    "nombre": "Taco al Pastor",
    "precio": 22.00,
    "ingredientes": {
      "proteina": {
        "nombre": "Cerdo",
        "preparacion": "Asado"
      },
      "salsa": {
        "nombre": "Salsa Verde",
        "picor": "Medio"
      },
      "acompañamientos": [
        {
          "nombre": "Piña",
          "cantidad": "1 rebanada"
        },
        {
          "nombre": "Cebolla y cilantro",
          "cantidad": "1 cucharada"
        }
      ]
    }
  },
  {
    "id": "0003",
    "tipo": "taco",
    "nombre": "Taco de Barbacoa",
    "precio": 30.00,
    "ingredientes": {
      "proteina": {
        "nombre": "Borrego",
        "preparacion": "Cocido en penca de maguey"
      },
      "salsa": {
        "nombre": "Salsa borracha",
        "picor": "Medio"
      },
      "acompañamientos": [
        {
          "nombre": "Cebolla y cilantro",
          "cantidad": "1 cucharada"
        }
      ]
    }
  },
  {
    "id": "0004",
    "tipo": "taco",
    "nombre": "Taco Dorado",
    "precio": 28.00,
    "ingredientes": {
      "proteina": {
        "nombre": "Pollo",
        "preparacion": "Frito"
      },
      "salsa": {
        "nombre": "Salsa de Tomate",
        "picor": "Medio"
      },
      "acompañamientos": [
        {
          "nombre": "Lechuga rallada",
          "cantidad": "2 cucharadas"
        },
        {
          "nombre": "Crema",
          "cantidad": "1 cucharada"
        },
        {
          "nombre": "Queso rallado",
          "cantidad": "1 cucharada"
        }
      ]
    }
  }
]`;
const recetaTacos = JSON.parse(recetaJSON);

app.use(express.static("public"));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/receta/:type', (req, res) => {
    const elegirTaco = recetaTacos.find(r => r.ingredientes.proteina.nombre.toLowerCase() === req.params.type.toLowerCase());
    res.json(elegirTaco || {error: "Receta no encontrada"})
});

app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`));
