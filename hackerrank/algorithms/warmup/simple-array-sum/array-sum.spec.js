'use strict';
const arraySum = require('./array-sum');

describe('arraySum', () => {
  it('should be defined', () => {
    expect(arraySum).toBeDefined();
  });

  it('should sum each item in an array', () => {
    var sum = arraySum([1, 2, 3, 4, 10, 11]);
    expect(sum).toBe(31);
  });
});