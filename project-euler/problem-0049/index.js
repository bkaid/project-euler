'use strict';
const problem49 = require('./problem-0049');

module.exports = {
  description: 'The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases by 3330, is unusual in two ways: (i) each of the three terms are prime, and, (ii) each of the 4-digit numbers are permutations of one another. What 12-digit number do you form by concatenating the three terms in this sequence?',
  result: () => problem49.primePermutations(1488, 9999, 3)[0].join('')
};
