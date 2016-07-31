'use strict';
const problem31 = require('./problem-0031');

describe('coinChangePermutations', () => {
  it('calculates the number of permutations to make change for N given coin values', () => {
    expect(problem31.coinChangePermutations([1,2,3], 5)).toEqual(5);
  });
});
