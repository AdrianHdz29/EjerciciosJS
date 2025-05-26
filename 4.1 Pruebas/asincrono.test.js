const { loginUsuario } = require('./login');

test('login correcto debe retornar token', async () => {
  await expect(loginUsuario('admin', '1234'))
    .resolves.toEqual({
      token: 'abc123',
      rol: 'admin'
    });
});

test('login incorrecto debe fallar', async () => {
  await expect(loginUsuario('invitado', '0000'))
    .rejects.toMatch('Credenciales inválidas');
});