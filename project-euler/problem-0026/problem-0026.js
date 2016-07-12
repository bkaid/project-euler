'use strict';

exports.largestReciprocalCycles = new Map();

/**
 * Finds the largest number d where d < max for which 1/d contains the longest recurring cycle in its decimal fraction part.
 * @param {Number} max
 * @returns {Number}
 */
exports.largestReciprocalCycle = (max) => {
  let result = 0;
  let longestPeriodLength = 0;
  let d = 0;

  while(d < max) {
    if (!exports.largestReciprocalCycles.has(d)) {
      let periodLength = exports.periodLength(1, d);
      if (periodLength > longestPeriodLength) {
        result = d;
        longestPeriodLength = periodLength;
      }
      exports.largestReciprocalCycles.set(d, { result: result, longestPeriodLength: longestPeriodLength });
    } else {
      result = exports.largestReciprocalCycles.get(d).result;
      longestPeriodLength = exports.largestReciprocalCycles.get(d).longestPeriodLength;
    }
    d++;
  }
  
  return result;
};

/**
 * Calculates the length of the repeating portion of a fraction
 * Uses basic long division algorithm to calculate, ending once a division has
 * previously been performed
 * @param {Number} numerator
 * @param {Number} denominator
 * @returns {Number}
 */
exports.periodLength = (numerator, denominator) => {
  let position = 0;
  let length = 0;
  let remainder = numerator % denominator;
  let divisions = new Map();

  while (remainder > 0) {
    if (divisions.has(remainder)) {
      length = position - divisions.get(remainder);
      remainder = 0;
    } else {
      divisions.set(remainder, position);
      remainder = remainder % denominator;
      position++;
    }
    if (denominator > remainder) {
      remainder *= 10;
    }
  }

  return length;
};