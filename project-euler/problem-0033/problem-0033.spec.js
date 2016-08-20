'use strict';
const problem33 = require('./problem-0033');

describe('digitCancellingFractions', () => {
  it('finds non-trivial fractions that be simplified by removing digits', () => {
    expect(problem33.digitCancellingFractions(2, 1).length).toEqual(4);
  });
});
