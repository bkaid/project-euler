'use strict';
const problem6 = require('./problem-0006');

describe('sumSquareDifference', () => {
  it('should calculate sum square difference for known input', () => {
    expect(problem6.sumSquareDifference(10).toString()).toBe('2640');
  });
});
