'use strict';
const problem22 = require('./problem-0022');

describe('namesScore', () => {
  it('calculates name score correctly for sample input', () => {
    let names = ['COLIN'];
    expect(problem22.namesScore(names)).toBe(53);
  });
});
