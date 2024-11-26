// tests/math.test.js
const { divide } = require('../src/math');

describe('divide function', () => {
  test('divides two positive numbers', () => {
    expect(divide(6, 3)).toBe(2);
  });

  test('divides a positive number by a negative number', () => {
    expect(divide(6, -3)).toBe(-2);
  });

  test('divides a negative number by a positive number', () => {
    expect(divide(-6, 3)).toBe(-2);
  });

  test('throws error when dividing by zero', () => {
    expect(() => divide(6, 0)).toThrow('Cannot divide by zero');
  });
});
