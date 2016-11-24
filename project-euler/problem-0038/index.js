'use strict';
const problem38 = require('./problem-0038');

const digits = 9;
const max = null;

module.exports = {
  description: `What is the largest 1 to ${digits} pandigital ${digits}-digit number that can be formed as the concatenated product of an integer with (1,2, ... , n) where n > 1?`,
  result: () => problem38.pandigitalMultiples(digits, max).reduce((previous, current) => Math.max(current.pandigital, previous), 0)
};
