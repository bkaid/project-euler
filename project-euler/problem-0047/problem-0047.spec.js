'use strict';
const problem47 = require('./problem-0047');

describe('consecutiveDistinctPrimeFactors', () => {
  it('finds first consecutive numbers with distinct prime factors for known input', () => {
    let max = Number.MAX_SAFE_INTEGER;
    expect(problem47.consecutiveDistinctPrimeFactors(max, 1, 2, 2)).toEqual([14]);
    expect(problem47.consecutiveDistinctPrimeFactors(max, 1, 3, 3)).toEqual([644]);
  });

  it('finds all consecutive numbers with distinct prime factors up to max', () => {
    expect(problem47.consecutiveDistinctPrimeFactors(37, null, 2, 2)).toEqual([14, 20, 21, 33, 34, 35]);
  });
});
