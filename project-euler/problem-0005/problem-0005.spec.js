'use strict';
const problem5 = require('./problem-0005');

describe('smallestMultiple', () => {
  it('should find smallest multiple of numbers 1-N for known input', () => {
    expect(problem5.smallestMultiple(10)).toBe(2520);
  });
});

describe('isPrime', () => {
  it('should return true for known prime number 2', () => {
    expect(problem5.isPrime(2)).toBeTruthy();
  });

  it('should return true for known prime number 3', () => {
    expect(problem5.isPrime(3)).toBeTruthy();
  });

  it('should return false for known non-prime number', () => {
    expect(problem5.isPrime(9)).toBeFalsy();
  });

  /*
    Large prime taken sample from http://www.bigprimes.net/archive/prime/14000000/
  */
  it('large known prime number is determined quickly', () => {
    expect(problem5.isPrime(32416190071)).toBeTruthy();
  });
});
