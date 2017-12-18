'use strict';
const prime = require('../../common/math/prime');
const digits = require('../../common/math/digits');
require('../../common/arrays');

/**
 * Finds permutations of numbers that are prime arithmetic progressions.
 * @param {Number} min Min size of first prime
 * @param {Number} max Max size of first prime
 * @param {Number} size Number of elements to find
 * @returns {Number[]}
 */
exports.primePermutations = (min, max, size) => {
  let results = [];

  // get all primes in range
  // loop each prime value less than max
  // get sorted digits as dictionary key
  // add prime to permutation dictionary for key
  // find dictionary entries of requested size
  // check each permutation collection entry for arithmetic progression

  let maxPrime = Math.pow(10, digits.digitLength(max)) - 1;
  let primes = prime.getPrimes(min, maxPrime);
  let permutations = new Map();
  for (let value of primes) {
    let primeDigits = value.toDigits();
    let key = `${primeDigits.length}-${primeDigits.sort().toNumber()}`;
    if (permutations.has(key)) {
      permutations.get(key).push(value);
    } else {
      permutations.set(key, [value]);
    }
  }
  primes = [];

  permutations.forEach((value, key) => {
    if (value.length >= size && value[0] < max) {
      let combinations = value.combinations(size);
      combinations.forEach(combination => {
        let isArithmeticProgression = true;
        let difference = combination[1] - combination[0];
        for (let i = 2; i < size; i++) {
          if (combination[i] - combination[i - 1] !== difference) {
            isArithmeticProgression = false;
            break;
          }
        }
        if (isArithmeticProgression) {
          results.push(combination);
        }
      });
    }
  });

  return results;
};
