'use strict';
const problem3 = require('./problem-0003');

describe('largestPrimeFactor', () => {
  it('should be defined', () => {
    expect(problem3.largestPrimeFactor).toBeDefined();
  });

  it('should find largest prime factor for given sample input', () => {
    let result = problem3.largestPrimeFactor(13195);
    expect(result).toBe(29);
  });

  it('should find largest prime factor for known input', () => {
    expect(problem3.largestPrimeFactor(18)).toBe(3);
  });

  /*
    Large prime taken sample from http://www.bigprimes.net/archive/prime/14000000/
  */
  it('large known prime numbers are computed quickly', () => {
    let prime = 32416190071;
    let result = problem3.largestPrimeFactor(prime);
    expect(result).toBe(prime);
  });
});
