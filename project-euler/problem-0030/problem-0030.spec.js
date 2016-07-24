'use strict';
const problem30 = require('./problem-0030');

describe('digitNthPowerSum', () => {
  it('sums all numbers that can be written as the sum of nth powers of their digits for known input', () => {
    expect(problem30.digitNthPowerSum(4)).toEqual(19316);
  });
});
