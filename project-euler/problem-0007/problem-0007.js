'use strict';

let knownPrimes = [];

/**
 * Returns the nth prime number
 * @param {Number} n
 * @returns {Number}
 */
exports.nthPrime = (n) => {
  let i = knownPrimes.length ? knownPrimes[knownPrimes.length - 1] : 0;

  while(knownPrimes.length < n) {
    i += i > 2 ? 2 : 1;
    if (exports.isPrime(i)) {
      knownPrimes.push(i);
    }
  }

  return knownPrimes[n - 1];
};

/** 
 * Returns true if a number is prime
 * Re-used from problem 5.
 * @param {Number} number
 * @returns {Boolean}
 */
exports.isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  let sqrt = Math.sqrt(number);
  let divisor = 2;

  while (number % divisor !== 0 && divisor <= sqrt) {
    divisor += divisor > 2 ? 2 : 1;
  }

  return divisor > sqrt;
};