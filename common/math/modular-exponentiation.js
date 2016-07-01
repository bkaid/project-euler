'use strict';
const BigNumber = require('bignumber.js');

/** 
 * Returns the remainder of the base raised to the exponent power, divided by the modulo
 * See: https://en.wikipedia.org/wiki/Modular_exponentiation
 * @param {Number} base
 * @param {Number} exponent
 * @param {Number} modulo
 * @returns {Number}
 */
exports.modularExponentiation = (base, exponent, modulo) => {
  // TODO: see if there is a more efficient way to calculate than using BigNumber
  return new BigNumber(base).pow(exponent, modulo).toNumber();
};
