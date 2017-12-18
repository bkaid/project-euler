'use strict';
const problem10 = require('./problem-0010');

describe('sumOfPrimes', () => {
  it('should sum primes below known input', () => {
    expect(problem10.sumOfPrimes(9)).toBe(17);
    expect(problem10.sumOfPrimes(10)).toBe(17);
  });
});
