'use strict';
const digits = require('./digits');

describe('truncateLeft', () => {
  it('removes digit from left', () => {
    expect(digits.truncateLeft(3797, 1)).toEqual(797);
    expect(digits.truncateLeft(3797, 2)).toEqual(97);
    expect(digits.truncateLeft(3797, 3)).toEqual(7);
  });
});

describe('truncateRight', () => {
  it('removes digit from right', () => {
    expect(digits.truncateRight(3797, 1)).toEqual(379);
    expect(digits.truncateRight(3797, 2)).toEqual(37);
    expect(digits.truncateRight(3797, 3)).toEqual(3);
    expect(digits.truncateRight(3797, 4)).toEqual(0);
  });
});

describe('digitLength', () => {
  it('calculates number of digits', () => {
    expect(digits.digitLength(3797)).toEqual(4);
    expect(digits.digitLength(379)).toEqual(3);
    expect(digits.digitLength(37)).toEqual(2);
    expect(digits.digitLength(2)).toEqual(1);
    expect(digits.digitLength(1)).toEqual(1);
    expect(digits.digitLength(0)).toEqual(1);
    expect(digits.digitLength(-0)).toEqual(1);
    expect(digits.digitLength(-1)).toEqual(1);
    expect(digits.digitLength(-2)).toEqual(1);
  });
});