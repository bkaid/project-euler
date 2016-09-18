'use strict';

/**
 * Suppose you have a String, S, of length N that is indexed from 0 to N - 1.
 * You also have some String, R, that is the reverse of String S. S is funny if
 * the condition |S[i] - S[i-1]| = |R[i] - R[i-1]| is true for every character i from 1 to N-1.
 * @param {String} input
 * @returns {Boolean}
 */
module.exports = input => {
  for (let i = 1, len = input.length; i < len; i++) {
    let forward = Math.abs(input[i].charCodeAt(0) - input[i - 1].charCodeAt(0));
    let reverse = Math.abs(input[len - i - 1].charCodeAt(0) - input[len - i].charCodeAt(0));
    if (forward !== reverse) {
      return false;
    }
  }
  return true;
};
