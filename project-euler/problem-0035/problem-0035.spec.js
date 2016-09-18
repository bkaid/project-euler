'use strict';
const problem35 = require('./problem-0035');

describe('circularPrimes', () => {
  it('contains known circular primes', () => {
    let result = problem35.circularPrimes(100);
    expect(result.length).toEqual(13);
    expect(result).toEqual([2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, 97]);
  });
});
