'use strict';
const problem9 = require('./problem-0009');

let n = 1000;

module.exports = {
  description: `There exists exactly one Pythagorean triplet for which a + b + c = ${n}. Find the product abc.`,
  result: () => problem9.maxPythagoreanTripletProduct(n)
};
