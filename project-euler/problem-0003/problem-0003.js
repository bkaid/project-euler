'use strict';

/**
 * Returns the largest prime factor for a given number
 * @param {Number} value
 * @returns {Number}
 */
exports.largestPrimeFactor = (value, divisor = 2) => {
  // for performance, only need to search for prime numbers up to the square
  // root of the value. if a number is not prime, it can be factored into two
  // factors, a * b. if a & b were both greater than the square root of the number, a * b
  // would be greater than the value so at least one of its factors must be less.
  let sqrt = Math.sqrt(value);
  while (value % divisor !== 0 && divisor <= sqrt) {
    // increase by 2 to skip all even numbers
    divisor += divisor > 2 ? 2 : 1;
  }

  // continue to divide the value by the prime factor in case its divisble several times
  while (value % divisor === 0) {
    value /= divisor;
  }

  if (value >= divisor && divisor <= sqrt) {
    // keep looking for a larger prime factor
    return exports.largestPrimeFactor(value, divisor);
  }

  // the current divisor or value is the largest prime factor
  return Math.max(divisor, value);
};
