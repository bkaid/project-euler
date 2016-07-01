'use strict';
const problem48 = require('./problem-0048');

describe('selfPowers', () => {
  it('calculates self powers for known input', () => {
    expect(problem48.selfPowers(10).toNumber()).toBe(10405071317);
  });
});
