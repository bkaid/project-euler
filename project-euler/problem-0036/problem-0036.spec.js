'use strict';
const problem36 = require('./problem-0036');

describe('doubleBasePalindromes', () => {
  it('finds double base palindome for known input', () => {
    expect(problem36.doubleBasePalindromes(586, 2)).toContain(585);
  });
});
