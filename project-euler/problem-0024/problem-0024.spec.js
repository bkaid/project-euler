'use strict';
const problem24 = require('./problem-0024');

describe('nextLexicographicPermutation', () => {
  it('calculates next lexicographic permutation for known input', () => {
    let array = [1,2,3,4];
    expect(problem24.nextLexicographicPermutation(array)).toEqual([1,2,4,3]);
    expect(problem24.nextLexicographicPermutation(array)).toEqual([1,3,2,4]);
    expect(problem24.nextLexicographicPermutation(array)).toEqual([1,3,4,2]);
  });
  
  it('no remaining lexicographic permutations returns null', () => {
    expect(problem24.nextLexicographicPermutation([4,3,2,1])).toBeNull();
  });
});

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
