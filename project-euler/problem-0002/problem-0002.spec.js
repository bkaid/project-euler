'use strict';
const BigNumber = require('bignumber.js');
const problem2 = require('./problem-0002');

describe('sumEvenFibonacciTerms', () => {
  it('should be defined', () => {
    expect(problem2.sumEvenFibonacciTerms).toBeDefined();
  });

  it('should sum known sample input', () => {
    let max = new BigNumber(90);
    let sum = problem2.sumEvenFibonacciTerms(max);
    expect(sum.toString()).toBe('44');
  });

  it('should sum large inputs', () => {
    let max = new BigNumber('400000000000000000');
    let sum = problem2.sumEvenFibonacciTerms(max);
    expect(sum.toString()).toBe('210098070363744836');
  });
});
