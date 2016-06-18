'use strict';

/** 
 * Returns true if a number is prime
 * @param {Number} number
 * @returns {Boolean}
 */
exports.isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  let sqrt = Math.sqrt(number);
  let divisor = 2;

  // only need to check if prime up to its square root
  while (number % divisor !== 0 && divisor <= sqrt) {
    // increase by 2 to skip all even numbers
    divisor += divisor > 2 ? 2 : 1;
  }

  return divisor > sqrt;
};