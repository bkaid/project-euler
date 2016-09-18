'use strict';
const problem33 = require('./problem-0033');

console.log('If the product of these digit cancelling fractions is given in its lowest common terms, find the value of the denominator.');

let fractions = problem33.digitCancellingFractions(2, 1);
let sums = fractions.reduce((previous, current) => {
  previous.numerator += current.numerator;
  previous.denominator += current.denominator;
  return previous;
});

console.log(`${sums.numerator} ${sums.denominator}`);
