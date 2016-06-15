'use strict';
const problem8 = require('./problem-0008');

describe('largestProduct', () => {
  it('should calculate largest product of adjacent digits for known input', () => {
    expect(problem8.largestProduct('3675356291', 5)).toBe(3150);
    expect(problem8.largestProduct('2709360626', 5)).toBe(0);
  });
});
