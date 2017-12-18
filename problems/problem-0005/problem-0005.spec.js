'use strict';
const problem5 = require('./problem-0005');

describe('smallestMultiple', () => {
  it('should find smallest multiple of numbers 1-N for known input', () => {
    expect(problem5.smallestMultiple(10)).toBe(2520);
  });
});
