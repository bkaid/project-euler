'use strict';
const problem4 = require('./problem-0004');

let digits = 3;

module.exports = {
  description: `Find the largest palindrome made from the product of two ${digits}-digit numbers.`,
  result: () => problem4.largestPalindromeProduct(digits)
};
