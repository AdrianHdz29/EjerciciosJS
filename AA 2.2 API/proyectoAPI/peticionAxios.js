import axios from "axios";

// URL de la API de SpaceX para obtener los últimos lanzamientos
const url = 'https://api.spacexdata.com/v4/launches/latest';

axios.get(url)
  .then(response => {
    console.log('Último lanzamiento de SpaceX:');
    console.log(`Misión: ${response.data.name}`);
    console.log(`Fecha: ${new Date(response.data.date_utc).toLocaleString()}`);
    console.log(`Detalles: ${response.data.details || 'No disponible'}`);
  })
  .catch(error => {
    console.error('Error al obtener datos de la API:', error);
  });
