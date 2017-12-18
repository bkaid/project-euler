'use strict';
const problem34 = require('./problem-0034');

module.exports = {
  description: 'Find the sum of all numbers which are equal to the sum of the factorial of their digits.',
  result: () => problem34.digitFactorials().reduce((previous, current) => previous + current, 0)
};
