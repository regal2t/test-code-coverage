/**
 * Divides two numbers.
 * @param {number} a - The numerator.
 * @param {number} b - The denominator.
 * @returns {number} The result of a divided by b.
 * @throws {Error} If division by zero is attempted.
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

module.exports = { divide };
