const { add, subtract, divide, multiply } = require('../src/math1');

describe('Math Functions', () => {
    test('add: adds two numbers', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('subtract: subtracts second number from first', () => {
        expect(subtract(5, 3)).toBe(2);
    });

    test('divide: divides first number by second', () => {
        expect(divide(6, 2)).toBe(3);
    });

    test('divide: throws error when dividing by zero', () => {
        expect(() => divide(4, 0)).toThrow("Cannot divide by zero");
    });

    test('multiply: multiplies two numbers', () => {
        expect(multiply(2, 3)).toBe(6);
    });

    // Deliberately failing test
    test('multiply: intentionally fail for SonarQube analysis', () => {
        expect(multiply(2, 3)).toBe(7); // This will fail
    });
});
