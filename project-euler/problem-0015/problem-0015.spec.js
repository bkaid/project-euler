'use strict';
const problem15 = require('./problem-0015');

describe('latticePaths', () => {
  it('calculates paths for sample input', () => {
    expect(problem15.latticePaths(2, 2)).toBe(6);
    expect(problem15.latticePaths(3, 2)).toBe(10);
  });

  it('calculates paths for hacker rank modulo results', () => {
    expect(problem15.latticePaths(500, 500, 1000000007)).toBe(159835829);
    expect(problem15.latticePaths(3, 4) % 1000000007).toBe(35);
  });
});
