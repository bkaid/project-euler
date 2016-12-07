'use strict';
const gcd = require('./gcd');

describe('gcd', () => {
  it('calculates greatest common divisor', () => {
    expect(gcd(12, 8)).toBe(4);
    expect(gcd(3, 4)).toBe(1);
  });
});
