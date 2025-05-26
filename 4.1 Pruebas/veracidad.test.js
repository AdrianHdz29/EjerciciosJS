test('verifica valor null', () => {
  const valor = null;
  expect(valor).toBeNull();
  expect(valor).toBeDefined();
  expect(valor).not.toBeUndefined();
});

test('verifica valor undefined', () => {
  let valor;
  expect(valor).toBeUndefined();
  expect(valor).not.toBeDefined();
  expect(valor).not.toBeNull();
});

test('verifica valor definido', () => {
  const valor = 'cualquier valor';
  expect(valor).toBeDefined();
  expect(valor).not.toBeUndefined();
  expect(valor).not.toBeNull();
});