'use strict';
const problem41 = require('./problem-0041');

module.exports = {
  description: `What is the largest n-digit pandigital prime that exists?`,
  result: () => Math.max.apply(Math, problem41.pandigitalPrimes())
};
