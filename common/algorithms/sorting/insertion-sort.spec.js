'use strict';
const sort = require('./insertion-sort');

describe('insertionSort', () => {
  it('should sort an array', () => {
    expect(sort.insertionSort([7, 4, 5, 2, 9, 1])).toEqual([1, 2, 4, 5, 7, 9]);
  });
  it('should handle an empty array', () => {
    expect(sort.insertionSort([])).toEqual([]);
  });
});
