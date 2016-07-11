'use strict';
const problem24 = require('./problem-0024');

describe('nthLexicographicPermutation', () => {
  it('calculates nth lexicographic permutation for unsorted input', () => {
    let array = [2,1,0];
    expect(problem24.nthLexicographicPermutation(array, 1)).toEqual([0,1,2]);
    expect(problem24.nthLexicographicPermutation(array, 2)).toEqual([0,2,1]);
    expect(problem24.nthLexicographicPermutation(array, 3)).toEqual([1,0,2]);
    expect(problem24.nthLexicographicPermutation(array, 4)).toEqual([1,2,0]);
    expect(problem24.nthLexicographicPermutation(array, 5)).toEqual([2,0,1]);
    expect(problem24.nthLexicographicPermutation(array, 6)).toEqual([2,1,0]);
  });
});

describe('toFactoradic', () => {
  it('converts decimal number to factoradic number', () => {
    expect(Number(problem24.toFactoradic(0).join(''))).toEqual(0);
    expect(Number(problem24.toFactoradic(1).join(''))).toEqual(10);
    expect(Number(problem24.toFactoradic(2).join(''))).toEqual(100);
    expect(Number(problem24.toFactoradic(3).join(''))).toEqual(110);
    expect(Number(problem24.toFactoradic(81).join(''))).toEqual(31110);
    expect(Number(problem24.toFactoradic(120).join(''))).toEqual(100000);
  });
});
