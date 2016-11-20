'use strict';
const problem32 = require('./problem-0032');

let n = 7;

module.exports = {
  description: `Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through ${n} pandigital`,
  result: () => problem32.pandigitalProducts(n).reduce((previous, current) => previous + current, 0)
};
