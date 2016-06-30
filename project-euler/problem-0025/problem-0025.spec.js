'use strict';
const problem25 = require('./problem-0025');

describe('nDigitFibonacciIndex', () => {
  it('calculates Fibonacci number for known input', () => {
    expect(problem25.nDigitFibonacciIndex(3)).toBe(12);
  });
});
