'use strict';
const problem29 = require('./problem-0029');

describe('distinctPowers', () => {
  it('counts distinct powers for known input', () => {
    expect(problem29.distinctPowers(5)).toEqual(15);
    expect(problem29.distinctPowers(100)).toEqual(9183);
    expect(problem29.distinctPowers(256)).toEqual(62136);
    expect(problem29.distinctPowers(1000)).toEqual(977358);
  });
});
