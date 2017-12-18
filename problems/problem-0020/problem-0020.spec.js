'use strict';
const problem20 = require('./problem-0020');

describe('factorialDigitSum', () => {
  it('calculates digit sum for known input', () => {
    expect(problem20.factorialDigitSum(10)).toBe(27);
  });
});
