test('comparaciones básicas con 10', () => {
  const numero = 10;
  
  expect(numero).toBeGreaterThan(5);
  expect(numero).not.toBeGreaterThan(15);
  
  expect(numero).toBeLessThan(20);
  expect(numero).not.toBeLessThan(5);
  
  expect(numero).toBeGreaterThanOrEqual(10);
  expect(numero).toBeGreaterThanOrEqual(8);
});