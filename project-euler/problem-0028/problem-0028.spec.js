'use strict';
const problem28 = require('./problem-0028');

describe('spiralDiagonalSum', () => {
  it('calculates sum for known input', () => {
    expect(problem28.spiralDiagonalSum(5)).toEqual(101);
    expect(problem28.spiralDiagonalSum(3)).toEqual(25);
  });
});
