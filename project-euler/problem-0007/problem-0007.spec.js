'use strict';
const problem7 = require('./problem-0007');

describe('nthPrime', () => {
  it('should calculate nth prime for known input', () => {
    expect(problem7.nthPrime(3)).toBe(5);
    expect(problem7.nthPrime(6)).toBe(13);
    expect(problem7.nthPrime(1)).toBe(2);
  });
});
