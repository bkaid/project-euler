'use strict';
const problem12 = require('./problem-0012');

describe('firstTriangularNumberWithDivisorCount', () => {
  it('calculates for given sample input', () => {
    expect(problem12.firstTriangularNumberWithDivisorCount(5)).toBe(28);
  });
});

describe('nthTriangularNumber', () => {
  it('calculates for given sample input', () => {
    expect(problem12.nthTriangularNumber(7)).toBe(28);
  });
});

describe('factorCount', () => {
  it('calculates for given sample input', () => {
    expect(problem12.factorCount(28)).toBe(6);
    expect(problem12.factorCount(196)).toBe(9);
    expect(problem12.factorCount(100000000)).toBe(81);
  });

  it('calculates for edge case 1', () => {
    expect(problem12.factorCount(1)).toBe(1);
  });

  it('calculates for edge case 2', () => {
    expect(problem12.factorCount(2)).toBe(2);
  });

  it('calculates for large primes', () => {
    expect(problem12.factorCount(32416190071)).toBe(2);
  });
});
