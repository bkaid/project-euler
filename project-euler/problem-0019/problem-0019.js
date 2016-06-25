'use strict';
const BigNumber = require('bignumber.js');

/**
 * Calculates the number of times Sunday fell on the first of the month between two dates (both inclusive)
 * Uses the fact that Gregorian calendar repeats itself every 400 years for performance when calculating dates
 * with really large years.
 * @param {Number|BigNumber} startYear
 * @param {Number} startMonth
 * @param {Number} startDay
 * @param {Number|BigNumber} endYear
 * @param {Number} endMonth
 * @param {Number} endDay
 * @returns {Number}
 */
exports.firstOfMonthSundays = (startYear, startMonth, startDay, endYear, endMonth, endDay) => {
  // take the year modulo 400 to support very large year numbers
  let yearRange = new BigNumber(endYear).minus(startYear).toNumber(); 
  startYear = new BigNumber(startYear).modulo(400).toNumber();
  endYear = new BigNumber(startYear).plus(yearRange).toNumber();

  let result = 0;
  for (let currentYear = startYear; currentYear <= endYear; currentYear++) {
    let month = currentYear === startYear ? startMonth : 1;
    let maxMonth = currentYear === endYear ? endMonth : 12;
    for (; month <= maxMonth; month++) {
      let day = startYear === currentYear && month === startMonth ? startDay : 1;

      // days are modulo 400 so add 1600 to year when getting the day of the week
      let dayOfWeek = new Date(currentYear + 1600, month - 1, 1).getDay();
      result += dayOfWeek === 0 && day === 1 ? 1 : 0;
    }
  }
  return result;
};
