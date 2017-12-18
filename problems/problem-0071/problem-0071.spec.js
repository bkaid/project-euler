'use strict';
const problem71 = require('./problem-0071');

describe('maxReducedProperFraction', () => {
  it('calculates given input', () => {
    expect(problem71.maxReducedProperFraction(8, 3, 7)).toEqual({ numerator: 2, denominator: 5 });
  });
});
