'use strict';

/**
 * Returns the remainder of the base raised to the exponent power, divided by the modulo
 * See: https://en.wikipedia.org/wiki/Modular_exponentiation
 * @param {Number} base
 * @param {Number} exponent
 * @param {Number} modulo
 * @returns {Number}
 */
exports.modularExponentiation = (base, exponent, modulo) => {
  let i = 1;
  let result = 1;
  while (i <= exponent) {
    result = (result * base) % modulo;
    i++;
  }
  return result;
};
