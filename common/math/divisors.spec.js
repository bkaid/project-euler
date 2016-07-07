'use strict';
const divisors = require('./divisors');

describe('properDivisorSum', () => {
  it('sums proper divisors for known input', () => {
    expect(divisors.properDivisorSum(0)).toBe(0);
    expect(divisors.properDivisorSum(1)).toBe(0);
    expect(divisors.properDivisorSum(220)).toBe(284);
  });
});
