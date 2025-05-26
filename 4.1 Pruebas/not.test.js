test('verifica que dos valores no son iguales', () => {
  const a = 10;
  const b = 20;
  
  expect(a).not.toBe(b);
});

test('verifica que un texto no coincide', () => {
  const saludo = 'Hola';
  
  expect(saludo).not.toBe('Adiós');
});