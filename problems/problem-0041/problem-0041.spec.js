'use strict';
const problem41 = require('./problem-0041');

describe('pandigitalPrimes', () => {
  it('contains sample prime', () => {
    expect(problem41.pandigitalPrimes()).toContain(2143);
  });
});
