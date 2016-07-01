'use strict';
const modularExponentiation = require('../../common/math/modular-exponentiation').modularExponentiation;

/**
 * Find the last x digits of the series 1^1 + 2^2 + 3^3 + ... + n^n
 * @param {Number} n
 * @param {Number} digits the remaining digits to return
 * @returns {Number}
 */
exports.selfPowers = (n, digits) => {
  let modulo = Math.pow(10, digits);
  let current = 0;

  for(let i = 1; i <= n; i++) {
    if (i % 10 !== 0) {
      let value = modularExponentiation(i, i, modulo);
      current += value;
      current %= modulo;
    }
  }

  return current;
};
