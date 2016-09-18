'use strict';
const isFunny = require('./funny-string');

describe('funnyString', () => {
  it('should be defined', () => {
    expect(isFunny).toBeDefined();
  });

  it('should return true for known input acxz', () => {
    expect(isFunny('acxz')).toBeTruthy();
  });

  it('should return false for known input bcxz', () => {
    expect(isFunny('bcxz')).toBeFalsy();
  });
});
