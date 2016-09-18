'use strict';
const problem1 = require('./problem-0001');

describe('sumMultiplesOf3And5', () => {
  it('should be defined', () => {
    expect(problem1.sumMultiplesOf3And5).toBeDefined();
  });

  it('should sum known sample input', () => {
    let sum = problem1.sumMultiplesOf3And5(10);
    expect(sum.toString()).toBe('23');
  });

  it('should sum in less than a second due to O(1) notation', () => {
    let start = process.hrtime();
    problem1.sumMultiplesOf3And5(1000000000);
    let end = process.hrtime(start);
    expect(end[0]).toBeLessThan(1);
  });
});

describe('sumNumbersDivisibleBy', () => {
  it('can sum all numbers divisible by x', () => {
    let x = 3;
    let max = 10;
    let sum = problem1.sumNumbersDivisibleBy(x, max);
    expect(sum.toString()).toBe('18');
  });
});

describe('sumOfIntegersFrom1ToN', () => {
  it('can sum numbers 1 to n', () => {
    let n = 5;
    let sum = problem1.sumIntegersFrom1To(n);
    expect(sum.toString()).toBe('15');
  });
});
