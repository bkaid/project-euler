'use strict';

/**
 * Gets the greatest common divsior of two numbers
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */
module.exports = (a, b) => {
  if (a === 0) {
    return b;
  }

  while (b !== 0) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }

  return a;
};
