'use strict';
require('../../common/palindrome');

/**
 * Find all numbers, less than max, which are palindromic in base 10 and base K.
 * @param {Number} max
 * @param {Number} base
 * @returns {Number[]}
 */
exports.doubleBasePalindromes = (max, base) => {
  let results = [];
  for (let i = 0; i < max; i++) {
    let base10 = i.toString(10);
    if (base10.isPalindrome()) {
      let baseK = i.toString(base);
      if (baseK[0] !== '0' && baseK.isPalindrome()) {
        results.push(i);
      }
    }
  }

  return results;
};
