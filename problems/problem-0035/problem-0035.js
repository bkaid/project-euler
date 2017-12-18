'use strict';
const prime = require('../../common/math/prime');
require('../../common/math/digits');
require('../../common/arrays');

/**
 * Finds primes where all rotations of its digits are also prime
 * @param {Number} max
 * @returns {Number[]}
 */
exports.circularPrimes = max => {
  let results = [];
  let primes = prime.getPrimes(0, max);
  while (primes.length) {
    let current = primes.shift();
    if (current < 10) {
      results.push(current);
      continue;
    }

    let digits = current.toDigits();
    if (digits.some(d => d % 2 === 0 || d === 5)) {
      continue;
    }

    let isCircular = true;
    let rotations = [];
    for (let i = 0; i < digits.length - 1; i++) {
      digits.rotate();
      let rotation = digits.toNumber();
      if (rotation === current || primes.includes(rotation)) {
        rotations.push(rotation);
      } else {
        isCircular = false;
        break;
      }
    }

    if (isCircular) {
      results.push(current);
      rotations.forEach(rotation => {
        let index = primes.indexOf(rotation);
        if (index > -1) {
          results.push(rotation);
          primes.splice(index, 1);
        }
      });
    }
  }

  return results.sort((a, b) => a - b);
};
