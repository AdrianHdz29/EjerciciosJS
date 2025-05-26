function loginUsuario(usuario, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usuario === 'admin' && password === '1234') {
        resolve({ token: 'abc123', rol: 'admin' });
      } else {
        reject('Credenciales inválidas');
      }
    }, 100);
  });
}

module.exports = { loginUsuario };