'use strict';
const factorial = require('./factorial').factorial;

describe('factorial', () => {
  it('should calculate proper result', () => {
    expect(factorial(0).toNumber()).toBe(1);
    expect(factorial(1).toNumber()).toBe(1);
    expect(factorial(2).toNumber()).toBe(2);
    expect(factorial(3).toNumber()).toBe(6);
    expect(factorial(4).toNumber()).toBe(24);
  });
});
