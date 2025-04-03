import axios from "axios";

const loginUrl = 'https://reqres.in/api/login';
const dataUrl = 'https://reqres.in/api/users?page=2';

// 2️⃣ Enviar usuario y contraseña en una petición POST y obtener el token
axios.post(loginUrl, {
  email: 'eve.holt@reqres.in',
  password: 'cityslicka'
})
.then(response => {
  const token = response.data.token;
  console.log('Token recibido:', token);

  // 3️⃣ Usar el token en el encabezado para acceder a datos protegidos
  return axios.get(dataUrl, {
    headers: { Authorization: `Bearer ${token}` }
  });
})
.then(response => {
  console.log('Datos protegidos:', response.data);
})
.catch(error => {
  console.error('Error:', error.response ? error.response.data : error.message);
});