'use strict';
const problem42 = require('./problem-0042');

describe('triangleWords', () => {
  it('finds known triangle words', () => {
    expect(problem42.triangleWords(['sky'])).toContain('sky');
  });

  it('filters non-triangle words', () => {
    expect(problem42.triangleWords(['dog'])).not.toContain('dog');
  });
});
