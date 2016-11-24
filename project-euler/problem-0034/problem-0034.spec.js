'use strict';
const problem34 = require('./problem-0034');

describe('digitFactorials', () => {
  it('finds known digit factorials', () => {
    expect(problem34.digitFactorials(150)).toContain(145);
  });

  it('finds known digit factorials evenly divisible', () => {
    expect(problem34.divisibleDigitFactorials(20)).toContain(19);
  });
});
