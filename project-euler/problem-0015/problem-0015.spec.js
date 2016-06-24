'use strict';
const problem15 = require('./problem-0015');

describe('latticePaths', () => {
  it('calculates paths for sample input', () => {
    expect(problem15.latticePaths(2,2)).toBe(6);
  });
});
