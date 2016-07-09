'use strict';
require('./pad-left');

describe('padLeft', () => {
  it('should left pad a string', () => {
    expect('1111'.padLeft('0', 8)).toBe('00001111');
  });
});
