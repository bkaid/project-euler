'use strict';
const problem16 = require('./problem-0016');

describe('powerDigitSum', () => {
  it('calculates sum for known input', () => {
    expect(problem16.powerDigitSum(2, 9)).toBe(8);
    expect(problem16.powerDigitSum(2, 15)).toBe(26);
  });
});
