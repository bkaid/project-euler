'use strict';
const prime = require('../../common/math/prime');

/**
 * Find a prime below a given max that can be written as a sum of the most consecutive primes
 * @param {Number} max
 * @returns {{consecutivePrimes: number, prime: number}[]}
 */
exports.consecutivePrimeSum = max => {
  let sieve = prime.sieveOfAtkin(max);
  let consecutiveSum = [0];
  let previous = 0;
  sieve.every((isPrime, index) => {
    if (isPrime) {
      previous += index;
      consecutiveSum.push(previous);
    }
    return previous < max;
  });

  let consecutivePrimes = 0;
  let maxPrime = 0;
  for (let startingIndex = 1; startingIndex <= consecutiveSum.length; startingIndex++) {
    for (let endingIndex = consecutiveSum.length - 1; endingIndex > startingIndex; endingIndex--) {
      let currentValue = consecutiveSum[endingIndex] - consecutiveSum[startingIndex - 1];
      if (endingIndex - startingIndex > consecutivePrimes && currentValue > maxPrime && sieve[currentValue]) {
        consecutivePrimes = endingIndex - startingIndex + 1;
        maxPrime = currentValue;
      }
    }
  }
  return { consecutivePrimes: consecutivePrimes, prime: maxPrime };
};
