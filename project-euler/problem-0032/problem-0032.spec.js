'use strict';
const problem32 = require('./problem-0032');

describe('pandigitalProducts', () => {
  it('finds should contain known pandigital product', () => {
    // 39x186=7254
    expect(problem32.pandigitalProducts(9)).toContain(7254);

    // 3x4=12
    expect(problem32.pandigitalProducts(4)).toEqual([12]);
  });
});
