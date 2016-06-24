'use strict';

let factorials = {};

/** 
 * Returns the factorial of a number, n!
 * 5!=5 x 4 x 3 x 2 x 1 = 120
 * @param {Number} n
 * @returns {Number}
 */
let factorial = exports.factorial = (n) => {
  if (!factorials[n]) {
    factorials[n] = n === 0 ? 1 : n * factorial(n - 1);
  }

  return factorials[n];
};