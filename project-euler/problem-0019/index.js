'use strict';
const problem19 = require('./problem-0019');

console.time('Elapsed Time');
let result = problem19.firstOfMonthSundays(1901, 1, 1, 2000, 12, 1);
console.log('How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?');
console.log(`${result}`);
console.timeEnd('Elapsed Time');