'use strict';
const problem4 = require('./problem-0004');

describe('largestPalindromeProduct', () => {
  it('should be defined', () => {
    expect(problem4.largestPalindromeProduct).toBeDefined();
  });

  it('should find largest palindrome product for given sample input', () => {
    let result = problem4.largestPalindromeProduct(2);
    expect(result).toBe(9009);
  });
  
  it('should find largest palindrome product under N for given sample input', () => {
    let result = problem4.largestPalindromeProduct(3, 101110);
    expect(result).toBe(101101);
  });
});
