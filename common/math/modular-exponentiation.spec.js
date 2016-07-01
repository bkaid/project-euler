'use strict';
const modularExponentiation = require('./modular-exponentiation').modularExponentiation;

describe('modularExponentiation', () => {
  // use samples from https://en.wikipedia.org/wiki/Modular_exponentiation
  it('should return result for known input', () => {
    expect(modularExponentiation(4, 13, 497)).toBe(445);
  });

  it('should return result for large input', () => {
    expect(modularExponentiation(999999, 999999, 1000000000)).toBe(998999999);
  });
});
