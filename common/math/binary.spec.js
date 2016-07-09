'use strict';
require('./binary.js');

describe('binary', () => {
  it('converts number to binary string', () => {
    expect(Number(1).toBinary(8)).toBe('00000001');
    expect(Number(1).toBinary(32)).toBe('00000000000000000000000000000001');
  });
});
