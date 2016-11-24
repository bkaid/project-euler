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
    expect(digits.digitLength(1000000)).toEqual(7);
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

describe('firstDigit', () => {
  it('gets first digit of a number', () => {
    expect((987).firstDigit()).toBe(9);
    expect((7).firstDigit()).toBe(7);
  });
});

describe('toDigits', () => {
  it('converts an number to an array of digits', () => {
    expect((3797).toDigits()).toEqual([3, 7, 9, 7]);
  });
});

describe('toNumber', () => {
  it('converts an array of digits to a number', () => {
    expect([].toNumber()).toBeUndefined();
    expect([1].toNumber()).toEqual(1);
    expect([3, 7, 9, 7].toNumber()).toEqual(3797);
  });
});

describe('rotate', () => {
  it('rotates digits of a number', () => {
    expect((1234).rotate()).toEqual(4123);
    expect((4123).rotate()).toEqual(3412);
    expect((3412).rotate()).toEqual(2341);
    expect((2341).rotate()).toEqual(1234);
  });
});

describe('concat', () => {
  it('concatenates two numbers', () => {
    expect((123).concat(456)).toEqual(123456);
  });
});
