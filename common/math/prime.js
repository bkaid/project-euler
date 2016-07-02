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

  // only need to search for prime numbers up to the square root of the value. 
  // if a number is not prime, it can be factored into two factors, a * b.
  // if a and b were both greater than the square root of the number, a * b
  // would be greater than the value so at least one of its factors must be less.
  while (number % divisor !== 0 && divisor <= sqrt) {
    // increase by 2 to skip all even numbers
    divisor += divisor > 2 ? 2 : 1;
  }

  return divisor > sqrt;
};

/**
 * Calculates the prime factorization of a number
 * @param {Number} value
 * @returns {{base: number, exponent: number}[]}
 */
exports.primeFactorization = (value) => {
  let primeFactorization = [];
  let lookForFactors = value > 1;

  // compute the prime factorization (primes and their powers)
  while (lookForFactors) {
    let exponent = 0;
    let divisor = 2;
    let sqrt = Math.sqrt(value);

    // only need to check if prime up to its square root
    while (value % divisor !== 0 && divisor <= sqrt) {
      // increase by 2 to skip all even numbers
      divisor += divisor > 2 ? 2 : 1;
    }

    while (value % divisor === 0) {
      exponent++;
      value /= divisor;
    }

    lookForFactors = value >= divisor && divisor <= sqrt;

    if (!lookForFactors) {
      exponent = exponent || 1;
      divisor = Math.max(value, divisor);
    }

    primeFactorization.push({ base: divisor, exponent: exponent });
  }

  return primeFactorization;
};
