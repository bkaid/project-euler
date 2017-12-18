'use strict';
const problem49 = require('./problem-0049');

describe('primePermutations', () => {
  it('contains known permutation', () => {
    expect(problem49.primePermutations(1486, 2000, 3)).toEqual([[1487, 4817, 8147]]);
  });
});
