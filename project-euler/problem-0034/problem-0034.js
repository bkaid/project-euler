'use strict';

const factorials = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];

/**
 * Find the sum of all numbers which are equal to the sum of the factorial of their digits.
 * @param {Number} max
 * @returns {Number[]}
 */
exports.digitFactorials = max => {
  // set upper limit at 7 digits because you cant get 8+ digits summing their factorials
  max = max || 7 * factorials[9];

  let results = [];

  for (let i = 3; i <= max; i++) {
    let number = i;
    let sum = 0;
    while (number > 0) {
      let digit = number % 10;
      sum += factorials[digit];
      number = parseInt(number / 10);
    }
    if (sum === i) {
      results.push(i);
    }
  }
  return results;
};

/**
 * Find the sum of all numbers below N which divide the sum of the factorial of their digits.
 * @param {Number} max
 * @returns {Number[]}
 */
exports.divisibleDigitFactorials = max => {
  let results = [];

  for (let i = 10; i <= max; i++) {
    let number = i;
    let sum = 0;
    while (number > 0) {
      let digit = number % 10;
      sum += factorials[digit];
      number = parseInt(number / 10);
    }
    if (sum % i === 0) {
      results.push(i);
    }
  }
  return results;
};
