'use strict';
const problem48 = require('./problem-0048');

describe('selfPowers', () => {
  it('calculates self powers for known input', () => {
    expect(problem48.selfPowers(10, 10)).toBe(405071317);
  });
});
