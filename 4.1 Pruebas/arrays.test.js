test('verifica lista de frutas en un array', () => {
  const frutas = ['manzana', 'banana', 'naranja'];
  
  expect(frutas).toContain('banana');
  
  expect(frutas).not.toContain('papa');
});