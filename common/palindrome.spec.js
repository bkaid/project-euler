'use strict';
require('./palindrome');

describe('isPalindome', () => {
  it('should return true for palindrome strings', () => {
    expect('racecar'.isPalindrome()).toEqual(true);
  });

  it('should return false for non-palindrome strings', () => {
    expect('palindrome'.isPalindrome()).toEqual(false);
  });
});
