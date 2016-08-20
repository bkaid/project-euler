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
