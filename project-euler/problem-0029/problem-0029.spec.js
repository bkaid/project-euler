'use strict';
const problem29 = require('./problem-0029');

describe('distinctPowers', () => {
  it('counts distinct powers for known input', () => {
    expect(problem29.distinctPowers(5)).toEqual(15);
  });
});
