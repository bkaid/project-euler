'use strict';
const problem63 = require('./problem-0063');

describe('powerDigits', () => {
  it('finds n digit numbers that are also an nth power', () => {
    expect(problem63.powerDigits(2).map((value) => value.toNumber())).toEqual([16, 25, 36, 49, 64, 81]);
  });
});
