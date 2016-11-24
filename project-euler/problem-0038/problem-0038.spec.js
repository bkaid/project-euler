'use strict';
const problem38 = require('./problem-0038');

describe('pandigitalMultiples', () => {
  it('finds known pandigital multiple', () => {
    expect(problem38.pandigitalMultiples(8, 100).map(p => p.multiple)).toEqual([18, 78]);
  });
});
