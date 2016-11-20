'use strict';
const prime = require('./pandigital');

describe('isPandigital', () => {
  it('should return true for numbers with digits 1-9', () => {
    expect(prime.isPandigital(123456789)).toBeTruthy();
    expect(prime.isPandigital(975324681)).toBeTruthy();
  });
  it('should return true for pandigital numbers with less than 9 digits', () => {
    expect(prime.isPandigital(321)).toBeTruthy();
    expect(prime.isPandigital(54321)).toBeTruthy();
  });
  it('should return false if not pandigital', () => {
    expect(prime.isPandigital(456)).toBeFalsy();
    expect(prime.isPandigital(1234567891)).toBeFalsy();
  });
});
