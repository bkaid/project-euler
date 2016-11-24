'use strict';

/**
 * Returns true if a number is pandigital
 * An n-digit number is pandigital if it makes use of all the digits 1 to n exactly once
 * @param {Number} number
 * @returns {Boolean}
 */
exports.isPandigital = number => {
  let count = 0;
  let digit = 0;
  let digits = new Uint8Array(9);

  // loop through each digit
  while (number > 0) {
    // get the current digit
    digit = number % 10;

    // not pandigital if digit is 0 or has already been seen
    if (digit === 0 || digits[digit - 1]) {
      return false;
    }

    // track that we've seen this digit
    digits[digit - 1] = 1;
    count++;

    // remove the current digit from the number
    number = Math.floor(number / 10);
  }

  // make sure every digit up to number of total digits has been seen
  return digits.every((item, index) => index >= count || item === 1);
};
