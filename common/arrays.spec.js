'use strict';
require('./arrays');

describe('combinations', () => {
  it('should get combinations for given size', () => {
    expect([].combinations(1)).toEqual([]);
    expect([1].combinations(1)).toEqual([[1]]);
    expect([1, 2, 3].combinations(1)).toEqual([[1], [2], [3]]);
    expect([1, 2, 3].combinations(2)).toEqual([[1, 2], [1, 3], [2, 3]]);
    expect([1, 2, 3].combinations(3)).toEqual([[1, 2, 3]]);
    expect([1, 2, 3].combinations(4)).toEqual([]);
  });
});

describe('prunedCombinations', () => {
  it('should combinations with values removed', () => {
    expect([1, 6, 1, 6].prunedCombinations([1])).toEqual([[6, 1, 6], [1, 6, 6]]);
    expect([1, 6, 1, 6].prunedCombinations([1, 6, 1])).toEqual([[6]]);
  });
});

describe('permutations', () => {
  it('should get all permutations for an array', () => {
    let permutations = [1, 2, 3].permutations();
    expect(permutations.length).toBe(6);
    expect(permutations).toContain([1, 2, 3]);
    expect(permutations).toContain([1, 3, 2]);
    expect(permutations).toContain([2, 1, 3]);
    expect(permutations).toContain([2, 3, 1]);
    expect(permutations).toContain([3, 2, 1]);
    expect(permutations).toContain([3, 1, 2]);
  });
});

describe('nextPermutation', () => {
  it('should get the next permutation of an array', () => {
    let array = [1, 2, 3];
    array.nextPermutation();
    expect(array).toEqual([1, 3, 2]);
  });
});
