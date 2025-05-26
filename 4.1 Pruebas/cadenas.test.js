test('El texto contiene "Mundo"', () => {
  expect('Habia una vez un Mundo en el que todo era posible').toMatch('Mundo');
});

test('El correo tiene formato válido', () => {
  expect('ejemplo@email.com').toMatch(/\S+@\S+\.\S+/);
});