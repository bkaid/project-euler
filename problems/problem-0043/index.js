'use strict';
const problem43 = require('./problem-0043');

module.exports = {
  description: `Find the sum of all 0 to 9 pandigital numbers with given property.`,
  result: () => problem43.substringDivisibility().reduce((previous, current) => previous + current, 0)
};
