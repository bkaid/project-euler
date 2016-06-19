'use strict';
const problem13 = require('./problem-0013');

describe('largeSum', () => {
  it('calculates for known input', () => {
    let input = ['100', '200', '300'];
    expect(problem13.largeSum(input).toString()).toBe('600');
  });
});
