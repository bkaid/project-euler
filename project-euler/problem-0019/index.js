'use strict';
const problem19 = require('./problem-0019');

module.exports = {
  description: 'How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?',
  result: () => problem19.firstOfMonthSundays(1901, 1, 1, 2000, 12, 1)
};
